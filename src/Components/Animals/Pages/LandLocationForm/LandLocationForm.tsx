import { Group, NumberInput, Radio, Select, TextInput } from "@mantine/core";
import { Form, Formik } from "formik";
import { Country, State, City } from "country-state-city";
import React, { useEffect, useState } from "react";
export type landData = {
  legalStatus: string | null | undefined;
  cost: number;
  landSize: string | number | undefined;
  landtype: string;
  landownership: string;
  landclassification: string;
  country: string;
  state: string;
  city: string;
};
type LandUnit = "kanal" | "marla" | "acre";
const LandLocationForm: React.FC<{}> = () => {
  const [unit, setUnit] = useState<string>("kanal");
  const [lastUnit, setLastUnit] = useState<LandUnit>("kanal");
  const [countries, setCountries] = useState<
    { value: string; label: string }[]
  >([]);
  const [states, setStates] = useState<{ value: string; label: string }[]>([]);
  const [cities, setCities] = useState<{ value: string; label: string }[]>([]);
  useEffect(() => {
    const countryList = Country.getAllCountries();
    setCountries(
      countryList.map((c) => ({
        value: c.isoCode,
        label: c.name,
      })),
    );
  }, []);

  const handleCountryChange = (
    countryCode: string,
    setFieldValue: (field: string, value: any) => void,
  ) => {
    const stateList = State.getStatesOfCountry(countryCode);
    setStates(
      stateList.map((s) => ({
        value: s.isoCode,
        label: s.name,
      })),
    );
    setCities([]);
    setFieldValue("state", "");
    setFieldValue("city", "");
  };

  const handleStateChange = (
    countryCode: string,
    stateCode: string,
    setFieldValue: (field: string, value: any) => void,
  ) => {
    const cityList = City.getCitiesOfState(countryCode, stateCode);
    setCities(
      cityList.map((c) => ({
        value: c.name,
        label: c.name,
      })),
    );
    setFieldValue("city", "");
  };

  const convertValue = (
    value: string,
    from: LandUnit,
    to: LandUnit,
  ): string => {
    const conversionRates: Record<LandUnit, Record<LandUnit, number>> = {
      kanal: { kanal: 1, marla: 20, acre: 0.125 },
      marla: { kanal: 1 / 20, marla: 1, acre: 0.00625 },
      acre: { kanal: 8, marla: 160, acre: 1 },
    };
    return (parseFloat(value) * conversionRates[from][to]).toFixed(4);
  };
  const initialValues: landData = {
    landtype: "",
    landownership: "",
    landclassification: "",
    landSize: 0,
    cost: 0,
    legalStatus: "",
    country: "",
    state: "",
    city: "",
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ setFieldValue, values }) => {
          const handleUnitChange = (newUnit: string) => {
            const unitValue = newUnit as LandUnit;
            if (values.landSize) {
              const converted = convertValue(
                values.landSize.toString(),
                lastUnit,
                unitValue,
              );
              setFieldValue("landSize", parseFloat(converted));
            }
            setLastUnit(unitValue);
            setUnit(unitValue);
          };
          return (
            <Form>
              <Radio.Group
              className="font-bold"
                label="Select Unit"
                value={unit}
                onChange={handleUnitChange}
                mt="md"
              >
                <Group mt="xs">
                  <Radio value="kanal" label="Kanal" />
                  <Radio value="marla" label="Marla" />
                  <Radio value="acre" label="Acre" />
                </Group>
              </Radio.Group>

              <div className="grid grid-cols-3 mt-5 gap-4">
                <Select
                  className="w-[300px] mt-8"
                  label="Land Classification"
                  placeholder="Pick value"
                  data={["Land", "Sub Land"]}
                  value={values.landclassification}
                  onChange={(value) =>
                    setFieldValue("landclassification", value)
                  }
                  searchable
                />
                <Select
                  className="w-[300px] mt-8"
                  label="Land Type"
                  placeholder="Pick value"
                  data={["Rain-Fed", "Pasture", "Barren", "Mixed"]}
                  value={values.landtype}
                  onChange={(value) => setFieldValue("landtype", value)}
                  searchable
                />

                <Select
                  className="w-[300px] mt-8"
                  label="Land Ownership"
                  placeholder="Pick value"
                  data={["Rented Land", "Purchased Land", "Inherited Land"]}
                  value={values.landownership}
                  onChange={(value) => setFieldValue("landownership", value)}
                  searchable
                />
                <NumberInput
                  className="w-[300px] mt-8"
                  label={`Land Size (${unit})`}
                  placeholder="Input placeholder"
                  value={values.landSize}
                  onChange={(value) => setFieldValue("landSize", value)}
                />
                <TextInput
                  className="w-[300px] mt-8"
                  label="Cost (PKR)"
                  value={values.cost}
                  onChange={(value) => setFieldValue("cost", value)}
                />

                {values.landownership === "Inherited Land" && (
                  <Select
                    className="w-[300px] mt-8"
                    label="Legal Status"
                    data={["Verified", "Pending"]}
                    value={values.legalStatus}
                    onChange={(value) => setFieldValue("legalStatus", value)}
                    placeholder="Select Status"
                  />
                )}
                </div>
                <h1 className="mt-12 font-bold">Address</h1>
<div className="grid grid-cols-3 gap-4">
                <Select
                  className="w-[300px] mt-4"
                  label="Country"
                  placeholder="Select country"
                  data={countries}
                  value={values.country}
                  onChange={(value) => {
                    setFieldValue("country", value);
                    handleCountryChange(value || "", setFieldValue);
                  }}
                   searchable
                  required
                />

                <Select
                  className="w-[300px] mt-4"
                  label="State"
                  placeholder={
                    values.country ? "Select state" : "Select country first"
                  }
                  data={states}
                  value={values.state}
                  onChange={(value) => {
                    setFieldValue("state", value || "");
                    handleStateChange(
                      values.country,
                      value || "",
                      setFieldValue,
                    );
                  }}
                  disabled={!values.country}
                  required
                />

                <Select
                  className="w-[300px] mt-4"
                  label="City"
                  placeholder={
                    values.state ? "Select city" : "Select state first"
                  }
                  data={cities}
                  value={values.city}
                  onChange={(value) => setFieldValue("city", value || "")}
                  disabled={!values.state}
                  required
                />

                {/* <button type="submit">Submit</button> */}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LandLocationForm;
