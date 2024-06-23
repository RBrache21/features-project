import { useState } from "react";
import { wikipediaAPI } from "./wikipediaAPI";
import { WikiFeturedContent } from "../interfaces/WikiFeturedContent";
import { formatDate } from "../lib/utils";

const Services = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFeaturedContent = async (
    date: Date,
    language: string
  ): Promise<WikiFeturedContent> => {
    const formattedDate = formatDate(date);

    setIsLoading(true);
    try {
      // without backend
      // const response = await wikipediaAPI.get<WikiFeturedContent>(
      //   `${language}/featured/${formattedDate}`
      // );

      // with backend
      const response = await wikipediaAPI.get<WikiFeturedContent>(`/feed`, {
        params: { date: formattedDate, language },
      });

      return response.data;
    } catch (error: any) {
      console.error("Error fetching featured content:", error);
      setError(error);
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    fetchFeaturedContent,
    isLoading,
    error,
  };
};

export default Services;
