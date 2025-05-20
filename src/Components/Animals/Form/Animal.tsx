import { Field, Form, Formik, FormikProps, useFormikContext } from "formik";
import { DatePicker, DatePickerInput } from "@mantine/dates";
import { TextInput, Select, Modal, Button, NumberInput } from "@mantine/core";
import React, { useEffect, useState } from "react";
import "@mantine/dates/styles.css";
import "@mantine/core/styles.css";
import FormTable from "../Table/formTable";
import { Stepper } from "@mantine/core";
export type cowData = {
  breed: string;
  birthDate: string | null;
  weightValue: Number;
  arrivalDate: string | null;
  quarantineDays: Number;
  finalArrivalDate: string | null;
  location: string;
  landArea: Number;
  shelterValue: Number;
   milkLossRate:Number;
  cowsPerShelter: Number;
  dailyMilkProduction: Number;
  pricePerLiter: Number;
  // grossRevenue: Number;
  shelterConstructionTime: Number;
  shelterConstructionCost: Number;
  fencingInstallationTime: Number;
  fencingInstallationCost: Number;
  waterSystemTime: Number;
  waterSystemCost: Number;
  feedquantityPerKg: Number;
  feedcostPerKg: Number;
  milkinghourPerDay: Number;
  milkingcostPerHour: Number;
  vetVisitsNumber: Number;
  costPerVisit: Number;
  estGrossRevenue: Number,
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
const cowbreed = () =>
  cowBreeds.map((breed) => ({ label: breed, value: breed }));

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
    cowsPerShelter: 0,
    dailyMilkProduction: 0,
    pricePerLiter: 0,
    // grossRevenue: 0,
    shelterConstructionTime: 0,
    shelterConstructionCost: 0,
    fencingInstallationTime: 0,
    fencingInstallationCost: 0,
    waterSystemTime: 0,
    waterSystemCost: 0,
    feedquantityPerKg: 0,
    feedcostPerKg: 0,
    milkinghourPerDay: 0,
    milkingcostPerHour: 0,
    vetVisitsNumber: 0,
    costPerVisit: 0,
    milkLossRate:0,
    estGrossRevenue: 0,
  };

  const [modalOpened, setModalOpened] = React.useState(false);
  const [data, setData] = React.useState<cowData[]>([]);

 

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
               
                 const dailyMilk = Number(values.dailyMilkProduction) || 0;
      const price = Number(values.pricePerLiter) || 0;
      const cows = Number(values.cowsPerShelter) || 0;
      // const days = 30; // Make dynamic if needed
      const lossRate = Number(values.milkLossRate || "0") / 100;

      const grossRevenue = (dailyMilk * price * cows ) * (1 - lossRate);
     const updatedValues = {
    ...values,
    estGrossRevenue: grossRevenue,
  };
                
                setData((prev) => [...prev, updatedValues]);
                actions.resetForm();
                setModalOpened(false);
                console.log({ values, actions });
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }}
            >

    
              {({ setFieldValue, values })=>(
             
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
                      data={cowbreed()}
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
                    <NumberInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Quarantine Days"
                      placeholder="Enter Numbers"
                      onChange={(value) =>
                        setFieldValue("quarantineDays", value ?? 0)
                      }
                      value={
                        typeof values.quarantineDays === "number" &&
                        !isNaN(values.quarantineDays)
                          ? values.quarantineDays
                          : undefined
                      }
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
                    <NumberInput
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
                    <NumberInput
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
                    <NumberInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Milk Lost Rate (%)"
                      placeholder="Enter Percentage"
                      onChange={(value) =>
                        setFieldValue("milkLossRate", value ?? 0)
                      }
                      value={
                        typeof values.milkLossRate === "number" &&
                        !isNaN(values.milkLossRate)
                          ? values.milkLossRate
                          : undefined
                      }
                    />
                    <NumberInput
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

                    <NumberInput
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

                    {/* <NumberInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Gross Revenue"
                      readOnly
                      value={
                        typeof values.estGrossRevenue === "number" &&
                        !isNaN(values.estGrossRevenue)
                          ? values.estGrossRevenue
                          : undefined
                      }
                     
                      min={0}
                    /> */}
                    <NumberInput
                            className="text-left"
                      style={{ width: "300px" }}
                            label="Est. Gross Revenue (Rs)"
                            placeholder="Calculated Revenue"
                            value={grossRevenue}
                            readOnly
                            
                          />
                  </div>
                  <h2 className="text-xl font-bold mt-20">
                    Cost of Dairy Infrastructure Setup
                  </h2>
                  <div className="grid grid-cols-3 mt-5 gap-8 max-w-5xl mx-auto">
                    <p>
                      Shelter Construction
                      <h6>Total Cost</h6>
                    </p>
                    <NumberInput
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
                    <NumberInput
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

                    <h6>
                      
                      Fencing Installation- Total Cost:
                      
                    </h6>

                    <NumberInput
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
                    <NumberInput
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
                    <p>
                      Water System Setup
                      <h6>Total Cost</h6>
                    </p>
                    <NumberInput
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
                    <NumberInput
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

                  <h2 className="text-xl font-bold mt-20">
                    Cost of Cow Maintenance & Milk Production
                  </h2>
                  <div className="grid grid-cols-3 mt-5 gap-8 max-w-5xl mx-auto">
                    <p>
                      Feed Quantity
                      <h6>Total Cost</h6>
                    </p>
                    <NumberInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Quantity"
                      placeholder="kg of Feed Per Day"
                      onChange={(value) =>
                        setFieldValue("feedquantityPerKg", value ?? 0)
                      }
                      value={
                        typeof values.feedquantityPerKg === "number" &&
                        !isNaN(values.feedquantityPerKg)
                          ? values.feedquantityPerKg
                          : undefined
                      }
                    />
                    <NumberInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Cost"
                      placeholder="cost per kg"
                      onChange={(value) =>
                        setFieldValue("feedcostPerKg", value)
                      }
                      value={
                        typeof values.feedcostPerKg === "number" &&
                        !isNaN(values.feedcostPerKg)
                          ? values.feedcostPerKg
                          : undefined
                      }
                    />

                    <p>
                      Milking
                      <h6>Total Cost</h6>
                      {/* <h6>Total Cost ${((parseFloat(values.fencingInstallationTime) || 0) * (parseFloat() || 0)).toFixed(2)}</h6> */}
                    </p>

                    <NumberInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Time"
                      placeholder="Milking Hour Per Day"
                      onChange={(value) =>
                        setFieldValue("milkinghourPerDay", value ?? 0)
                      }
                      value={
                        typeof values.milkinghourPerDay === "number" &&
                        !isNaN(values.milkinghourPerDay)
                          ? values.milkinghourPerDay
                          : undefined
                      }
                    />
                    <NumberInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Cost"
                      placeholder="Milking cost per hour"
                      onChange={(value) =>
                        setFieldValue("milkingcostPerHour", value)
                      }
                      value={
                        typeof values.milkingcostPerHour === "number" &&
                        !isNaN(values.milkingcostPerHour)
                          ? values.milkingcostPerHour
                          : undefined
                      }
                    />
                    <p>
                      Veterinary Visits
                      <h6>Total Cost</h6>
                    </p>
                    <NumberInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Man Day"
                      placeholder="Number of visits"
                      onChange={(value) =>
                        setFieldValue("vetVisitsNumber", value ?? 0)
                      }
                      value={
                        typeof values.vetVisitsNumber === "number" &&
                        !isNaN(values.vetVisitsNumber)
                          ? values.vetVisitsNumber
                          : undefined
                      }
                    />
                    <NumberInput
                      className="text-left"
                      style={{ width: "300px" }}
                      label="Cost"
                      placeholder="Enter cost per unit"
                      onChange={(value) => setFieldValue("costPerVisit", value)}
                      value={
                        typeof values.costPerVisit === "number" &&
                        !isNaN(values.costPerVisit)
                          ? values.costPerVisit
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
        <FormTable data={data} setData={setData} />
      </div>
    </div>
  );
};

export default Animal;
