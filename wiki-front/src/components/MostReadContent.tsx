import { Tfa } from "../interfaces/WikiFeturedContent";
import ArticleCard from "./ArticleCard";
import InfiniteScroll from "react-infinite-scroll-component";
import ContentHeading from "./ContentHeading";

type MostReadContentProps = {
  mostReadArticles: Tfa[];
  currentPage: number;
  itemsPerPage: string;
  handlePageChange: (page: number) => void;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  enableInfiniteScroll: boolean;
};

const MostReadContent = ({
  mostReadArticles,
  currentPage,
  itemsPerPage,
  handlePageChange,
  selectedDate,
  setSelectedDate,
  enableInfiniteScroll,
}: MostReadContentProps) => {
  const paginatedMostRead =
    itemsPerPage === "All"
      ? mostReadArticles
      : mostReadArticles.slice(
          (currentPage - 1) * parseInt(itemsPerPage),
          currentPage * parseInt(itemsPerPage)
        );

  const totalPages = Math.ceil(
    mostReadArticles.length / parseInt(itemsPerPage)
  );

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <ContentHeading
        title="Most Read Articles"
        desc="Previous day's most read articles"
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        handlePageChange={handlePageChange}
      />

      <div className="flex-1 overflow-y-auto" id="scrollableDiv">
        <InfiniteScroll
          dataLength={9999}
          next={() => {
            const nextDate = new Date(selectedDate);
            nextDate.setDate(selectedDate.getDate() + 1);
            setSelectedDate(nextDate);
          }}
          hasMore={enableInfiniteScroll}
          loader={""}
          style={{ overflow: "hidden" }}
          scrollableTarget="scrollableDiv"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {paginatedMostRead?.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.normalizedtitle || ""}
                thumbnail={article.thumbnail}
                description={article.description || ""}
                pageid={article.pageid?.toString() || index.toString()}
                href={article.content_urls?.desktop.page || ""}
                views={article.views || 0}
              />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default MostReadContent;
