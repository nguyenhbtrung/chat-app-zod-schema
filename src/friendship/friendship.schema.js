import { z } from 'zod';

const FRIENDSHIP_STATUS = ['pending', 'accepted', 'rejected', 'blocked', 'cancelled'];

export const addFriendSchema = z.object({
    toUserId: z.coerce.number().int().positive({
        message: 'toUserId must be a positive integer',
    }),
});

export const updateFriendshipSchema = z.object({
    status: z.enum(FRIENDSHIP_STATUS, {
        message: `status is not valid`,
    }),
});