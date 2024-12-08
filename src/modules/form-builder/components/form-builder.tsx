"use client";
import React from "react";

import FormHeader from "./form-header";
import FormFooter from "./form-footer";
import FormQuestionBuilder from "./form-question-builder";

function FormBuilder() {
  return (
    <>
      <FormHeader isPreviewMode={false} />
      <div className="h-[calc(100vh_-_7.5rem)] overflow-y-auto">
        <FormQuestionBuilder />
      </div>
      <FormFooter />
    </>
  );
}

export default FormBuilder;
