import { ComponentProps } from "react";
import styles from "./Badge.module.css";

export function Badge({
  className,
  ...props
}: Omit<ComponentProps<"a">, "href">) {
  return (
    <a
      className={styles.badge}
      href="https://liveblocks.io"
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      <picture
        className="bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-zinc-50 dark:text-zinc-900 hidden md:flex py-1.5 px-2 h-fit md:h-[34px] order-4 md:ml-auto"
        asChild
      >
        <a href={`https://www.instagram.com/agung_wirak`} target="_noblank" rel="noopener noreferrer">
          <VercelIcon size={16} />
          @agung_wirak
        </a>
      
      </picture>
    </a>
  );
}
