import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [type, setType] = useState("flight");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [city, setCity] = useState("");
  const [sort, setSort] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === "hotel") {
      onSearch({ type, city, sort });
    } else {
      onSearch({ type, from, to, sort });
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-row">
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="flight">✈ Flight</option>
          <option value="bus">🚌 Bus</option>
          <option value="train">🚆 Train</option>
          <option value="hotel">🏨 Hotel</option>
        </select>

        {type === "hotel" ? (
          <input
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        ) : (
          <>
            <input
              placeholder="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
            <input
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </>
        )}

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort</option>
          <option value="price_asc">Price ↑</option>
          <option value="price_desc">Price ↓</option>
          <option value="rating_desc">Rating</option>
        </select>

        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
