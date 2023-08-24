import { z } from 'zod';

const createValidation = z.object({
  body: z.object({
    roomNumber: z
      .string({
        required_error: 'Title is required',
      })
      .min(5, 'Title must be at least 2 characters')
      .max(200, 'Title must be at most 200 characters'),
    floor: z
      .string({
        required_error: 'floor is required',
      })
      .min(5, 'Floor must be at least 2 characters')
      .max(200, 'Floor must be at most 200 characters'),
    buildingId: z.string({
      required_error: 'BuildingId is required',
    }),
  }),
});

const updateValidation = z.object({
  body: z.object({
    roomNumber: z
      .string()
      .min(5, 'Title must be at least 2 characters')
      .max(200, 'Title must be at most 200 characters')
      .optional(),
    floor: z
      .string()
      .min(5, 'Floor must be at least 2 characters')
      .max(200, 'Floor must be at most 200 characters')
      .optional(),
  }),
});

export const RoomValidation = {
  createValidation,
  updateValidation,
};
