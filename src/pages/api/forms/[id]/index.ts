import FormModel from "@/model/form.model";
import { connectMongoDB } from "@/shared/lib/mongoDb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;

  await connectMongoDB();

  switch (method) {
    case "GET":
      try {
        const { id } = query;

        // Check if id is provided
        if (!id) {
          return res
            .status(400)
            .json({ success: false, message: "Form ID is required" });
        }

        // Fetch the form by ID
        const form = await FormModel.findOne({ id });

        if (!form) {
          return res
            .status(404)
            .json({ success: false, message: "Form not found" });
        }

        res.status(200).json({ success: true, data: form });
      } catch (error) {
        res
          .status(500)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .json({ success: false, message: (error as any).message });
      }
      break;

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
