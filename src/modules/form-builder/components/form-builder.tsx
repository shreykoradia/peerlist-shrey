"use client";
import React, { useEffect, useRef, useState } from "react";

import FormHeader from "./form-header";
import FormFooter from "./form-footer";
import FormQuestionBuilder from "./form-question-builder";
import { useFormStore } from "@/shared/store/form";

function FormBuilder() {
  const form = useFormStore((state) => state.form);
  const [isScrollable, setIsScrollable] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      setIsScrollable(container.scrollHeight > container.clientHeight);
    }
  }, [form.questions]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [form.questions]);

  return (
    <>
      <FormHeader isPreviewMode={false} />
      <div
        ref={containerRef}
        className="h-[calc(100vh_-_7.5rem)] overflow-y-auto"
      >
        <FormQuestionBuilder isScrollable={isScrollable} />
      </div>
      <FormFooter isScrollable={isScrollable} />
    </>
  );
}

export default FormBuilder;
