import { z } from 'zod';

const createValidation = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required',
      })
      .min(5, 'Title must be at least 5 characters')
      .max(200, 'Title must be at most 200 characters'),
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

export const BuildingValidation = {
  createValidation,
  updateValidation,
};
