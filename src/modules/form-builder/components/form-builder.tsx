import React from "react";
import FormHeader from "./form-header";

function FormBuilder() {
  return (
    <div className="mx-auto flex flex-col justify-center border-y-0 border-x border-x-secondary-foreground max-w-screen-sm">
      <FormHeader />
      <div className="h-[calc(100vh_-_7.5rem)]"></div>
      <div>Footer</div>
    </div>
  );
}

export default FormBuilder;
