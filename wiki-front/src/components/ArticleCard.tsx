import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { saveReadStatus, getReadStatus } from "../lib/storage";
import { EyeIcon } from "lucide-react";

type ArticleCardProps = {
  title: string;
  thumbnail?: { source: string };
  description: string;
  pageid: string;
  href: string;
  views?: number;
};

const ArticleCard = ({
  title = "Title",
  thumbnail,
  description,
  pageid,
  href,
  views,
}: ArticleCardProps) => {
  const [read, setIsRead] = useState(false);

  useEffect(() => {
    const isRead = getReadStatus(pageid);
    setIsRead(isRead);
  }, [pageid]);

  const handleClick = () => {
    window.open(href, "_blank");
    saveReadStatus(pageid);
    setIsRead(true);
  };

  return (
    <Card
      className="group border-primary transition-all hover:scale-105 cursor-pointer flex flex-col article-card"
      onClick={handleClick}
    >
      <img
        src={
          thumbnail?.source ||
          "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
        }
        alt={`Article ${pageid}`}
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded-t-xl"
      />

      <CardContent className="p-4 bg-background rounded-b-xl relative flex-1 flex-col flex">
        {read && (
          <div className="absolute top-2 right-2  text-purple-400 text-xs">
            Read
          </div>
        )}

        <h3 className="text-lg font-semibold mb-2 text-primary text-wrap">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-2">{description}</p>

        {views && (
          <div className="flex items-center text-muted-foreground text-sm mt-auto">
            <EyeIcon className="w-4 h-4 mr-2" />
            <span>{views}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
