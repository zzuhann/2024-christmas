import { FormErrors } from "@/types/error";

export const formValidate = (
  formData: FormData
): { isValid: boolean; errors: FormErrors } => {
  const newErrors: FormErrors = {};

  // 驗證名字
  const name = formData.get("name") as string;
  if (!name?.trim()) {
    newErrors.name = "這個欄位必填";
  }

  // 驗證地址
  const address = formData.get("address") as string;
  if (!address?.trim()) {
    newErrors.address = "這個欄位必填";
  }

  return {
    isValid: Object.keys(newErrors).length === 0,
    errors: newErrors,
  };
};
