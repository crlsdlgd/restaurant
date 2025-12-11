import React, { useState } from "react";
import { Paginator } from "primereact/paginator";

interface RestaurantPaginatorProps {
  totalRestaurants: number;
  setPaginationFilter: (value: string) => void;
}

export default function RestaurantPaginator({
  totalRestaurants,
  setPaginationFilter,
}: RestaurantPaginatorProps) {
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(10);

  const onPageChange = (event: any) => {
    setFirst(event.first);
    setRows(event.rows);
    const page = event.first / event.rows + 1;

    setPaginationFilter(`_page=${page}&_limit=${event.rows}`);
  };

  return (
    <div className="card">
      <Paginator
        first={first}
        rows={rows}
        totalRecords={totalRestaurants}
        rowsPerPageOptions={[5, 10]}
        onPageChange={onPageChange}
      />
    </div>
  );
}
