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
