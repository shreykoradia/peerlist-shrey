import FormModel from "@/model/form.model";
import { connectMongoDB } from "@/shared/lib/mongoDb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectMongoDB();

  if (req.method === "POST") {
    try {
      const { id } = req.query;
      const { responses } = req.body;

      if (!id || !responses || typeof responses !== "object") {
        return res
          .status(400)
          .json({ success: false, message: "Invalid payload" });
      }

      const form = await FormModel.findOne({ id });

      if (!form) {
        return res.status(404).json({
          success: false,
          message: "Form not found",
        });
      }

      // Check if the form is already submitted
      if (form.isSubmitted) {
        return res.status(400).json({
          success: false,
          message: "This form has already been submitted",
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      form.questions = form.questions.map((question: any) => {
        if (responses[question.id] !== undefined) {
          return { ...question.toObject(), answer: responses[question.id] };
        }
        return question.toObject();
      });
      form.isSubmitted = true;
      form.updatedAt = new Date();

      // Save updated form
      await form.save();

      res.status(200).json({
        success: true,
        message: "Form submitted successfully",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      res.status(500).json({
        success: false,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        message: (error as any).message || "Internal server error",
      });
    }
  } else {
    // Handle unsupported methods
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
