import FormFooter from "@/modules/form-builder/components/form-footer";
import FormHeader from "@/modules/form-builder/components/form-header";
import FormQuestionBuilder from "@/modules/form-builder/components/form-question-builder";
import { PREVIEW } from "@/shared/lib/constant";
import { useFormStore } from "@/shared/store/form";
import React from "react";

function FormPreview() {
  const uiState = useFormStore((state) => state.uiState);
  return (
    <>
    <FormHeader isPreviewMode={uiState.isFormInPreview} />
      <div className="h-[calc(100vh_-_7.5rem)] overflow-y-auto">
        <FormQuestionBuilder />
      </div>
      <FormFooter />
    </>
  );
}

export default FormPreview;
