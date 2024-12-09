import { ErrorResponse, PublishFormProps } from "@/types/types";

export async function getFormById(formId: string): Promise<PublishFormProps> {
  const baseUrl =
    typeof window !== "undefined"
      ? ""
      : process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  try {
    const response = await fetch(`${baseUrl}/api/forms/${formId}`, {
      method: "GET",
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(
        "Error publishing form:",
        errorData.message || response.statusText
      );
      throw new Error(errorData.message || "Failed to publish form");
    }

    return await response.json();
  } catch (error: unknown) {
    console.error("Network or server error:", (error as ErrorResponse).message);
    throw error;
  }
}

export async function submitFormResponses(
  formId: string,
  responses: Record<string, string>
): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(`/api/forms/${formId}/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formId, responses }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to submit the form");
    }
    return data;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
}
