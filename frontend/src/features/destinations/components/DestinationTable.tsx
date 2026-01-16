import { Edit2, Trash2, Eye } from "lucide-react";
import type { ReactNode } from "react";
import type { Destination } from "../types";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn, formatDate, formatTime } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DESTINATION_TYPE_UI } from "../destinationTypeUi";

const TABLE_HEADERS = {
  id: "ID",
  name: "Destino",
  description: "Descripción",
  country: "País",
  type: "Tipo",
  lastModified: "Última Modificación",
  actions: "Acciones",
};

const TABLE_CLASSES = {
  header: "py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider",
  cell: "py-4 px-6",
  row: "group hover:bg-brand-cream/30 transition-colors border-0",
  empty: "py-12 text-center text-gray-400 h-24",
};

const EMPTY_STATE_MESSAGE = "No se encontraron destinos que coincidan con tu búsqueda.";

interface TableColumn {
  key: string;
  header: string;
  className?: string;
  cellClassName?: string;
  render: (item: Destination) => ReactNode;
}

interface DestinationTableProps {
  items: Destination[];
  onView: (item: Destination) => void;
  onEdit: (item: Destination) => void;
  onDelete: (id: number) => void;
  loading?: boolean;
}

export function DestinationTable({
  items,
  onView,
  onEdit,
  onDelete,
  loading,
}: DestinationTableProps) {
  const columns: TableColumn[] = [
    {
      key: "id",
      header: TABLE_HEADERS.id,
      className: "w-16 text-right",
      cellClassName: "text-right",
      render: (item: Destination) => (
        <span className="font-mono text-xs text-gray-400">{item.id}</span>
      ),
    },
    {
      key: "destination",
      header: TABLE_HEADERS.name,
      render: (item: Destination) => (
        <span className="font-serif text-lg text-brand-dark">{item.name}</span>
      ),
    },
    {
      key: "description",
      header: TABLE_HEADERS.description,
      className: "w-1/3",
      render: (item: Destination) => (
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>
      ),
    },
    {
      key: "country",
      header: TABLE_HEADERS.country,
      render: (item: Destination) => (
        <span className="font-mono font-medium text-brand-dark">
          {item.countryCode}
        </span>
      ),
    },
    {
      key: "type",
      header: TABLE_HEADERS.type,
      render: (item: Destination) => {
        const config = DESTINATION_TYPE_UI[item.type];
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
            {config ? config.label : item.type}
          </span>
        );
      },
    },
    {
      key: "lastModified",
      header: TABLE_HEADERS.lastModified,
      render: (item: Destination) => (
        <div className="flex flex-col">
          <span className="text-sm text-gray-600">
            {formatDate(item.lastModified)}
          </span>
          <span className="text-xs text-gray-400">
            {formatTime(item.lastModified)}
          </span>
        </div>
      ),
    },
    {
      key: "actions",
      header: TABLE_HEADERS.actions,
      className: "text-center",
      cellClassName: "text-center",
      render: (item: Destination) => (
        <div className="flex justify-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onView(item)}
            className="text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-full"
          >
            <Eye className="size-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit(item)}
            className="text-gray-600 hover:text-brand-gold hover:bg-brand-gold/10 rounded-full"
          >
            <Edit2 className="size-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(item.id)}
            className="text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-full"
          >
            <Trash2 className="size-3.5" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full max-w-full bg-white rounded-3xl border border-gray-100 shadow-sm">
      <Table >
        <TableHeader>
          <TableRow className="border-b border-gray-100 hover:bg-transparent">
            {columns.map((col) => (
              <TableHead
                key={col.key}
                className={cn(TABLE_CLASSES.header, col.className)}
              >
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="divide-y divide-gray-50">
          {loading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={`skeleton-${index}`} className={TABLE_CLASSES.row}>
                {columns.map((col, colIndex) => (
                  <TableCell
                    key={`skeleton-cell-${index}-${colIndex}`}
                    className={cn(TABLE_CLASSES.cell, col.cellClassName)}
                  >
                    <Skeleton className="h-6 w-full" />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : items.length > 0 ? (
            items.map((item) => (
              <TableRow key={item.id} className={TABLE_CLASSES.row}>
                {columns.map((col) => (
                  <TableCell
                    key={`${item.id}-${col.key}`}
                    className={cn(TABLE_CLASSES.cell, col.cellClassName)}
                  >
                    {col.render(item)}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className={TABLE_CLASSES.empty}>
                {EMPTY_STATE_MESSAGE}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
