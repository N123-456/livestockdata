import { Field, Form, Formik } from "formik";
import { DatePicker, DatePickerInput } from "@mantine/dates";
import { TextInput, Select, Modal, Button, NumberInput } from "@mantine/core";
import React, { useState } from "react";
import "@mantine/dates/styles.css";
import "@mantine/core/styles.css";
import { Stepper } from "@mantine/core";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
type cowData = {
  breed: string;
  birthDate: string | null;
  weightValue: Number;
  arrivalDate: string | null;
  quarantineDays: Number;
  finalArrivalDate: string | null;
  location: string;
  landArea: Number;
  shelterValue: Number;
  mortalityRateValue: Number;
  cowsPerShelter: Number;
  dailyMilkProduction: Number;
  pricePerLiter: Number;
  grossRevenue: Number;
  shelterConstructionTime:Number;
  shelterConstructionCost:Number;
  fencingInstallationTime:Number;
  fencingInstallationCost:Number;
  waterSystemTime:Number;
  waterSystemCost:Number;
  
};

const cowBreeds = [
  "Sahiwal",
  "Red Sindhi",
  "Cholistani",
  "Achai",
  "Gabrali",
  "Bhagnari",
  "Dajal",
  "Dhanni",
  "Kankrej",
  "Lohani",
  "Rojhan",
  "Tharparkar",
  "Desi (Non-descript)",
  "Hariana",
  "Hissar",
];
const cowdata = () =>
  cowBreeds.map((breed) => ({ label: breed, value: breed }));
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
  columnHelper.accessor("grossRevenue", {
    cell: (info) => `Rs ${info.getValue()}`,
    header: () => <span>Gross Revenue</span>,
    footer: (info) => info.column.id,
  }),
];
const Animal: React.FC<{}> = () => {
  const initialValues: cowData = {
    breed: "",
    birthDate: null,
    weightValue: 0,
    arrivalDate: null,
    quarantineDays: 0,
    finalArrivalDate: null,
    location: "",
    landArea: 0,
    shelterValue: 0,
    mortalityRateValue: 0,
    cowsPerShelter: 0,
    dailyMilkProduction: 0,
    pricePerLiter: 0,
    grossRevenue: 0,
    shelterConstructionTime:0,
  shelterConstructionCost:0,
  fencingInstallationTime:0,
  fencingInstallationCost:0,
  waterSystemTime:0,
  waterSystemCost:0,
  };
  const [data, setData] = React.useState<cowData[]>([]);
  const [modalOpened, setModalOpened] = React.useState(false);
  // const [arrivalDate, setarrivalDate] = useState<string | null>(null);
  // const [dateafterQuarantine, setdateafterQuarantine] = useState<string | null>(null);

  // const [birthDate, setbirthDate] = useState<string | null>(null);
  // const [quarantinedays, setquarantinedays] = useState("");
  // const [landArea, setlandArea] = useState("");
  // const [shelterValue, setshelterValue] = useState("");
  // const [cowsperShelter, setcowsperShelter] = useState("");
  // const [active, setActive] = useState(1);
  // const [mortalityRateValue, setMortalityRateValue] = useState("");
  // const [dailyMilkProduction, setDailyMilkProduction] = useState("");
  // const [pricePerLiter, setPricePerLiter] = useState("");
  //  const [weightValue,setweightValue] = useState("");
  //  const [location,setlocation] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <div className=" max-w-5xl mx-auto">
        <Button
          color="green"
          onClick={() => setModalOpened(true)}
          className="mt-20 mr-30"
        >
          Add Animal
        </Button>
        <Modal
          opened={modalOpened}
          onClose={() => setModalOpened(false)}
        
          fullScreen
        >
          <div className="bg-[var(--mantine-color-body)] [-webkit-tap-highlight-color:transparent] min-h-[60%] max-w-5xl mx-auto">
            <Formik
              initialValues={initialValues}
              onSubmit={(values, actions) => {
                setData((prev) => [...prev, values]);
                actions.resetForm();
                setModalOpened(false);
                console.log({ values, actions });
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }}
            >
              {({ setFieldValue, values }) => (
                <Form>
                  <h2 className="text-xl font-bold mb-3">
                    Cow Breed and Arrival Details
                  </h2>
                  <div className="grid grid-cols-3 mt-5 gap-4 max-w-5xl mx-auto">
                    <Select
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Select Breed"
                      placeholder="Select Breed"
                      allowDeselect={false}
                      data={cowdata()}
                      searchable
                      onChange={(value) => setFieldValue("breed", value)}
                      value={values.breed}
                    />
                    <DatePickerInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Date of Birth"
                      placeholder="Pick date"
                      value={values.birthDate}
                      onChange={(value) => setFieldValue("birthDate", value)}
                    />

                    <NumberInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Cow Weight"
                      placeholder="Enter Weight in Kg"
                      value={Number(values.weightValue)}
                      onChange={(val) => setFieldValue("weightValue", val)}
                      suffix="kg"
                      min={1}
                      clampBehavior="strict"
                    />

                    <DatePickerInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Arrival Date"
                      placeholder="Pick date"
                      value={values.arrivalDate}
                      onChange={(value) => setFieldValue("arrivalDate", value)}
                    />
                    <TextInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Quarantine Days"
                      placeholder="Enter Days"
                    />
                    <DatePickerInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Arival Date(After Quarantine)"
                      placeholder="Pick date"
                      value={values.finalArrivalDate}
                      onChange={(value) =>
                        setFieldValue("finalArrivalDate", value)
                      }
                    />
                  </div>
                  <h2 className="text-xl font-bold mt-20">Location and Land</h2>
                  <div className="grid grid-cols-3 mt-5 gap-8 max-w-5xl mx-auto">
                    <Select
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Location"
                      placeholder="Select Location"
                      allowDeselect={false}
                      data={["A", "B", "C", "D"]}
                      searchable
                      onChange={(value) => setFieldValue("location", value)}
                      value={values.location}
                    />
                    <TextInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Land Area"
                      placeholder="Enter size of Area"
                      onChange={(value) =>
                        setFieldValue("landArea", value ?? 0)
                      }
                      value={
                        typeof values.landArea === "number" &&
                        !isNaN(values.landArea)
                          ? values.landArea
                          : undefined
                      }
                    />
                    <TextInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="No of Shelters"
                      placeholder="Enter Numbers"
                      onChange={(value) =>
                        setFieldValue("shelterValue", value ?? 0)
                      }
                      value={
                        typeof values.shelterValue === "number" &&
                        !isNaN(values.shelterValue)
                          ? values.shelterValue
                          : undefined
                      }
                    />
                  </div>
                  <h2 className="text-xl font-bold mt-20">
                    Cow Production and Revenue Details
                  </h2>
                  <div className="grid grid-cols-3 mt-5 gap-8 max-w-5xl mx-auto">
                    <TextInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Est. Mortality Rate (%)"
                      placeholder="Enter Percentage"
                      onChange={(value) =>
                        setFieldValue("mortalityRateValue", value ?? 0)
                      }
                      value={
                        typeof values.mortalityRateValue === "number" &&
                        !isNaN(values.mortalityRateValue)
                          ? values.mortalityRateValue
                          : undefined
                      }
                    />
                    <TextInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Total cows under per shelter"
                      placeholder="Enter Numbers"
                      onChange={(value) =>
                        setFieldValue("cowsPerShelter", value)
                      }
                      value={
                        typeof values.cowsPerShelter === "number" &&
                        !isNaN(values.cowsPerShelter)
                          ? values.cowsPerShelter
                          : undefined
                      }
                    />
                    <TextInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Daily Milk Production Per Cow (Liters)"
                      placeholder="Enter liters"
                      onChange={(value) =>
                        setFieldValue("dailyMilkProduction", value)
                      }
                      value={
                        typeof values.dailyMilkProduction === "number" &&
                        !isNaN(values.dailyMilkProduction)
                          ? values.dailyMilkProduction
                          : undefined
                      }
                    />
                    <NumberInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Price Per Liter"
                      placeholder="Enter Price in Liter"
                      prefix="Rs. "
                      min={0}
                      onChange={(value) =>
                        setFieldValue("pricePerLiter", value)
                      }
                      value={
                        typeof values.pricePerLiter === "number" &&
                        !isNaN(values.pricePerLiter)
                          ? values.pricePerLiter
                          : undefined
                      }
                    />

                    <NumberInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Gross Revenue"
                      value={
                        typeof values.grossRevenue === "number" &&
                        !isNaN(values.grossRevenue)
                          ? values.grossRevenue
                          : undefined
                      }
                      onChange={(val) => setFieldValue("grossRevenue", val)}
                      min={0}
                    />
                  </div>
                  <h2 className="text-xl font-bold mt-20">
                    Cost of Dairy Infrastructure Setup
                  </h2>
                  <div className="grid grid-cols-3 mt-5 gap-8 max-w-5xl mx-auto">
                    <p>Shelter Construction
                    <h6>Total Cost</h6></p>
                    <TextInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Time"
                      placeholder="Enter Per hour time"
                      onChange={(value) =>
                        setFieldValue("shelterConstructionTime", value ?? 0)
                      }
                      value={
                        typeof values.shelterConstructionTime === "number" &&
                        !isNaN(values.shelterConstructionTime)
                          ? values.shelterConstructionTime
                          : undefined
                      }
                    />
                    <TextInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Cost"
                      placeholder="Enter per hour cost"
                      onChange={(value) =>
                        setFieldValue("shelterConstructionCost", value)
                      }
                      value={
                        typeof values.shelterConstructionCost === "number" &&
                        !isNaN(values.shelterConstructionCost)
                          ? values.shelterConstructionCost
                          : undefined
                      }
                    />
                            
                    <p>Fencing Installation
                    <h6>Total Cost</h6></p>
                    <TextInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Time"
                      placeholder="Enter Per hour time"
                      onChange={(value) =>
                        setFieldValue("fencingInstallationTime", value ?? 0)
                      }
                      value={
                        typeof values.fencingInstallationTime === "number" &&
                        !isNaN(values.fencingInstallationTime)
                          ? values.fencingInstallationTime
                          : undefined
                      }
                    />
                    <TextInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Cost"
                      placeholder="Enter per hour cost"
                      onChange={(value) =>
                        setFieldValue("fencingInstallationCost", value)
                      }
                      value={
                        typeof values.fencingInstallationCost === "number" &&
                        !isNaN(values.fencingInstallationCost)
                          ? values.fencingInstallationCost
                          : undefined
                      }
                    />
                    <p>Water System Setup
                    <h6>Total Cost</h6></p>
                    <TextInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Time"
                      placeholder="Enter Per hour time"
                      onChange={(value) =>
                        setFieldValue("waterSystemTime", value ?? 0)
                      }
                      value={
                        typeof values.waterSystemTime === "number" &&
                        !isNaN(values.waterSystemTime)
                          ? values.waterSystemTime
                          : undefined
                      }
                    />
                    <TextInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Cost"
                      placeholder="Enter per hour cost"
                      onChange={(value) =>
                        setFieldValue("waterSystemCost", value)
                      }
                      value={
                        typeof values.waterSystemCost === "number" &&
                        !isNaN(values.waterSystemCost)
                          ? values.waterSystemCost
                          : undefined
                      }
                    />
                  </div>
                  <Button
                    type="submit"
                    mt="30"
                    color="green"
                    radius="lg"
                    ml="2"
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </Modal>
      </div>
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

export default Animal;

