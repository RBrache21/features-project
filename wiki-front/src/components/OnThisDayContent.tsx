import { Onthisday } from "../interfaces/WikiFeturedContent";
import ArticleCard from "./ArticleCard";
import ContentHeading from "./ContentHeading";

type OnThisDayContentProps = {
  onThisDay: Onthisday[];
  currentPage: number;
  itemsPerPage: string;
  handlePageChange: (page: number) => void;
};

const OnThisDayContent = ({
  onThisDay,
  currentPage,
  itemsPerPage,
  handlePageChange,
}: OnThisDayContentProps) => {
  const paginatedOnThisDay =
    itemsPerPage === "All"
      ? onThisDay
      : onThisDay.slice(
          (currentPage - 1) * parseInt(itemsPerPage),
          currentPage * parseInt(itemsPerPage)
        );

  const totalPages = Math.ceil(onThisDay.length / parseInt(itemsPerPage));

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <ContentHeading
        title="On This Day"
        desc="Historical events from today's date"
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        handlePageChange={handlePageChange}
      />

      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {paginatedOnThisDay?.map((article: Onthisday, index) => (
            <ArticleCard
              key={index}
              title={
                article.pages && article.pages[0].normalizedtitle
                  ? article.pages[0].normalizedtitle
                  : ""
              }
              thumbnail={article.pages && article.pages[0].thumbnail}
              description={
                article.pages && article.pages[0].description
                  ? article.pages[0].description
                  : ""
              }
              pageid={
                article.pages && article.pages[0].pageid
                  ? article.pages[0].pageid.toString()
                  : index.toString()
              }
              href={
                article.pages &&
                article.pages[0].content_urls &&
                article.pages[0].content_urls.desktop.page
                  ? article.pages[0].content_urls.desktop.page
                  : ""
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnThisDayContent;
