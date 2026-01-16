import { Plus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HEADER_LABELS = {
  site: "HotelBediaX",
  title: "Colección de Destinos",
  subtitle: "Administra y gestiona tu selección exclusiva de destinos de clase mundial",
  add: "Agregar Destino",
};

interface HeaderProps {
  onAdd: () => void;
}

export function Header({ onAdd }: HeaderProps) {
  return (
    <div className="flex flex-col gap-6 mb-10 md:flex-row md:items-end md:justify-between">
      <div className="text-center md:text-left">
        <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
          <Sparkles className="text-brand-gold h-4 w-4" />
          <span className="text-brand-gold font-bold tracking-widest text-xs uppercase">{HEADER_LABELS.site}</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-dark mb-3">
          {HEADER_LABELS.title}
        </h1>
        <p className="text-gray-500 font-light text-base sm:text-lg max-w-2xl mx-auto md:mx-0">
          {HEADER_LABELS.subtitle}
        </p>
      </div>
      <Button
        onClick={onAdd}
        size={"lg"}
        className="w-full justify-center px-6 py-4 text-sm sm:text-base font-medium shadow-lg shadow-brand-gold/30 transition-all hover:scale-105 md:w-auto"
      >
        <Plus className="mr-2 h-5 w-5" /> {HEADER_LABELS.add}
      </Button>
    </div>
  );
}
