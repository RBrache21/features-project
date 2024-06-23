import { useState, useEffect } from "react";
import Services from "./services";
import { WikiFeturedContent } from "./interfaces/WikiFeturedContent";
import { DateSelector } from "./components/DateSelector";
import { LanguageSelector } from "./components/LanguageSelector";
import { ItemsPerPageSelector } from "./components/ItemsPerPageSelector";
import { LoaderCircle, Infinity } from "lucide-react";
import MostReadContent from "./components/MostReadContent";
import { CategorySelector } from "./components/CategorySelector";
import NewsContent from "./components/NewsContent";
import OnThisDayContent from "./components/OnThisDayContent";
import { Toggle } from "./components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip";

export default function App() {
  const { fetchFeaturedContent, isLoading, error } = Services();
  const [data, setData] = useState<WikiFeturedContent | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(Date.now()));
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedCategory, setSelectedCategory] = useState("mostread");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState("5");
  const [enableInfiniteScroll, setEnableInfiniteScroll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchFeaturedContent(
        selectedDate,
        selectedLanguage
      );

      setData(response);
    };
    fetchData();
  }, [selectedDate, selectedLanguage]);

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleEnableInfiniteScroll = () => {
    setEnableInfiniteScroll(!enableInfiniteScroll);
    setItemsPerPage("All");
  };

  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center h-screen
      bg-background text-primary"
      >
        <LoaderCircle className="w-12 h-12 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-background text-primary">
        <p>Oops! Something went wrong. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-full overflow-hidden">
      <div className="w-full max-w-6xl mx-auto py-12 px-2 overflow-hidden flex flex-col h-full">
        <h1 className="text-3xl font-bold mb-8 text-primary">
          Featured Articles
        </h1>
        <div className="flex flex-col items-center justify-between mb-6  md:flex-row">
          <div className="flex flex-col items-center gap-4 w-full md:w-auto md:flex-row">
            <DateSelector
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              disabled={isLoading}
            />

            <LanguageSelector
              selectedLanguage={selectedLanguage}
              onValueChange={setSelectedLanguage}
              disabled={isLoading}
            />

            <ItemsPerPageSelector
              itemsPerPage={itemsPerPage}
              onValueChange={handleItemsPerPageChange}
              disabled={isLoading || enableInfiniteScroll}
            />

            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Toggle
                    variant="outline"
                    size="sm"
                    data-state={enableInfiniteScroll ? "on" : "off"}
                    onClick={handleEnableInfiniteScroll}
                    disabled={isLoading || selectedCategory !== "mostread"}
                  >
                    <Infinity className="w-4 h-4 text-primary" />
                  </Toggle>
                </TooltipTrigger>
                <TooltipContent>Enable infinite scroll</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="mt-4 md:mt-0 w-full md:w-auto">
            <CategorySelector
              selectedCategory={selectedCategory}
              onValueChange={setSelectedCategory}
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          {selectedCategory === "mostread" &&
            (data?.mostread ? (
              <MostReadContent
                mostReadArticles={data.mostread.articles}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                handlePageChange={handlePageChange}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                enableInfiniteScroll={enableInfiniteScroll}
              />
            ) : (
              <div>No data</div>
            ))}

          {selectedCategory === "news" &&
            (data?.news ? (
              <NewsContent
                news={data.news}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                handlePageChange={handlePageChange}
              />
            ) : (
              <div>No data</div>
            ))}

          {selectedCategory === "onthisday" &&
            (data?.onthisday ? (
              <OnThisDayContent
                onThisDay={data.onthisday}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                handlePageChange={handlePageChange}
              />
            ) : (
              <div>No data</div>
            ))}
        </div>
      </div>
    </div>
  );
}
