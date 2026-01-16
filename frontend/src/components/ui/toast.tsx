import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  status: "success" | "error";
  title: string;
  message: string;
}

export function Toast({ status, title, message, className, ...rest }: ToastProps) {
  const baseClasses =
    "flex items-center flex-col gap-1 rounded-md px-4 py-2 shadow-lg text-xs";
  const statusClasses =
    status === "success"
      ? "bg-emerald-600 text-white shadow-emerald-600/30"
      : "bg-red-600 text-white shadow-red-600/30";

  return (
    <div className={cn("fixed top-6 right-6 z-50 ", className)} {...rest}>
      <div className={cn(baseClasses, statusClasses)}>
        <span className="font-semibold">{title}</span>
        <span className=" opacity-90">{message}</span>
      </div>
    </div>
  );
}

