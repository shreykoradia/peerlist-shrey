"use client";

import FormBuilder from "@/modules/form-builder/components";

import { useFormStore } from "@/shared/store/form";

import FormPreview from "./form-viewer";

export default function FormPage() {
  const form = useFormStore((state) => state.form);
  const uiState = useFormStore((state) => state.uiState);
  return (
    <>
      {uiState.isFormInPreview ? (
        <FormPreview
          formData={{ form: { ...form }, uiState: { ...uiState } }}
        />
      ) : (
        <FormBuilder />
      )}
    </>
  );
}
