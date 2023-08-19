import { z } from 'zod';

const createValidation = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required',
      })
      .min(5, 'Title must be at least 5 characters')
      .max(100, 'Title must be at most 100 characters'),
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
        .max(20, 'Title must be at most 20 characters'),
    })
    .optional(),
});

export const AcademicFacultyValidation = {
  createValidation,
  updateValidation,
};
