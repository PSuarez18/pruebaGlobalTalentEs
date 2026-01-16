import { Calendar, Clock } from "lucide-react";
import type { Destination } from "../types";
import { DESTINATION_TYPE_UI } from "../destinationTypeUi";
import { formatDate, formatTime, cn } from "@/lib/utils";
import { ModalWrapper } from "@/components/ui/modal-wrapper";
import { Label } from "@/components/ui/label";

const MODAL_LABELS = {
  title: "Detalles del Destino",
  subtitle: "Información detallada sobre este destino de lujo.",
  fields: {
    name: "Nombre del Destino",
    country: "Código de País",
    description: "Descripción",
    type: "Tipo",
    lastModified: "Última Modificación",
  },
};

const STYLES = {
  value: {
    primary: "text-lg font-serif text-brand-dark",
    secondary: "text-gray-600 text-sm",
    pill: "font-mono font-medium text-brand-dark bg-gray-100 px-3 py-1 rounded-full text-sm",
    box: "text-gray-600 leading-relaxed text-sm bg-gray-50 p-4 rounded-xl border border-gray-100",
  },
  layout: {
    flexRow: "flex items-center gap-2",
    flexCol: "flex flex-col gap-1",
    fieldContainer: "space-y-2",
    grid: "grid grid-cols-2 gap-6",
  },
  icon: {
    base: "h-3.5 w-3.5",
    muted: "text-gray-400",
    gold: "text-brand-gold h-4 w-4",
  },
};

interface DestinationDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: Destination | null;
}

export function DestinationDetailsModal({
  isOpen,
  onClose,
  destination,
}: DestinationDetailsModalProps) {
  if (!isOpen || !destination) return null;

  const typeConfig = DESTINATION_TYPE_UI[destination.type];
  const TypeIcon = typeConfig?.icon;

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title={MODAL_LABELS.title}
      subtitle={MODAL_LABELS.subtitle}
    >
      <div className={STYLES.layout.grid}>

        <div className={STYLES.layout.fieldContainer}>
          <Label>{MODAL_LABELS.fields.name}</Label>
          <div className={STYLES.value.primary}>{destination.name}</div>
        </div>

        <div className={STYLES.layout.fieldContainer}>
          <Label>{MODAL_LABELS.fields.country}</Label>
          <div className={STYLES.layout.flexRow}>
            <span className={STYLES.value.pill}>{destination.countryCode}</span>
          </div>
        </div>

        <div className={cn(STYLES.layout.fieldContainer, "col-span-2")}>
          <Label>
            {MODAL_LABELS.fields.description}
          </Label>
          <p className={STYLES.value.box}>{destination.description}</p>
        </div>

        <div className={STYLES.layout.fieldContainer}>
          <Label>{MODAL_LABELS.fields.type}</Label>
          <div className={cn(STYLES.layout.flexRow, "text-brand-dark")}>
            {TypeIcon && <TypeIcon className={STYLES.icon.gold} />}
            <span>{typeConfig?.label || destination.type}</span>
          </div>
        </div>


        <div className={STYLES.layout.fieldContainer}>
          <Label>
            {MODAL_LABELS.fields.lastModified}
          </Label>
          <div className={STYLES.layout.flexCol}>
            <div className={cn(STYLES.layout.flexRow, STYLES.value.secondary)}>
              <Calendar className={STYLES.icon.base} />
              <span>{formatDate(destination.lastModified)}</span>
            </div>
            <div
              className={cn(STYLES.layout.flexRow, STYLES.icon.muted, "text-xs")}
            >
              <Clock className={STYLES.icon.base} />
              <span>{formatTime(destination.lastModified)}</span>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}
