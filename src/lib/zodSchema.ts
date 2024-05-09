import { z } from "zod";

export const AddPropertyFormSchema = z.object({
  name: z.string(),
  description: z.string(),
  typeId: z.string().transform((data: unknown) => Number(data)),
  statusId: z.string().transform((data: unknown) => Number(data)),
  price: z.string().transform((data: unknown) => Number(data)),

  propertylocation: z.object({
    streetAddress: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    zip: z.string(),
    landmark: z.string(),
  }),

  propertyfeature: z.object({
    bedrooms: z.string().transform((data: unknown) => Number(data)),
    bathrooms: z.string().transform((data: unknown) => Number(data)),
    parkingSpots: z.string().transform((data: unknown) => Number(data)),
    area: z.string().transform((data: unknown) => Number(data)),
    hasSwimmingPool: z.boolean(),
    hasGardenYard: z.boolean(),
    hasBalcony: z.boolean()
  }),
  contact: z.object({
    name:z.string(),
    phone:z.string(),
    email: z.string().email()
  })

});
