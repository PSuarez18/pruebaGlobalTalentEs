import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDestinations } from "@/features/destinations/useDestinations";
import { usePagination } from "@/features/destinations/usePagination";
import { Sidebar } from "@/features/destinations/components/Sidebar";
import { Header } from "@/features/destinations/components/Header";
import { StatsCards } from "@/features/destinations/components/StatsCards";
import { DestinationTable } from "@/features/destinations/components/DestinationTable";
import { DestinationModal } from "@/features/destinations/components/DestinationModal";
import { DestinationDetailsModal } from "@/features/destinations/components/DestinationDetailsModal";
import type { Destination } from "@/features/destinations/types";
import { Button } from "@/components/ui/button";
import { Toast } from "@/components/ui/toast";

export function Destinations() {
  const {
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
    saving,
    loading,
    validationErrors,
    startCreate,
    startEdit,
    handleSubmit,
    handleDelete,
    lastActionStatus,
    lastActionMessage,
  } = useDestinations();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewDestination, setViewDestination] = useState<Destination | null>(null);
  const [showToast, setShowToast] = useState(false);

  const {
    hasResults,
    currentPage,
    pageNumbers,
    startItem,
    endItem,
    canGoPrev,
    canGoNext,
  } = usePagination({
    page,
    totalItems: total,
    pageSize: 20,
    maxButtons: 5,
  });

  useEffect(() => {
    if (!lastActionStatus || !lastActionMessage) return;

    const showId = setTimeout(() => {
      setShowToast(true);
    }, 0);

    const hideId = setTimeout(() => {
      setShowToast(false);
    }, 2500);

    return () => {
      clearTimeout(showId);
      clearTimeout(hideId);
    };
  }, [lastActionStatus, lastActionMessage]);

  const handleOpenCreate = () => {
    startCreate();
    setIsModalOpen(true);
  };

  const handleOpenEdit = (destination: Destination) => {
    startEdit(destination);
    setIsModalOpen(true);
  };

  const handleOpenView = (destination: Destination) => {
    setViewDestination(destination);
  };

  const handleCloseView = () => {
    setViewDestination(null);
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    const success = await handleSubmit(e);
    if (success) {
      setIsModalOpen(false);
    }
  };

  const uniqueCountries = new Set(items.map((i) => i.countryCode)).size;

  return (
    <div className="flex min-h-screen bg-brand-cream font-sans text-brand-dark">
      <Sidebar
        search={search}
        setSearch={setSearch}
        filterType={filterType}
        setFilterType={setFilterType}
        countryFilter={countryFilter}
        setCountryFilter={setCountryFilter}
        mode={mode}
        setMode={setMode}
      />

      <main className="flex-1 p-12 overflow-x-scroll">
        <Header onAdd={handleOpenCreate} />

        <StatsCards total={total} showing={items.length} countries={uniqueCountries} />

        {showToast && lastActionStatus && lastActionMessage && (
          <Toast
            status={lastActionStatus}
            title={
              lastActionStatus === "success"
                ? "Operación exitosa"
                : "Error en la operación"
            }
            message={lastActionMessage}
          />
        )}

        <DestinationTable
          items={items}
          onView={handleOpenView}
          onEdit={handleOpenEdit}
          onDelete={handleDelete}
          loading={loading}
        />

        <div className="flex justify-between items-center gap-4 mt-8">
          <div className="text-sm text-gray-600 font-medium">
            {hasResults
              ? `Mostrando ${startItem}-${endItem} de ${total} destinos`
              : "No se encontraron destinos"}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setPage(currentPage - 1)}
              disabled={!hasResults || !canGoPrev || loading}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {hasResults &&
              pageNumbers.map((pageNumber) => (
                <Button
                  key={pageNumber}
                  variant={pageNumber === currentPage ? "default" : "outline"}
                  size="sm"
                  onClick={() => setPage(pageNumber)}
                  disabled={loading || pageNumber === currentPage}
                >
                  {pageNumber}
                </Button>
              ))}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setPage(currentPage + 1)}
              disabled={!hasResults || !canGoNext || loading}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>

      <DestinationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={onFormSubmit}
        form={form}
        setForm={setForm}
        saving={saving}
        validationErrors={validationErrors}
      />

      <DestinationDetailsModal
        isOpen={!!viewDestination}
        onClose={handleCloseView}
        destination={viewDestination}
      />
    </div>
  );
}
