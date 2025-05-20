import React from "react";
import Animal from "../Form/Animal";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { cowData } from "../Form/Animal";

type FormTableProps = {
  data: cowData[];
  setData: React.Dispatch<React.SetStateAction<cowData[]>>;
};
const columnHelper = createColumnHelper<cowData>();

const columns = [
  columnHelper.accessor("breed", {
    cell: (info) => info.getValue(),
    header: () => <span>Breed</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("birthDate", {
    cell: (info) => info.getValue() || "N/A",
    header: () => <span>Date of Birth</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("weightValue", {
    cell: (info) => info.getValue(),
    header: () => <span>Weight</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("arrivalDate", {
    cell: (info) => info.getValue() || "N/A",
    header: () => <span>Arrival Date</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("quarantineDays", {
    cell: (info) => info.getValue(),
    header: () => <span>Quarantine Days</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("finalArrivalDate", {
    cell: (info) => info.getValue() || "N/A",
    header: () => <span>Arrival Date (Post-Quarantine)</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("location", {
    cell: (info) => info.getValue(),
    header: () => <span>Location</span>,
    footer: (info) => info.column.id,
  }),
  // columnHelper.accessor("landArea", {
  //   cell: (info) => info.getValue(),
  //   header: () => <span>Land Area</span>,
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor("shelterValue", {
  //   cell: (info) => info.getValue(),
  //   header: () => <span>No. of Shelters</span>,
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor("mortalityRateValue", {
  //   cell: (info) => `${info.getValue()}%`,
  //   header: () => <span>Mortality Rate (%)</span>,
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor("cowsPerShelter", {
  //   cell: (info) => info.getValue(),
  //   header: () => <span>Cows per Shelter</span>,
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor("dailyMilkProduction", {
  //   cell: (info) => `${info.getValue()} liters`,
  //   header: () => <span>Daily Milk Production (Liters)</span>,
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor("pricePerLiter", {
  //   cell: (info) => `Rs ${info.getValue()}`,
  //   header: () => <span>Price per Liter</span>,
  //   footer: (info) => info.column.id,
  // }),
  columnHelper.accessor("estGrossRevenue", {
    cell: (info) => `Rs ${info.getValue()}`,
    header: () => <span>Gross Revenue</span>,
    footer: (info) => info.column.id,
  }),
];

const FormTable: React.FC<FormTableProps> = ({ data, setData }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      {data.length > 0 && (
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Animal Data</h2>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="border border-gray-300 p-2 text-left bg-gray-100"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="border border-gray-300 p-2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              {table.getFooterGroups().map((footerGroup) => (
                <tr key={footerGroup.id}>
                  {footerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
};

export default FormTable;
