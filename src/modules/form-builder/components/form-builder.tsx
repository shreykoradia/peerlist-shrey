import React from "react";
import FormHeader from "./form-header";
import FormFooter from "./form-footer";

function FormBuilder() {
  return (
    <div className="mx-auto flex flex-col justify-center border-y-0 border-x border-x-secondary-foreground max-w-screen-sm">
      <FormHeader />
      <div className="h-[calc(100vh_-_7.5rem)]"></div>
      <FormFooter />
    </div>
  );
}

export default FormBuilder;
