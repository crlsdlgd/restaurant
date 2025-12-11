import React from "react";

interface RestaurantPaginationProps {
  totalPages: number;
  setPaginationFilter: (paginationFilter: string) => void;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

const RestaurantPagination: React.FC<RestaurantPaginationProps> = ({
  totalPages = 1,
  setPaginationFilter,
  currentPage,
  setCurrentPage,
}: RestaurantPaginationProps) => {
  return (
    <div>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </div>
  );
};

export default RestaurantPagination;
