import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  page: number;
  limit: number;
  total: number;
  preLink: string;
  postLink: string;
}

const PaginationSelector: React.FC<PaginationProps> = ({
  page,
  limit,
  total,
  preLink,
  postLink,
}) => {
  const totalPages = Math.ceil(total / limit);
  if (totalPages <= 1) return null;

  const prePage = Math.max(1, page - 1);
  const postPage = Math.min(totalPages, page + 1);
  const preLinkDisabled = page <= 1;
  const postLinkDisabled = page >= totalPages;

  const generatePageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (page > 3) pages.push(1, "...");

    const startPage = Math.max(2, page - 1);
    const endPage = Math.min(totalPages - 1, page + 1);
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (page < totalPages - 2) pages.push("...", totalPages);

    return pages;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={!preLinkDisabled ? `${preLink}/${prePage}` : "#"}
            aria-disabled={preLinkDisabled}
          />
        </PaginationItem>

        {generatePageNumbers().map((pageNumber, index) => (
          <PaginationItem key={index}>
            {typeof pageNumber === "number" ? (
              <PaginationLink
                href={`${preLink}/${pageNumber}`}
                isActive={pageNumber === page}
              >
                {pageNumber}
              </PaginationLink>
            ) : (
              <PaginationEllipsis />
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href={!postLinkDisabled ? `${postLink}/${postPage}` : "#"}
            aria-disabled={postLinkDisabled}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSelector;