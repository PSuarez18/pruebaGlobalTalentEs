import { useMemo } from "react";

interface UsePaginationOptions {
  page: number;
  totalItems: number;
  pageSize?: number;
  maxButtons?: number;
}

export function usePagination({
  page,
  totalItems,
  pageSize = 20,
  maxButtons = 5,
}: UsePaginationOptions) {
  return useMemo(() => {
    const hasResults = totalItems > 0;
    const totalPages = hasResults ? Math.ceil(totalItems / pageSize) : 1;
    const currentPage = Math.min(page, totalPages);

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (endPage - startPage + 1 < maxButtons) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + maxButtons - 1);
      } else if (endPage === totalPages) {
        startPage = Math.max(1, endPage - maxButtons + 1);
      }
    }

    const pageNumbers: number[] = [];
    if (hasResults) {
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    const startItem = hasResults ? (currentPage - 1) * pageSize + 1 : 0;
    const endItem = hasResults
      ? Math.min(currentPage * pageSize, totalItems)
      : 0;

    const canGoPrev = hasResults && currentPage > 1;
    const canGoNext = hasResults && currentPage < totalPages;

    return {
      hasResults,
      totalPages,
      currentPage,
      pageNumbers,
      startItem,
      endItem,
      canGoPrev,
      canGoNext,
    };
  }, [page, totalItems, pageSize, maxButtons]);
}

