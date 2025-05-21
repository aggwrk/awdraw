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
      <picture>
        <a href={`https://www.instagram.com/agung_wirak`} target="_noblank" rel="noopener noreferrer">
          <VercelIcon size={16} />
          @agung_wirak
        </a> 
      </picture>
    </a>
  );
}
