import { useCallback, useEffect, useState } from "react";
import type {
  Destination,
  DestinationFilterType,
  DestinationFormState,
  DestinationListMode as DestinationListModeType,
} from "./types";
import { DestinationListMode, DestinationType } from "./types";
import {
  deleteDestination as deleteDestinationApi,
  fetchDestinations as fetchDestinationsApi,
  saveDestination,
} from "./api";

import { destinationFormSchema } from "./schemas/destinationSchema";

const emptyForm: DestinationFormState = {
  id: null,
  name: "",
  description: "",
  countryCode: "",
  type: DestinationType.City,
};

export function useDestinations() {
  const [items, setItems] = useState<Destination[]>([]);
  const [form, setForm] = useState<DestinationFormState>(emptyForm);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState<DestinationFilterType>("ALL");
  const [countryFilter, setCountryFilter] = useState("");
  const [mode, setMode] = useState<DestinationListModeType>(
    DestinationListMode.Recent
  );
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<
    string,
    string
  > | null>(null);
  const [lastActionStatus, setLastActionStatus] = useState<
    "success" | "error" | null
  >(null);
  const [lastActionMessage, setLastActionMessage] = useState<string | null>(
    null
  );

  const fetchDestinations = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, meta } = await fetchDestinationsApi({
        search,
        type: filterType,
        countryCode: countryFilter || undefined,
        mode,
        page,
        limit: 20,
      });

      setItems(data);
      if (meta?.total !== undefined) {
        setTotal(meta.total);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  }, [countryFilter, filterType, mode, page, search]);

  useEffect(() => {
    fetchDestinations();
  }, [fetchDestinations]);

  useEffect(() => {
    if (validationErrors === null) return;

    const result = destinationFormSchema.safeParse({
      name: form.name,
      description: form.description,
      countryCode: form.countryCode,
      type: form.type,
    });

    if (result.success) {
      setValidationErrors(null);
    } else {
      const errors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path.length > 0) {
          errors[String(issue.path[0])] = issue.message;
        }
      });

      if (JSON.stringify(errors) !== JSON.stringify(validationErrors)) {
        setValidationErrors(errors);
      }
    }
  }, [form, validationErrors]);

  function startCreate() {
    setForm(emptyForm);
    setValidationErrors(null);
  }

  function startEdit(dest: Destination) {
    setForm({
      id: dest.id,
      name: dest.name,
      description: dest.description,
      countryCode: dest.countryCode,
      type: dest.type,
    });
    setValidationErrors(null);
  }

  async function handleSubmit(event: React.FormEvent): Promise<boolean> {
    event.preventDefault();
    setValidationErrors(null);

    const result = destinationFormSchema.safeParse({
      name: form.name,
      description: form.description,
      countryCode: form.countryCode,
      type: form.type,
    });

    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path.length > 0) {
          errors[String(issue.path[0])] = issue.message;
        }
      });
      setValidationErrors(errors);
      return false;
    }

    setSaving(true);
    setError(null);

    const validatedData = result.data;

    const payload = {
      id: form.id ?? Date.now(),
      name: validatedData.name,
      description: validatedData.description,
      countryCode: validatedData.countryCode,
      type: validatedData.type,
    };

    try {
      const isEditing = form.id != null;
      await saveDestination(payload, isEditing);
      await fetchDestinations();
      setForm(emptyForm);
       setLastActionStatus("success");
       setLastActionMessage(
        isEditing
          ? "Destino actualizado correctamente"
          : "Destino creado correctamente"
      );
      return true;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error desconocido");
      setLastActionStatus("error");
      setLastActionMessage(
        e instanceof Error
          ? e.message
          : "Ocurrió un error al guardar el destino"
      );
      return false;
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: number) {
    setSaving(true);
    setError(null);
    try {
      await deleteDestinationApi(id);
      await fetchDestinations();
      setLastActionStatus("success");
      setLastActionMessage("Destino eliminado correctamente");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error desconocido");
      setLastActionStatus("error");
      setLastActionMessage(
        e instanceof Error
          ? e.message
          : "Ocurrió un error al eliminar el destino"
      );
    } finally {
      setSaving(false);
    }
  }

  return {
    items,
    form,
    setForm,
    search,
    setSearch,
    filterType,
    setFilterType,
    countryFilter,
    setCountryFilter,
    mode,
    setMode,
    page,
    setPage,
    total,
    loading,
    saving,
    error,
    validationErrors,
    lastActionStatus,
    lastActionMessage,
    startCreate,
    startEdit,
    handleSubmit,
    handleDelete,
    reload: fetchDestinations,
  };
}
