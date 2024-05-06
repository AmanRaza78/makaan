import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@nextui-org/react";
import ProfilePanel from "./profilePanel";
import prisma from "@/lib/db";


const AuthPanel = async () => {
  const { isAuthenticated, getUser } = await getKindeServerSession();

  if (await isAuthenticated()) {
    const user = await getUser();
    const dbUser = await prisma.user.findUnique({
      where:{
          id: user?.id
      }
    })
    return  <>{dbUser!! && <ProfilePanel user={dbUser} />}</>
  }
  
  return (
    <div className="flex gap-3">
      <Button color="primary">
        <LoginLink>Login</LoginLink>
      </Button>
      <Button>
        <RegisterLink>Sign Up</RegisterLink>
      </Button>
    </div>
  );
};

export default AuthPanel;
