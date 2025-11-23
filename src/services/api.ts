import { PostCardForm } from "@/types/api";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby4BOmPX_74DCq0O30Kq5_UMf5IPH2lHEBsW-aTpTSygBdt0rQ4s0xpLARzBwxeFvJV/exec";

export const submitPostCardForm = async (formData: PostCardForm) => {
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // Google Apps Script 需要使用 no-cors 模式
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        sheetName: "2025",
      }),
    });

    return true;
  } catch (error) {
    console.error("提交表單失敗:", error);
    throw error;
  }
};
