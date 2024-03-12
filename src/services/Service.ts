import axios from "../utils/axiosInstance";

export const translateText = async (text: string) => {
  const requestBody = {
    model: "deepseek-chat",
    messages: [
      {
        role: "system",
        content: "Translate the following English text to Farsi:",
      },
      { role: "user", content: text },
    ],
  };
  try {
    const response = await axios.post("/chat/completions", requestBody, {
      headers: { Authorization: `Bearer sk-d353d13fb9e94afa8beb597e99e09d8d` },
    });
    return response.data.choices[0];
  } catch (error: any) {
    return error.response;
  }
};
export const WriteText = async (
  text: string,
  active: string,
  activeFormat: string,
  SelectLan: string
) => {
  const requestBody = {
    model: "deepseek-chat",
    messages: [
      {
        role: "system",
        content: `Please rewrite the following text in a shorter ${active} and ${activeFormat} format in ${SelectLan}:`,
      },
      { role: "user", content: text },
    ],
  };
  try {
    const response = await axios.post("/chat/completions", requestBody, {
      headers: { Authorization: `Bearer sk-d353d13fb9e94afa8beb597e99e09d8d` },
    });
    return response.data.choices[0];
  } catch (error: any) {
    return error.response;
  }
};
