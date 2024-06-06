import axios from "axios";

import.meta.env.BASE_URL;

export const fetchSummary = async (prompt) => {
  const { data } = await axios.post(
    import.meta.env.VITE_PROXY_URL + "api/summary",
    {
      prompt,
    }
  );
  return JSON.parse(data.data);
};

export const fetchSummaryWithImages = async (summary) => {
  const { data } = await axios.post(
    import.meta.env.VITE_PROXY_URL + "api/images",
    {
      summary,
    }
  );
  return data.data;
};
