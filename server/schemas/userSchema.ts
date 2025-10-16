import { z } from 'zod';

export const createUserSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email'),
  profileImage: z.string().url().optional(),
});

export const updateUserSchema = createUserSchema.partial();
