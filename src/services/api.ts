import { PostCardForm } from "@/types/api";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx2VA2OxDMLfzqZ8BzTbsP4sedjWm29JQLCafcDfJ4CHXWfa3AJwdCYQ60fbFu9esSL/exec";

export const submitPostCardForm = async (formData: PostCardForm) => {
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // Google Apps Script 需要使用 no-cors 模式
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    return true;
  } catch (error) {
    console.error("提交表單失敗:", error);
    throw error;
  }
};
