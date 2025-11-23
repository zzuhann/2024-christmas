"use client";

import { Container } from "@/styles/HomeStyles";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { submitPostCardForm } from "@/services/api";
import { PostCardForm } from "@/types/api";
import ResultDialog from "@/components/ResultDialog";
import { sendEmail } from "@/utils";
import { formValidate } from "@/utils/formValidate";
import { FormErrors } from "@/types/error";
import PhotoBlock from "@/components/PhotoBlock";
import AboutBlock from "@/components/2024/AboutBlock";
import dynamic from "next/dynamic";

const FloatingLights = dynamic(() => import("@/components/FloatingLights"), {
  ssr: false,
});

const SeasonsBlock = dynamic(() => import("@/components/SeasonsBlock"), {
  ssr: false,
});

const ContactBlock = dynamic(() => import("@/components/2024/ContactBlock"), {
  ssr: false,
});

dayjs.extend(utc);
dayjs.extend(timezone);

export default function Home() {
  const [isEnded, setIsEnded] = useState(false);
  const [isAfterEnded, setIsAfterEnded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialogState, setDialogState] = useState({
    isOpen: false,
    isSuccess: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    const { isValid, errors } = formValidate(formData);
    if (!isValid) {
      setErrors(errors);
      return;
    }

    setIsSubmitting(true);

    const submitData: PostCardForm = {
      name: formData.get("name") as string,
      address: formData.get("address") as string,
      status: (formData.get("status") as string) || undefined,
      message: (formData.get("message") as string) || undefined,
      createTime: dayjs().tz("Asia/Taipei").valueOf(),
    };

    try {
      await submitPostCardForm(submitData);
      setDialogState({ isOpen: true, isSuccess: true });
      formElement.reset();
      setErrors({});
      setIsEnded(true);
      sendEmail(formData.get("name") as string);
    } catch (error) {
      console.error(error);
      setDialogState({ isOpen: true, isSuccess: false });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const endDate = dayjs.tz("2024-12-10 23:59:59", "Asia/Taipei");

    const checkTime = () => {
      const now = dayjs().tz("Asia/Taipei");
      if (now.isAfter(endDate)) {
        setIsEnded(true);
        setIsAfterEnded(true);
      }
    };

    checkTime();
  }, []);

  return (
    <>
      <FloatingLights />
      <Container>
        <PhotoBlock src="/images/banner.webp" year="2024" />
        <AboutBlock />
        <SeasonsBlock />
        <ContactBlock
          onSubmit={handleSubmit}
          isEnded={isEnded}
          isAfterEnded={isAfterEnded}
          isSubmitting={isSubmitting}
          errors={errors}
        />
      </Container>
      {dialogState.isOpen && (
        <ResultDialog
          isOpen={dialogState.isOpen}
          onClose={() =>
            setDialogState({ isOpen: false, isSuccess: dialogState.isSuccess })
          }
          isSuccess={dialogState.isSuccess}
        />
      )}
    </>
  );
}
