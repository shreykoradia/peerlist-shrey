import FormPreview from "@/modules/form-viewer";
import Container from "@/shared/ui/container";

export default function FormViewPage({
  params,
  searchParams,
}: {
  params: { formId: string };
  searchParams?: { [key: string]: string };
}) {
  console.log({ params: params.formId, searchParams: searchParams?.mode });
  return (
    <Container>
      <div> Form Preview Coming Soon</div>
      {/* <FormPreview formId={params.formId} mode={searchParams?.mode || ""} /> */}
    </Container>
  );
}
