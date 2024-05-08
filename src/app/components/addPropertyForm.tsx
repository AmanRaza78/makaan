"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { PropertyStatus, PropertyType } from "@prisma/client";
import FileInput from "./fileUpload";
import PictureCard from "./pictureCard";

interface Props {
  types: PropertyType[];
  status: PropertyStatus[];
}

const AddPropertyForm = (props: Props) => {
  const [images, setImages] = useState<File[]>([]);
  return (
    <>
      <Card className="p-4 grid grid-cols-1 md:grid-cols-3 m-6 gap-x-2">
        <CardHeader>
          <h1 className="text-md font-semibold">Basic Information</h1>
        </CardHeader>
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
        <Input label="Price" />
      </Card>

      <Card className="p-4 grid grid-cols-1 md:grid-cols-3 m-6 gap-x-2">
        <CardHeader>
          <h1 className="text-md font-semibold">Location</h1>
        </CardHeader>
        <Textarea label="Street Address" className="md:col-span-3 mb-4" />
        <Input label="City" className="md:col-span-3 mb-4" />
        <Input label="State" className="md:col-span-3 mb-4" />
        <Input label="Country" />
        <Input label="Zip" />
        <Input label="Landmark" />
      </Card>

      <Card className="p-4 grid grid-cols-1 md:grid-cols-2 m-6 gap-x-2">
        <CardHeader className="col-span-2">
          <h1 className="text-md font-semibold">Features</h1>
        </CardHeader>
        <Input label="Bedrooms" className="mb-4" />
        <Input label="Bathrooms" className="mb-4" />
        <Input label="Parking Spots" className="mb-4" />
        <Input label="area" className="mb-4" />
        <div className="flex justify-between">
          <Checkbox>Has Swimming Pool</Checkbox>
          <Checkbox>Has Garden Yard</Checkbox>
          <Checkbox>Has Balcony</Checkbox>
        </div>
      </Card>

      <Card className="p-4 grid grid-cols-1 md:grid-cols-3 m-6 gap-x-2">
        <CardHeader className="col-span-3">
          <h1 className="text-md font-semibold">Upload Pictures</h1>
        </CardHeader>
        <FileInput
          onSelect={(e) => setImages([(e as any).target.files[0], ...images])}
          className="col-span-3"
        />
        <div className="flex gap-3 flex-wrap">
          {images.map((image, index) => (
            <PictureCard
              key={URL.createObjectURL(image)}
              src={URL.createObjectURL(image)}
              index={index}
              onDelete={(i) =>
                setImages([...images.slice(0, i), ...images.slice(i + 1)])
              }
            />
          ))}
        </div>
      </Card>

      <Card className="p-4 grid grid-cols-1 md:grid-cols-3 m-6 gap-x-2">
        <CardHeader className="col-span-3">
          <h1 className="text-md font-semibold">Contact Information</h1>
        </CardHeader>
        <Input label="Owner Name" />
        <Input label="Phone" />
        <Input label="Email" />
      </Card>
    </>
  );
};

export default AddPropertyForm;
