"use client";
import React from "react";
import { Card, Checkbox, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { PropertyStatus, PropertyType } from "@prisma/client";

interface Props {
  types: PropertyType[];
  status: PropertyStatus[];
}

const AddPropertyForm = (props: Props) => {
  return (
    <>
    <Card className="p-4 grid grid-cols-1 md:grid-cols-3 m-6 gap-x-2">
      <Input label="Property Name" className="md:col-span-3 mb-4" />
      <Textarea label="Description" className="md:col-span-3 mb-4" />

      <Select label="Property Type" selectionMode="single">
        {props.types.map((item) => (
          <SelectItem key={item.id} value={item.id}>
            {item.value}
          </SelectItem>
        ))}
      </Select>

      <Select label="Property Status" selectionMode="single">
        {props.status.map((item) => (
          <SelectItem key={item.id} value={item.id}>
            {item.value}
          </SelectItem>
        ))}
      </Select>
      <Input label="Price"/>
    </Card>

    <Card className="p-4 grid grid-cols-1 md:grid-cols-3 m-6 gap-x-2">
        <Textarea label="Street Address" className="md:col-span-3 mb-4"/>
        <Input label="City" className="md:col-span-3 mb-4"/>
        <Input label="State" className="md:col-span-3 mb-4"/>
        <Input label="Country"/>
        <Input label="Zip"/>
        <Input label="Landmark"/>
    </Card>

    <Card className="p-4 grid grid-cols-1 md:grid-cols-2 m-6 gap-x-2">
        <Input label="Bedrooms" className="mb-4"/>
        <Input label="Bathrooms" className="mb-4"/>
        <Input label="Parking Spots" className="mb-4"/>
        <Input label="area" className="mb-4"/>
        <div className="flex justify-between">
        <Checkbox>Has Swimming Pool</Checkbox>
        <Checkbox>Has Garden Yard</Checkbox>
        <Checkbox>Has Balcony</Checkbox>
        </div>

    </Card>
    </>
  );
};

export default AddPropertyForm;
