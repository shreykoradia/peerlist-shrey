import FormFooter from "@/modules/form-builder/components/form-footer";
import FormHeader from "@/modules/form-builder/components/form-header";
import FormQuestionBuilder from "@/modules/form-builder/components/form-question-builder";
import { PREVIEW } from "@/shared/lib/constant";
import { useFormStore } from "@/shared/store/form";
import Label from "@/shared/ui/label";
import React from "react";

function FormPreview() {
  const uiState = useFormStore((state) => state.uiState);
  const form = useFormStore((state) => state.form);
  return (
    <>
      <FormHeader isPreviewMode={uiState.isFormInPreview} />
      <div className="h-[calc(100vh_-_7.5rem)] overflow-y-auto">
        {form.questions.map((quest) => (
          <Label variant={"subHeader"} text={quest.questionText} />
        ))}
      </div>
      <FormFooter />
    </>
  );
}

export default FormPreview;
