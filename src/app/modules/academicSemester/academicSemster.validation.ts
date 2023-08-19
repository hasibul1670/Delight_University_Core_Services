import { z } from "zod";

const createValidationSchema = z.object({
  body: z.object({
      year: z.number()
          .int()
          .min(2000, "Year must be at least 2000")
          .max(2100, "Year must be at most 2100")
          .refine(value => value >= 2000 && value <= 2100, {
              message: "Year must be between 2000 and 2100",
          }),
      title: z.string()
          .min(4, "Title must be at least 4 characters")
          .max(10, "Title must be at most 10 characters"),
      code: z.string({
          required_error: "Code is required"
      }),
      startMonth: z.string({
          required_error: "Start month is required"
      }),
      endMonth: z.string({
          required_error: "End month is required"
      })
  })
});



export const AcademicSemesterValidation = {
  createValidationSchema,
};
