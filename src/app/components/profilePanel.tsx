"use client";
import { User as prismaUser } from "@prisma/client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

interface Props {
  user: prismaUser;
}

const ProfilePanel = ({ user }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            }}
            className="transition-transform"
            name={`${user.firstName} ${user.lastName}`}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem>
            <Link href="/users/profile">
                Profile
            </Link>
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            <LogoutLink>Logout</LogoutLink>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ProfilePanel;
