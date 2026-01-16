import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { DestinationTypeFilterItem } from "../destinationTypeUi";
import type { DestinationFilterType } from "../types";

interface DestinationTypeListProps {
  items: DestinationTypeFilterItem[];
  active: DestinationFilterType;
  onChange: (value: DestinationFilterType) => void;
}

export function DestinationTypeList({
  items,
  active,
  onChange,
}: DestinationTypeListProps) {
  return (
    <Select
      value={active}
      onValueChange={(val) => onChange(val as DestinationFilterType)}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Seleccionar tipo" />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <SelectItem key={item.value} value={item.value}>
              <div className="flex items-center gap-2">
                {Icon && <Icon className="h-4 w-4 text-gray-500" />}
                <span>{item.label}</span>
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
