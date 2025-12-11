import React, { useState } from "react";

interface RestaurantFiltersProps {
  setSearchFilters: (filters: string) => void;
}

const RestaurantFilter: React.FC<RestaurantFiltersProps> = ({
  setSearchFilters,
}: RestaurantFiltersProps) => {
  const [columnFilter, setColumnFilter] = useState<string>("name");
  const [criteriaFilter, setCriteriaFilter] = useState<string>("contains");
  const [valueFilter, setValueFilter] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("name");
  const [ascDesc, setAscDesc] = useState<string>("asc");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let query = "";

    if (valueFilter) {
      query += `${columnFilter}_${criteriaFilter}=${valueFilter}&`;
    }
    query += `sort=${sortBy}&order=${ascDesc}`;
    setSearchFilters(query);
  };

  const handleReset = () => {
    setColumnFilter("name");
    setCriteriaFilter("contains");
    setValueFilter("");
    setSortBy("name");
    setAscDesc("asc");
  };

  return (
    <div className="filter-conatiner">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="filter-wrapper">
          <div className="filter-input">
            <label htmlFor="column">Columna</label>
            <select
              name="column"
              id="column"
              value={columnFilter}
              onChange={(e) => setColumnFilter(e.target.value)}
            >
              <option value="name">Name</option>
              <option value="address">Address</option>
              <option value="postcode">Postcode</option>
              <option value="rating">Rating</option>
              <option value="typeOfFood">Type of food</option>
            </select>
          </div>
          <div className="filter-input">
            <label htmlFor="criteria">Criterio</label>
            <select
              name="criteria"
              id="criteria"
              value={criteriaFilter}
              onChange={(e) => setCriteriaFilter(e.target.value)}
            >
              <option value="contains">Contiene</option>
              <option value="notContains">No contiene</option>
              <option value="equal">Igual</option>
              <option value="notEqual">No igual</option>
              <option value="startsWith">Empieza con</option>
              <option value="endsWith">Termina con</option>
            </select>
          </div>
          <div className="filter-input">
            <label htmlFor="value">Valor</label>
            <input
              type="text"
              name="value"
              id="value"
              value={valueFilter}
              onChange={(e) => setValueFilter(e.target.value)}
            />
          </div>
        </div>
        <div className="filter-wrapper">
          <div className="filter-input">
            <label htmlFor="sortBy">Ordernar por</label>
            <select
              name="sortBy"
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Name</option>
              <option value="address">Address</option>
              <option value="postcode">Postcode</option>
              <option value="rating">Rating</option>
              <option value="typeOfFood">Type of food</option>
            </select>
          </div>
          <div className="filter-input">
            <label htmlFor="ascDesc">Orden</label>
            <select
              name="ascDesc"
              id="ascDesc"
              value={ascDesc}
              onChange={(e) => setAscDesc(e.target.value)}
            >
              <option value="asc">Ascendente</option>
              <option value="desc">Descendente</option>
            </select>
          </div>
        </div>
        <div className="filter-wrapper">
          <button
            type="reset"
            className="reset-filter-form-button"
            onClick={handleReset}
          >
            Limpiar filtros
          </button>
          <button type="submit" className="submit-filter-form-button">
            Aplicar filtros
          </button>
        </div>
      </form>
    </div>
  );
};

export default RestaurantFilter;
