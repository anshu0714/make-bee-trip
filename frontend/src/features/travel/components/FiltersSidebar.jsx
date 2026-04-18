import { useState } from "react";

const FiltersSidebar = ({ onFilter }) => {
  const [filters, setFilters] = useState({});

  const updateFilter = (key, value) => {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
    onFilter(updated);
  };

  return (
    <aside className="filters">
      <h3>Filters</h3>

      <div className="filter-group">
        <label>Min Price</label>
        <input
          type="number"
          onChange={(e) => updateFilter("minPrice", e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label>Max Price</label>
        <input
          type="number"
          onChange={(e) => updateFilter("maxPrice", e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label>Sort</label>
        <select onChange={(e) => updateFilter("sort", e.target.value)}>
          <option value="">Select</option>
          <option value="price_asc">Price Low → High</option>
          <option value="price_desc">Price High → Low</option>
        </select>
      </div>
    </aside>
  );
};

export default FiltersSidebar;
