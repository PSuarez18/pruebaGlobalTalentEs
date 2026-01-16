import type { DestinationFormState, DestinationType as DestinationTypeValue } from "../types";
import { DestinationType } from "../types";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DESTINATION_TYPE_UI } from "../destinationTypeUi";
import { ModalWrapper } from "@/components/ui/modal-wrapper";

interface DestinationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  form: DestinationFormState;
  setForm: (form: DestinationFormState) => void;
  saving: boolean;
  validationErrors?: Record<string, string> | null;
}

const DESTINATION_TYPES: DestinationTypeValue[] = Object.values(DestinationType);

const MODAL_LABELS = {
  createTitle: "Crear Nuevo Destino",
  editTitle: "Editar Destino",
  createSubtitle: "Agrega un nuevo destino",
  editSubtitle: "Actualiza los detalles del destino",
  name: "Nombre del Destino",
  country: "Código de País",
  description: "Descripción",
  type: "Tipo de Destino",
  placeholders: {
    name: "ej., Santorini",
    country: "EJ., GR",
    description: "Describe este destino en detalle...",
  },
  cancel: "Cancelar",
  save: "Crear Destino",
  update: "Actualizar Destino",
  saving: "Guardando...",
};

const STYLES = {
  fieldContainer: "space-y-2",
  input: "w-full",
};

export function DestinationModal({
  isOpen,
  onClose,
  onSubmit,
  form,
  setForm,
  saving,
  validationErrors,
}: DestinationModalProps) {
  if (!isOpen) return null;

  const isEditing = form.id !== null;
  const title = isEditing ? MODAL_LABELS.editTitle : MODAL_LABELS.createTitle;
  const subtitle = isEditing ? MODAL_LABELS.editSubtitle : MODAL_LABELS.createSubtitle;

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      subtitle={subtitle}
    >
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className={STYLES.fieldContainer}>
            <Label>{MODAL_LABELS.name}</Label>
            <Input
              className={STYLES.input}
              placeholder={MODAL_LABELS.placeholders.name}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {validationErrors?.name && (
              <p className="text-red-500 text-xs mt-1">{validationErrors.name}</p>
            )}
          </div>
          <div className={STYLES.fieldContainer}>
            <Label>{MODAL_LABELS.country}</Label>
            <Input
              maxLength={2}
              className={STYLES.input}
              placeholder={MODAL_LABELS.placeholders.country}
              value={form.countryCode}
              onChange={(e) => setForm({ ...form, countryCode: e.target.value.toUpperCase() })}
            />
            {validationErrors?.countryCode && (
              <p className="text-red-500 text-xs mt-1">
                {validationErrors.countryCode}
              </p>
            )}
          </div>
        </div>

        <div className={STYLES.fieldContainer}>
          <Label>{MODAL_LABELS.description}</Label>
          <Textarea
            rows={4}
            className={STYLES.input + " resize-none"}
            placeholder={MODAL_LABELS.placeholders.description}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          {validationErrors?.description && (
            <p className="text-red-500 text-xs mt-1">
              {validationErrors.description}
            </p>
          )}
        </div>

        <div className={STYLES.fieldContainer}>
          <Label>{MODAL_LABELS.type}</Label>
          <Select
            value={form.type}
            onValueChange={(value) =>
              setForm({ ...form, type: value as DestinationType })
            }
          >
            <SelectTrigger className={STYLES.input + " h-auto"}>
              <SelectValue placeholder={MODAL_LABELS.type} />
            </SelectTrigger>
            <SelectContent>
              {DESTINATION_TYPES.map((type) => {
                const config = DESTINATION_TYPE_UI[type];
                return (
                  <SelectItem key={type} value={type}>
                    {config
                      ? config.label
                      : type.charAt(0) + type.slice(1).toLowerCase()}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          {validationErrors?.type && (
            <p className="text-red-500 text-xs mt-1">{validationErrors.type}</p>
          )}
        </div>

        <div className="flex justify-between pt-4 gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            {MODAL_LABELS.cancel}
          </Button>
          <Button
            type="submit"
            disabled={saving}
            className="flex-1 "
          >
            {saving ? MODAL_LABELS.saving : (isEditing ? MODAL_LABELS.update : MODAL_LABELS.save)}
          </Button>
        </div>
      </form>
    </ModalWrapper>
  );
}
