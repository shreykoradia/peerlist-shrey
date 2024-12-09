import type { NextApiRequest, NextApiResponse } from "next";
import { connectMongoDB } from "@/shared/lib/mongoDb";
import FormModel from "../../../model/form.model";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await connectMongoDB();

  switch (method) {
    case "POST":
      try {
        const form = req.body;

        if (!form || !form.id) {
          return res.status(400).json({ message: "Invalid form data" });
        }

        const newForm = new FormModel(form);

        await newForm.validate();

        const savedForm = await newForm.save();
        res.status(201).json({ success: true, data: savedForm });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.name === "ValidationError") {
          const errors = Object.values(error.errors).map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (err) => (err as any).message
          );
          return res.status(400).json({ success: false, errors });
        }

        res.status(500).json({ success: false, message: error.message });
      }
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
