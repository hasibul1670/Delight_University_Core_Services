import { z } from 'zod';

const createValidation = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required',
      })
      .min(2, 'Title must be at least 2 characters')
      .max(200, 'Title must be at most 200 characters'),
    code: z
      .string({
        required_error: 'Code is required',
      })
      .min(2, 'Code must be at least 2 characters')
      .max(200, 'Code must be at most 200 characters'),
    credits: z
      .number({
        required_error: 'credits is required',
      })
      .min(1, 'credits must be at least 2 characters')
      .max(200, 'credits must be at most 200 characters'),
  }),
});

const updateValidation = z.object({
  body: z
    .object({
      title: z
        .string({
          required_error: 'Title is required',
        })
        .min(5, 'Title must be at least 5 characters')
        .max(200, 'Title must be at most 200 characters'),
    })
    .optional(),
});

export const CourseValidation = {
  createValidation,
  updateValidation,
};
