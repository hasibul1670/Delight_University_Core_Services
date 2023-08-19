import { z } from 'zod';

const createValidation = z.object({
    body: z.object({
        title: z.string({
            required_error: 'Title is required'
        })
    })
});

const updateValidation = z.object({
    body: z.object({
        title: z.string({
            required_error: 'Title is required'
        })
    })
});

export const AcademicFacultyValidation = {
    createValidation,
    updateValidation,
};