import {
  ErrorResponse,
  PublishFormPayload,
  PublishFormProps,
} from "@/types/types";

export async function postPublishForm(
  payload: PublishFormPayload
): Promise<PublishFormProps> {
  try {
    const response = await fetch("api/forms/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
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
