import FormPreview from "@/modules/form-viewer";
import { getFormById } from "@/modules/form-viewer/api";
import Container from "@/shared/ui/container";
import { QuestionProp } from "@/types/types";

export default async function FormViewPage({
  params,
}: {
  params: Promise<{ formId: string }>;
}) {
  const formId = (await params).formId;

  const response = await getFormById(formId);

  const formData = {
    form: {
      id: response.data.id,
      questions: response.data.questions as QuestionProp[],
      formTitle: response.data.formTitle,
      createdAt: response.data.createdAt,
      updatedAt: response.data.updatedAt,
    },
    uiState: {
      isFormPublished: response.data.isPublished,
      isFormInPreview: false,
      showBanner: false,
    },
  };

  return (
    <Container>
      <FormPreview
        isFormPublished={response.data.isPublished}
        formData={formData}
      />
    </Container>
  );
}
