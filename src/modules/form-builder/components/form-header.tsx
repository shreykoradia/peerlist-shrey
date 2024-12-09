"use client";

import React from "react";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useFormStore } from "@/shared/store/form";
import Banner from "@/shared/ui/banner";

import OpenIcon from "@/assets/icons/open.svg";
import clsx from "clsx";

type FormHeaderProp = {
  isPreviewMode: boolean;
};

function FormHeader({ isPreviewMode = false }: FormHeaderProp) {
  const form = useFormStore((state) => state.form);
  const updateFormTitle = useFormStore((state) => state.updateFormTitle);
  const togglePreviewMode = useFormStore((state) => state.togglePreviewMode);
  const showBanner = useFormStore((state) => state.uiState.showBanner);
  const toggleShowBanner = useFormStore((state) => state.toggleShowBanner);

  const handlePreviewClick = () => {
    if (form.questions.length === 0) {
      toggleShowBanner({
        message: "Please add questions to preview the form!",
        variant: "error",
      });
      return;
    }
    togglePreviewMode();
  };

  return (
    <>
      <div className="px-6 w-full py-4 border-b border-b-secondary-foreground flex items-center justify-between">
        <Input
          name="formTitle"
          value={form.formTitle}
          readOnly={isPreviewMode}
          onChange={(e) => updateFormTitle(form.id, e.target.value)}
          className={clsx(
            "font-semibold text-base w-2/3 focus:!outline-none focus:!shadow-none",
            { "cursor-default": isPreviewMode }
          )}
          onBlur={(e) => {
            if (e.target.value.length === 0 || !e.target.value) {
              updateFormTitle(form.id, "Still it is an untitled form :)");
            }
          }}
        />
        <Button
          variant={"outline"}
          onClick={handlePreviewClick}
          className="gap-1"
        >
          {isPreviewMode ? "Go back to Edit" : "Preview"}
          <OpenIcon className="mt-0.5" />
        </Button>
      </div>
      {showBanner.show ? (
        <Banner
          variant={"error"}
          position={"top-right"}
          bannerMessage={showBanner.message}
          onClose={() => toggleShowBanner({ message: "", variant: "" })}
        />
      ) : null}
    </>
  );
}

export default FormHeader;
