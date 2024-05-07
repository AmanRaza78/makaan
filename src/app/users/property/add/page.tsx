import AddPropertyForm from "@/app/components/addPropertyForm";
import prisma from "@/lib/db";
import { Card, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import React from "react";

const AddProperty = async () => {
  const [propertyStatus, propertyType] = await Promise.all([
    prisma.propertyStatus.findMany(),
    prisma.propertyType.findMany(),
  ]);
  return <AddPropertyForm types={propertyStatus} status={propertyType} />;
};

export default AddProperty;
