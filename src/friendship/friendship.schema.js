import { z } from 'zod';

export const addFriendSchema = z.object({
    toUserId: z.coerce.number().int().positive({
        message: 'toUserId must be a positive integer',
    }),
});