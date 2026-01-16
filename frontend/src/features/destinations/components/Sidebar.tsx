import { Search } from "lucide-react";
import { DestinationTypeList } from "./DestinationTypeList";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InfoTooltip } from "@/components/ui/info-tooltip";
import { DestinationListMode } from "../types";
import type { DestinationFilterType } from "../types";
import { buildDestinationTypeFilterItems } from "../destinationTypeUi";

interface SidebarProps {
  search: string;
  setSearch: (val: string) => void;
  filterType: DestinationFilterType;
  setFilterType: (val: DestinationFilterType) => void;
  countryFilter: string;
  setCountryFilter: (val: string) => void;
  mode: DestinationListMode;
  setMode: (val: DestinationListMode) => void;
}

const SIDEBAR_LABELS = {
  title: "Explorar",
  subtitle: "Descubre destinos",
  searchLabel: "Buscar",
  searchPlaceholder: "Buscar destinos...",
  typeLabel: "Tipo de Destino",
  countryLabel: "País",
  countryPlaceholder: "Filtrar países...",
  allCountries: "Todos los países",
  searchTooltip: "Busca por nombre o descripción del destino",
  countryTooltip: "Código de país de 2 caracteres (ej. ES, FR)",
  resetFilters: "Reiniciar Filtros",
  modeLabel: "Ordenar por",
  modeRecent: "Más recientes",
  modeOldest: "Más antiguos",
};

export function Sidebar({
  search,
  setSearch,
  filterType,
  setFilterType,
  countryFilter,
  setCountryFilter,
  mode,
  setMode,
}: SidebarProps) {
  const dynamicDestinationTypes = buildDestinationTypeFilterItems();

  const handleResetFilters = () => {
    setSearch("");
    setFilterType("ALL");
    setCountryFilter("");
    setMode(DestinationListMode.Recent);
  };

  const hasActiveFilters = search !== "" || filterType !== "ALL" || countryFilter !== "" || mode !== DestinationListMode.Recent;

  return (
    <aside className="w-68 bg-white border-r border-gray-100 flex flex-col h-screen overflow-hidden font-sans">
      <div className="p-8 pb-4 shrink-0">
        <h2 className="font-serif text-3xl text-brand-dark mb-1">{SIDEBAR_LABELS.title}</h2>
        <p className="text-gray-400 text-sm">{SIDEBAR_LABELS.subtitle}</p>
      </div>



      <div className="px-6 py-4 shrink-0">
        <div className="mb-3 flex items-center gap-2">
          <Label className="block shrink-0">{SIDEBAR_LABELS.searchLabel}</Label>
          <InfoTooltip content={SIDEBAR_LABELS.searchTooltip} />
        </div>
        <div className="relative group">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400 group-focus-within:text-brand-gold transition-colors" />
          <Input
            type="text"
            placeholder={SIDEBAR_LABELS.searchPlaceholder}
            className="w-full  pl-10 "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="px-6 py-4  flex flex-col min-h-0">
        <Label className="mb-3 block shrink-0">{SIDEBAR_LABELS.typeLabel}</Label>
        <DestinationTypeList
          items={dynamicDestinationTypes}
          active={filterType}
          onChange={setFilterType}
        />
      </div>
      <div className="px-6 py-4 shrink-0">
        <div className="mb-3 flex items-center gap-2">
          <Label className="block shrink-0">{SIDEBAR_LABELS.modeLabel}</Label>
        </div>
        <Select
          value={mode}
          onValueChange={(val) => setMode(val as DestinationListMode)}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={DestinationListMode.Recent}>
              {SIDEBAR_LABELS.modeRecent}
            </SelectItem>
            <SelectItem value={DestinationListMode.Oldest}>
              {SIDEBAR_LABELS.modeOldest}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="px-6 py-4 shrink-0 border-t border-gray-50">
        <div className="mb-3 flex items-center gap-2">
          <Label className="block">{SIDEBAR_LABELS.countryLabel}</Label>
          <InfoTooltip content={SIDEBAR_LABELS.countryTooltip} />
        </div>
        <div className="relative">
          <Input
            type="text"
            placeholder={SIDEBAR_LABELS.countryPlaceholder}
            className="w-full   py-2 px-4 text-sm "
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
            maxLength={2}
          />
        </div>
        <div className="mt-3">
          <Button
            onClick={() => setCountryFilter("")}
            className={`w-full justify-start text-sm px-4 py-2 rounded-lg `}
            disabled={!countryFilter}
          >
            {SIDEBAR_LABELS.allCountries}
          </Button>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="p-6 pt-0 shrink-0">
          <Button
            onClick={handleResetFilters}
            variant="outline"
            className="w-full justify-center text-sm px-4 py-2 rounded-lg text-red-500 hover:text-red-600 hover:bg-red-50 border-red-100"
          >
            {SIDEBAR_LABELS.resetFilters}
          </Button>
        </div>
      )}
    </aside>
  );
}
