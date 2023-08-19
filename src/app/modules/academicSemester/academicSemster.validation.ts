import { z } from 'zod';
import {
  academicSemesterCodes,
  academicSemesterTitles,
  acdemicSemesterMonths,
} from './academicSemester.constant';

const createValidationSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitles] as [string, ...string[]], {
      required_error: 'Title is required',
    }),
    year: z
      .number()
      .int()
      .min(2000, 'Year must be at least 2000')
      .max(2100, 'Year must be at most 2100')
      .refine(value => value >= 2000 && value <= 2100, {
        message: 'Year must be between 2000 and 2100',
      }),
    code: z.enum([...academicSemesterCodes] as [string, ...string[]]),
    startMonth: z.enum([...acdemicSemesterMonths] as [string, ...string[]], {
      required_error: 'Start month is needed',
    }),
    endMonth: z.enum([...acdemicSemesterMonths] as [string, ...string[]], {
      required_error: 'End month is needed',
    }),
  }),
});

const updateValidationSchema = z
  .object({
    body: z.object({
      title: z
        .enum([...academicSemesterTitles] as [string, ...string[]], {
          required_error: 'Title is required',
        })
        .optional(),
      year: z
        .number()
        .int()
        .min(2000, 'Year must be at least 2000')
        .max(2100, 'Year must be at most 2100')
        .refine(value => value >= 2000 && value <= 2100, {
          message: 'Year must be between 2000 and 2100',
        })
        .optional(),
      code: z
        .enum([...academicSemesterCodes] as [string, ...string[]])
        .optional(),
      startMonth: z
        .enum([...acdemicSemesterMonths] as [string, ...string[]], {
          required_error: 'Start month is needed',
        })
        .optional(),
      endMonth: z
        .enum([...acdemicSemesterMonths] as [string, ...string[]], {
          required_error: 'End month is needed',
        })
        .optional(),
    }),
  })
  .refine(
    data =>
      (data.body.title && data.body.code) ||
      (!data.body.title && !data.body.code),
    {
      message: 'Either both title and code should be provided or neither',
    }
  );

export const AcademicSemesterValidation = {
  createValidationSchema,
  updateValidationSchema,
};
