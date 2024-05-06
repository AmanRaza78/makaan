import UploadProfilePic from "@/app/components/uploadProfilePic";
import { getUserById } from "@/lib/actions/user";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Avatar} from "@nextui-org/react";

const ProfilePage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const dbUser = await getUserById(user ? user.id : "");

  return (
    <>
      <div className="bg-white overflow-hidden shadow rounded-lg border m-6">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <Avatar
            src={
              dbUser?.avatarUrl ??
              "https://i.pravatar.cc/150?u=a04258114e29026302d"
            }
            className="w-20 h-20 text-large"
          />
          <UploadProfilePic userId={dbUser?.id!}/>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {`${dbUser?.firstName} ${dbUser?.lastName}`}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {dbUser?.email}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Created At</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {dbUser?.createdAt.toLocaleDateString()}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Number of Properties Listed
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                1
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};
export default ProfilePage;
