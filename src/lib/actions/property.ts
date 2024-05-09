"use server";
import { AddPropertyFormType } from "@/app/components/addPropertyForm";
import prisma from "../db";

import { Property } from "@prisma/client";

export async function saveProperty(
  propertyData: AddPropertyFormType,
  imagesUrls: string[],
  userId: string
) {
  const basic: Omit<Property, "id"> = {
    name: propertyData.name,
    description: propertyData.description,
    price: propertyData.price,
    statusId: propertyData.statusId,
    typeId: propertyData.typeId,
    userId,
  };
  const result = await prisma.property.create({
    data: {
      ...basic,
      location: {
        create: propertyData.propertylocation,
      },
      feature: {
        create: propertyData.propertyfeature,
      },
      contact: {
        create: propertyData.contact,
      },
      images: {
        create: imagesUrls.map((img) => ({
          url: img,
        })),
      },
    },
  });
  console.log({ result });
  return result;
}