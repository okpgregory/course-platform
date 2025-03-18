import { MenuProps } from "@/constants/menus";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  sidebarSettingsMenu: MenuProps[];
  userId: string;
  courseId: string;
  courseAuthorId: string | undefined;
  currentPage: string | undefined;
};

const linkClassName =
  "flex gap-x-2 items-center font-semibold rounded-xl text-secondary hover:bg-background p-2";
const linkConditionalClassName = ({
  currentPage,
  path,
}: {
  currentPage: string | undefined;
  path: string;
}) =>
  currentPage === "settings"
    ? !path && "text-primary"
    : currentPage === path && "text-primary";

function SettingsMenu({
  sidebarSettingsMenu,
  courseId,
  courseAuthorId,
  currentPage,
  userId,
}: Props) {
  return (
    <div
      className="
flex flex-col"
    >
      {sidebarSettingsMenu.map((item) =>
        item.integration ? (
          userId === courseAuthorId && (
            <Link
              className={cn(
                linkClassName,
                linkConditionalClassName({ currentPage, path: item.path })
              )}
              key={item.id}
              href={`/course/${courseId}/settings/${item.path}`}
            >
              {item.icon}
              {item.label}
            </Link>
          )
        ) : (
          <Link
            className={cn(
              linkClassName,
              linkConditionalClassName({ currentPage, path: item.path })
            )}
            href={`/course/${courseId}/settings/${item.path}`}
            key={item.id}
          >
            {item.icon}
            {item.label}
          </Link>
        )
      )}
    </div>
  );
}

export default SettingsMenu;
