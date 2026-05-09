"use client";
import * as React from "react";

type HeaderNotificationProps = {
  message?: string;
  updateMessage?: string;
  className?: string;
};

export function HeaderNotification({
  message = "This website is under development.",
  updateMessage,
  className,
}: HeaderNotificationProps) {
  return (
    <div
      className={[
        "h-6 border-b border-border/60 px-3 text-center text-xs md:text-sm leading-tight font-medium text-muted-foreground flex items-center justify-center",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {message ? <p>{message}</p> : null}
    </div>
  );
}
