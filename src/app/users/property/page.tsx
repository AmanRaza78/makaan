import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const UserProperty = () => {
    
  return (
    <>
      <h1>User Properties</h1>
      <Link href="/users/property/add">
        <Button>Add Property</Button>
      </Link>
    </>
  );
};

export default UserProperty;
