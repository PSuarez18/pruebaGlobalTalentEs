import { X } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function ModalWrapper({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  className,
}: ModalWrapperProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "bg-brand-cream rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200",
          className
        )}
      >
        <div className="p-8 pb-0 flex justify-between items-center">
          <h2 className="font-serif text-3xl text-brand-dark">{title}</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full hover:bg-black/5 text-gray-500"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {subtitle && (
          <div className="px-8 pb-6 pt-2">
            <p className="text-gray-500">{subtitle}</p>
          </div>
        )}

        <div className="p-8 pt-4 bg-white mx-8 mb-8 rounded-2xl shadow-sm border border-gray-100">
          {children}
        </div>
      </div>
    </div>
  );
}
