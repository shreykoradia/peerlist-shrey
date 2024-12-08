import FormFooter from "@/modules/form-builder/components/form-footer";
import FormHeader from "@/modules/form-builder/components/form-header";
import { QuestionEditorBody } from "@/modules/question-builder/components/question-editor";
import { useFormStore } from "@/shared/store/form";
import Label from "@/shared/ui/label";
import React from "react";

function FormPreview() {
  const uiState = useFormStore((state) => state.uiState);
  const form = useFormStore((state) => state.form);
  const updateQuestion = useFormStore((state) => state.updateQuestion);

  const handleAnswerChange = (questId: string, answer: string) => {
    if (uiState.isFormPublished) {
      updateQuestion(questId, { answer: answer });
    }
  };
  return (
    <>
      <FormHeader isPreviewMode={uiState.isFormInPreview} />
      <div className="h-[calc(100vh_-_7.5rem)] overflow-y-auto">
        <div className="p-6 h-full">
          <div className="flex flex-col gap-8">
            {form.questions.map((quest) => (
              <div className="flex flex-col gap-1" key={quest.id}>
                <div className="flex flex-col gap-1">
                  <Label
                    variant={"subHeader"}
                    weight={"semiBold"}
                    text={quest.questionText}
                  />
                  {quest?.questionDesc ? (
                    <Label
                      variant={"description"}
                      weight={"normal"}
                      text={quest.questionDesc}
                    />
                  ) : null}
                </div>
                <QuestionEditorBody
                  type={quest.type}
                  options={quest.radioOptions}
                  onAnswerChange={(answer: string) =>
                    handleAnswerChange(quest.id, answer)
                  }
                  isOnlyView={
                    uiState.isFormPublished || uiState.isFormInPreview
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <FormFooter />
    </>
  );
}

export default FormPreview;
