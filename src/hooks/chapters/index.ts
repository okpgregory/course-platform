import { onDeleteChapter, onUpdateNewChapter } from "@/actions/chapters";
import { IChapter } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
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

  const onEndChapterEdit = (event: Event) => {
    if (inputRef.current && chapterRef.current && triggerRef.current) {
      if (
        !inputRef.current.contains(event.target as Node | null) &&
        !chapterRef.current.contains(event.target as Node | null) &&
        !triggerRef.current.contains(event.target as Node | null)
      ) {
        if (inputRef.current.value) {
          updateChapter({ name: inputRef.current.value });
        }
        if (icon) {
          updateChapter({ icon });
        } else {
          setEdit(false);
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", onEndChapterEdit, false);
    return () => {
      document.removeEventListener("click", onEndChapterEdit, false);
    };
  }, [icon]);

  const onChapterDelete = (id: string) => deleteChapter({ id });

  return {
    chapter,
    onEditChapter,
    chapterRef,
    edit,
    inputRef,
    updateChapterVariables,
    isUpdateChapterPending,
    triggerRef,
    onSetIcon,
    icon,
    onChapterDelete,
    deleteVariables,
  };
};
