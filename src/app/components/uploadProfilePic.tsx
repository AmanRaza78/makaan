"use client";
import FileInput from "@/app/components/fileUpload";
import { updateUserProfilePic } from "@/lib/actions/user";
import { uploadProfile } from "@/lib/upload";
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UploadAvatar = ({ userId }: { userId: string }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [image, setImage] = useState<File>();
  const router = useRouter();

  return (
    <div>
    <Button color="primary" variant="ghost" onClick={onOpen}>
      Upload
    </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Upload Avatar</ModalHeader>
              <ModalBody>
                <FileInput onChange={(e) => setImage((e as any).target.files[0])} />
                {image && <Image src={URL.createObjectURL(image)} />}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  isLoading={isSubmitting}
                  color="primary"
                  onPress={async () => {
                    setIsSubmitting(true);
                    if (!image) {
                      onClose();
                      return;
                    }
                    const avatarUrl = await uploadProfile(image);
                    const result = await updateUserProfilePic(avatarUrl, userId);
                    router.refresh();
                    setIsSubmitting(false);
                    onClose();
                  }}
                >
                  Change Avatar
                </Button>

              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default UploadAvatar;