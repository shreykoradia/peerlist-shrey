"use client";

import FormBuilder from "@/modules/form-builder/components";

import { useFormStore } from "@/shared/store/form";
import Container from "@/shared/ui/container";

export default function FormPage() {
  const uiState = useFormStore((state) => state.uiState);
  return <>{uiState.isFormInPreview ? "preview" : <FormBuilder />}</>;
}
