"use server"
// Not sure why we needed to define this as use server, doesn't Next.js default to server components?

import { db } from "@/db";
import { OrderStatus } from "@prisma/client";

export const changeOrderStatus = async ({
  id,
  newStatus,
}: {
  id: string;
  newStatus: OrderStatus;
}) => {
  await db.order.update({
    // we use the id to identify which order we're updating. This is NOT the user id, but the id unique to the phone case customization.
    where: {
      id,
    },
    // This is the data we're mutating/updating
    data: { status: newStatus },
  });
};
