import React from "react";
import { ChevronRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "./ui/pagination";

type ContentHeadingProps = {
  title: string;
  desc: string;
  handlePageChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
  itemsPerPage: string;
};

const ContentHeading = ({
  title,
  desc,
  handlePageChange,
  currentPage,
  totalPages,
  itemsPerPage,
}: ContentHeadingProps) => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div>
        <h2 className="text-xl font-normal text-primary flex items-center">
          {title}
          <ChevronRight className="w-5 h-5 text-primary inline-block ml-2" />
        </h2>
        <p className="text-muted-foreground">{desc}</p>
      </div>

      {itemsPerPage !== "All" && (
        <div className="flex justify-center ">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={`text-primary ${
                    currentPage === 1
                      ? "text-muted-foreground pointer-events-none"
                      : ""
                  }`}
                />
              </PaginationItem>
              {/* {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <PaginationItem key={page} className="hidden md:block">
                      <PaginationLink
                        href="#"
                        isActive={page === currentPage}
                        onClick={() => handlePageChange(page)}
                        className={`${
                          page === currentPage
                            ? "bg-primary text-primary-foreground"
                            : "text-primary"
                        }`}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )} */}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  aria-disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={`text-primary ${
                    currentPage === totalPages
                      ? "text-muted-foreground pointer-events-none"
                      : ""
                  }`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default ContentHeading;
