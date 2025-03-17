import { onDeleteChapter, onUpdateNewChapter } from "@/actions/chapters";
import { IChapter } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { toast } from "sonner";

export const useChapterInfo = () => {
  const chapterRef = useRef<HTMLAnchorElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const [chapter, setChapter] = useState<string | undefined>(undefined);
  const [edit, setEdit] = useState<boolean | undefined>(undefined);
  const [icon, setIcon] = useState<string | undefined>(undefined);

  const client = useQueryClient();

  const onEditChapter = (id: string | undefined) => {
    setChapter(id);
    setEdit(true);
  };

  const onSetIcon = (icon: string | undefined) => setIcon(icon);

  const {
    isPending: isUpdateChapterPending,
    mutate: updateChapter,
    variables: updateChapterVariables,
  } = useMutation({
    mutationFn: (data: { name?: string; icon?: string }) =>
      onUpdateNewChapter(chapter!, data.name!, data.icon!),
    onMutate: () => {
      setEdit(false);
      onSetIcon(undefined);
    },
    onSuccess: (data) => {
      return toast(data.status !== 200 ? "Error" : "Success", {
        description: data.message,
      });
    },
    onSettled: async () => {
      return await client.invalidateQueries({
        queryKey: ["course-chapters"],
      });
    },
  });

  const { variables: deleteVariables, mutate: deleteChapter } = useMutation({
    mutationFn: (data: { id: string }) => onDeleteChapter(data.id),
    onSuccess: (data) => {
      return toast(data.status !== 200 ? "Error" : "Success", {
        description: data.message,
      });
    },
    onSettled: async () => {
      return await client.invalidateQueries({
        queryKey: ["course-chapters"],
      });
    },
  });
};
