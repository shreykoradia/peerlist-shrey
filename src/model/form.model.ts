import { QUESTION_TYPE } from "@/shared/lib/constant";
import { QuestionProp } from "@/types/types";
import { Schema, model, models } from "mongoose";

// Question Schema
const QuestionSchema = new Schema({
  id: {
    type: String,
    required: [true, "Question ID is required"],
  },
  questionText: {
    type: String,
    required: [true, "Question text is required"],
    minlength: [1, "Question text must be at least 1 character"],
    maxlength: [500, "Question text must be at most 500 characters"],
  },
  questionDesc: {
    type: String,
    maxlength: [1000, "Description must be at most 1000 characters"],
  },
  type: {
    type: String,
    required: [true, "Question type is required"],
    enum: [
      QUESTION_TYPE.SHORT_ANSWER,
      QUESTION_TYPE.LONG_ANSWER,
      QUESTION_TYPE.URL,
      QUESTION_TYPE.DATE,
      QUESTION_TYPE.SINGLE_SELECT,
    ],
  },
  selectedOption: {
    type: Object,
    default: null,
  },
  radioOptions: [
    {
      id: { type: String, required: true },
      value: { type: String, required: true },
      isEditable: { type: Boolean, default: false },
    },
  ],
  answer: { type: String },
});

// Form Schema
const FormSchema = new Schema({
  id: {
    type: String,
    required: [true, "Form ID is required"],
  },
  formTitle: {
    type: String,
    required: [true, "Form title is required"],
    minlength: [1, "Form title must be at least 1 character"],
    maxlength: [200, "Form title must be at most 200 characters"],
  },
  questions: {
    type: [QuestionSchema],
    validate: {
      validator: function (questions: QuestionProp[]) {
        return questions.length > 0;
      },
      message: "A form must have at least one question",
    },
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default models.Form || model("Form", FormSchema);
