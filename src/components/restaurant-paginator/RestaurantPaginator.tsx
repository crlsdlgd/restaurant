import React, { useState } from "react";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";

interface RestaurantPaginatorProps {
  totalRestaurants: number;
}

export default function RestaurantPaginator({
  totalRestaurants,
}: RestaurantPaginatorProps) {
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(10);

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  return (
    <div className="card">
      <Paginator
        first={first}
        rows={rows}
        totalRecords={totalRestaurants}
        // rowsPerPageOptions={[10, 20, 30]}
        onPageChange={onPageChange}
      />
    </div>
  );
}
