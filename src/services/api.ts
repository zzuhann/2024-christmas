import { PostCardForm } from '@/types/api';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwj9_DkrL5G4deg_EyjMdtnG1JHlHfmbj7cWLEHWkqIuNxUBDJz0B7Qkk6LPcGI5yQt/exec';

export const submitPostCardForm = async (formData: PostCardForm) => {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Google Apps Script 需要使用 no-cors 模式
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    return true;
  } catch (error) {
    console.error('提交表單失敗:', error);
    throw error;
  }
}; 