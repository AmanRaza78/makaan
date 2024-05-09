"use client";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { AddPropertyFormSchema } from "@/lib/zodSchema";
import {
  Button,
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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadImages } from "@/lib/upload";

interface Props {
  types: PropertyType[];
  status: PropertyStatus[];
}

type AddPropertyFormType = z.infer<typeof AddPropertyFormSchema>;

const AddPropertyForm = (props: Props) => {
  const [images, setImages] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<AddPropertyFormType>({
    resolver: zodResolver(AddPropertyFormSchema),
  });

  const onSubmit: SubmitHandler<AddPropertyFormType> = async (data) => {
    console.log("Hey data is here", { data });
    const imagesUrls = await uploadImages(images)
    console.log({imagesUrls})
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="p-4 grid grid-cols-1 md:grid-cols-3 m-6 gap-x-2">
          <CardHeader>
            <h1 className="text-md font-semibold">Basic Information</h1>
          </CardHeader>

          <Input
            {...register("name",{ required: true })}
            errorMessage={errors.name?.message}
            isInvalid={!!errors.name}
            label="Property Name"
            className="md:col-span-3 mb-4"
          />
          <Textarea
            {...register("description", { required: true })}
            errorMessage={errors.description?.message}
            isInvalid={!!errors.description}
            label="Description"
            className="md:col-span-3 mb-4"
          />

          <Select
            {...register("typeId", { required: true })}
            errorMessage={errors.typeId?.message}
            isInvalid={!!errors.typeId}
            label="Property Type"
            selectionMode="single"
          >
            {props.types.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                {item.value}
              </SelectItem>
            ))}
          </Select>

          <Select
            {...register("statusId", { required: true })}
            errorMessage={errors.statusId?.message}
            isInvalid={!!errors.statusId}
            label="Property Status"
            selectionMode="single"
          >
            {props.status.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                {item.value}
              </SelectItem>
            ))}
          </Select>

          <Input
            {...register("price", { required: true })}
            errorMessage={errors.price?.message}
            isInvalid={!!errors.price}
            label="Price"
          />
        </Card>

        <Card className="p-4 grid grid-cols-1 md:grid-cols-3 m-6 gap-x-2">

          <CardHeader>
            <h1 className="text-md font-semibold">Location</h1>
          </CardHeader>

          <Textarea
            {...register("propertylocation.streetAddress", { required: true })}
            errorMessage={errors.propertylocation?.streetAddress?.message}
            isInvalid={!!errors.propertylocation?.streetAddress}
            label="Street Address"
            className="md:col-span-3 mb-4"
          />
          <Input
            {...register("propertylocation.city", { required: true })}
            errorMessage={errors.propertylocation?.city?.message}
            isInvalid={!!errors.propertylocation?.city}
            label="City"
            className="md:col-span-3 mb-4"
          />
          <Input
            {...register("propertylocation.state", { required: true })}
            errorMessage={errors.propertylocation?.state?.message}
            isInvalid={!!errors.propertylocation?.state}
            label="State"
            className="md:col-span-3 mb-4"
          />
          <Input
            {...register("propertylocation.country", { required: true })}
            errorMessage={errors.propertylocation?.country?.message}
            isInvalid={!!errors.propertylocation?.country}
            label="Country"
          />
          <Input
            {...register("propertylocation.zip", { required: true })}
            errorMessage={errors.propertylocation?.zip?.message}
            isInvalid={!!errors.propertylocation?.zip}
            label="Zip"
          />
          <Input
            {...register("propertylocation.landmark", { required: true })}
            errorMessage={errors.propertylocation?.landmark?.message}
            isInvalid={!!errors.propertylocation?.landmark}
            label="Landmark"
          />
        </Card>

        <Card className="p-4 grid grid-cols-1 md:grid-cols-2 m-6 gap-x-2">

          <CardHeader className="col-span-2">
            <h1 className="text-md font-semibold">Features</h1>
          </CardHeader>

          <Input
            {...register("propertyFeature.bedrooms", { required: true })}
            errorMessage={errors.propertyFeature?.bedrooms?.message}
            isInvalid={!!errors.propertyFeature?.bedrooms}
            label="Bedrooms"
            className="mb-4"
          />
          <Input
            {...register("propertyFeature.bathrooms", { required: true })}
            errorMessage={errors.propertyFeature?.bathrooms?.message}
            isInvalid={!!errors.propertyFeature?.bathrooms}
            label="Bathrooms"
            className="mb-4"
          />
          <Input
            {...register("propertyFeature.parkingSpots", { required: true })}
            errorMessage={errors.propertyFeature?.parkingSpots?.message}
            isInvalid={!!errors.propertyFeature?.parkingSpots}
            label="Parking Spots"
            className="mb-4"
          />
          <Input
            {...register("propertyFeature.area", { required: true })}
            errorMessage={errors.propertyFeature?.area?.message}
            isInvalid={!!errors.propertyFeature?.area}
            label="area"
            className="mb-4"
          />
          <div className="flex justify-between">
            <Controller
              control={control}
              name="propertyFeature.hasSwimmingPool"
              render={({ field }) => (
                <Checkbox
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  defaultValue={"false"}
                >
                  Has Swimming Pool
                </Checkbox>
              )}
            />
            <Controller
              control={control}
              name="propertyFeature.hasGardenYard"
              render={({ field }) => (
                <Checkbox
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  defaultValue={"false"}
                >
                  Has Gard/Yard
                </Checkbox>
              )}
            />
            <Controller
              control={control}
              name="propertyFeature.hasBalcony"
              render={({ field }) => (
                <Checkbox
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  defaultValue={"false"}
                >
                  Has Balcony/Patio
                </Checkbox>
              )}
            />
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

          <Input
            {...register("contact.name", { required: true })}
            errorMessage={errors.contact?.name?.message}
            isInvalid={!!errors.contact?.name}
            label="Owner Name"
          />
          <Input
            {...register("contact.phone", { required: true })}
            errorMessage={errors.contact?.phone?.message}
            isInvalid={!!errors.contact?.phone}
            label="Phone"
          />
          <Input
            {...register("contact.email", { required: true })}
            errorMessage={errors.contact?.email?.message}
            isInvalid={!!errors.contact?.email}
            label="Email"
          />
        </Card>
        <Button type="submit" color="primary" className="mx-6 my-2">
          Submit
        </Button>
      </form>
    </>
  );
};

export default AddPropertyForm;
