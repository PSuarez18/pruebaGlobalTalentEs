import { DestinationType } from "./types";
import {
  Building2,
  Palmtree,
  Mountain,
  Tent,
  MoreHorizontal,
  Waves,
  Sun,
  Droplets,
  Trees,
  Landmark,
  Snowflake,
  Binoculars,
  Ticket,
  MapPin,
} from "lucide-react";
import type { ElementType } from "react";
import type { DestinationFilterType } from "./types";

export type DestinationTypeUiKey = (typeof DestinationType)[keyof typeof DestinationType];

export type DestinationTypeUiConfig = {
  icon: ElementType | null;
  label: string;
};

export type DestinationTypeFilterItem = {
  label: string;
  value: DestinationFilterType;
  icon?: ElementType;
};

export const DESTINATION_TYPE_UI: Record<DestinationTypeUiKey, DestinationTypeUiConfig> = {
  [DestinationType.City]: { icon: Building2, label: "Ciudad" },
  [DestinationType.Beach]: { icon: Palmtree, label: "Playa" },
  [DestinationType.Mountain]: { icon: Mountain, label: "Montaña" },
  [DestinationType.Countryside]: { icon: Tent, label: "Rural" },
  [DestinationType.Island]: { icon: Waves, label: "Isla" },
  [DestinationType.Desert]: { icon: Sun, label: "Desierto" },
  [DestinationType.Lake]: { icon: Droplets, label: "Lago" },
  [DestinationType.Forest]: { icon: Trees, label: "Bosque" },
  [DestinationType.Historical]: { icon: Landmark, label: "Histórico" },
  [DestinationType.Ski]: { icon: Snowflake, label: "Esquí" },
  [DestinationType.Safari]: { icon: Binoculars, label: "Safari" },
  [DestinationType.ThemePark]: { icon: Ticket, label: "Parque temático" },
  [DestinationType.Other]: { icon: MoreHorizontal, label: "Otro" },
};

export function buildDestinationTypeFilterItems(): DestinationTypeFilterItem[] {
  const allItem: DestinationTypeFilterItem = {
    label: "Todos",
    value: "ALL",
  };

  const typeItems: DestinationTypeFilterItem[] = Object.values(DestinationType).map(
    (value) => {
      const config =
        DESTINATION_TYPE_UI[value] ?? {
          icon: MapPin,
          label: value,
        };

      return {
        label: config.label,
        value,
        icon: config.icon ?? undefined,
      };
    }
  );

  return [allItem, ...typeItems];
}
