import FormModel from "@/model/form.model";
import { connectMongoDB } from "@/shared/lib/mongoDb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await connectMongoDB();

  switch (method) {
    case "GET":
      try {
        const forms = await FormModel.find({ isPublished: true });
        res.status(200).json({ success: true, data: forms });
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
