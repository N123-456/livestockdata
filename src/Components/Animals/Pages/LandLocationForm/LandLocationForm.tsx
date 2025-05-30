import { Select } from "@mantine/core";
import { Form, Formik } from "formik";
import React from "react";
 export type landData={
  landtype:string;
  landownership:string;
  landclassification:string;
}
const LandLocationForm : React.FC<{}> = () => {
   const initialValues:landData={
          landtype: "",
          landownership: "",
          landclassification: "",
        }
  return (
    <div className=" min-h-[60%] max-w-5xl mx-auto">
      <Formik
       initialValues={initialValues}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ setFieldValue, values }) => (
        <Form>
          <div className="grid grid-cols-3 mt-5 gap-4 max-w-5xl mx-auto">
          <Select
            label="Land Type"
            placeholder="Pick value"
            data={["Rain-Fed", "Pasture", "Barren", "Mixed"]}
            value={values.landtype}
            onChange={(value)=>setFieldValue("lantype",value)}
            searchable
          />

           <Select
            label="Land Ownership"
            placeholder="Pick value"
            data={["Rented Land. (Kanal,Marla,Acre)",
"Purchased Land. (Kanal,Marla,Acre)",
"Inherited Land. (Kanal,Marla,Acre)"   ]}
value={values.landownership}
            onChange={(value)=>setFieldValue("landownership",value)}
            searchable
          />
           <Select
            label="Land Classification"
            placeholder="Pick value"
            data={["Land","Sub Land"]}
            searchable
          />
         
          <button type="submit">Submit</button>
           </div>
        </Form>
        )}
      </Formik>
    </div>
  );
};

export default LandLocationForm;
