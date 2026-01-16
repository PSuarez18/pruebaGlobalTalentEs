import type { ElementType } from "react";
import { Button } from "@/components/ui/button";

interface FilterButtonProps {
  label: string;
  icon?: ElementType;
  active: boolean;
  onClick: () => void;
}

export function FilterButton({ label, icon: Icon, active, onClick }: FilterButtonProps) {
  return (
    <Button
      variant="ghost"
      size="default"
      onClick={onClick}
      className={`w-full flex items-center gap-3 justify-start rounded-lg text-sm font-medium transition-all px-4 py-3 ${
        active
          ? "bg-brand-gold text-white shadow-lg shadow-brand-gold/20"
          : "text-gray-500 hover:bg-gray-50 hover:text-brand-dark"
      }`}
    >
      {Icon && (
        <Icon
          className={`h-4 w-4 ${
            active ? "text-white" : "text-gray-400"
          }`}
        />
      )}
      {!Icon && (
        <span
          className={`h-4 w-4 rounded-full border-2 ${
            active ? "border-white" : "border-gray-300"
          }`}
        ></span>
      )}
      {label}
    </Button>
  );
}

