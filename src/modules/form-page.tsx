"use client";

import FormBuilder from "@/modules/form-builder/components";

import { useFormStore } from "@/shared/store/form";

import FormPreview from "./form-viewer";
import { FormResponseObject } from "./form-viewer/type";

export default function FormPage() {
  const uiState = useFormStore((state) => state.uiState);
  return (
    <>
      {uiState.isFormInPreview ? (
        <FormPreview
          isFormPublished={false}
          formData={{} as FormResponseObject}
        />
      ) : (
        <FormBuilder />
      )}
    </>
  );
}
