import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTravelData, getPopularSearches } from "../services/travel.api";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";

const tabs = ["flight", "bus", "train", "hotel"];

const SearchBox = () => {
  const [type, setType] = useState("flight");
  const [form, setForm] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const [data, setData] = useState([]);
  const [popular, setPopular] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const res = await getTravelData({ type });

        setData(res.data);

        const unique = new Set();

        res.data.forEach((item) => {
          if (type === "hotel") {
            if (item.city) unique.add(item.city);
          } else {
            if (item.from) unique.add(item.from);
            if (item.to) unique.add(item.to);
          }
        });

        setSuggestions([...unique]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSuggestions();
  }, [type]);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const res = await getPopularSearches();
        setPopular(res.data || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPopular();
  }, []);

  const handleChange = (key, value) => {
    setForm((prev) => {
      const newForm = { ...prev, [key]: value };
      if (key === "from") {
        const validTo = data
          .filter((item) => item.from === value)
          .map((item) => item.to);
        if (!validTo.includes(newForm.to)) {
          newForm.to = "";
        }
      }
      return newForm;
    });
  };

  const getToSuggestions = () => {
    if (!form.from) return [];

    const filtered = data
      .filter((item) => item.from === form.from)
      .map((item) => item.to);

    return [...new Set(filtered)];
  };

  const handleSearch = () => {
    if (isDisabled) return;

    const query = new URLSearchParams();
    query.append("type", type);

    if (type !== "hotel") {
      if (form.from) query.append("from", form.from);
      if (form.to) query.append("to", form.to);
    } else {
      if (form.city) query.append("city", form.city);
    }

    navigate(`/results?${query.toString()}`);
  };

  const handlePopularClick = (item) => {
    const query = new URLSearchParams();
    query.append("type", item.type);

    if (item.type !== "hotel") {
      if (item.from) query.append("from", item.from);
      if (item.to) query.append("to", item.to);
    } else {
      if (item.city) query.append("city", item.city);
    }

    navigate(`/results?${query.toString()}`);
  };

  const isDisabled =
    type === "hotel"
      ? !form.city?.trim()
      : !form.from?.trim() || !form.to?.trim();

  return (
    <div className="search-box">
      <div className="tabs">
        {tabs.map((t) => (
          <button
            key={t}
            className={type === t ? "active" : ""}
            onClick={() => {
              setType(t);
              setForm({});
            }}
            type="button"
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="fields">
        {type !== "hotel" ? (
          <>
            <Input
              placeholder="From (e.g. Delhi)"
              list="fromCities"
              value={form.from || ""}
              onChange={(e) => handleChange("from", e.target.value)}
            />

            <Input
              placeholder="To (e.g. Mumbai)"
              list="toCities"
              value={form.to || ""}
              disabled={!form.from}
              onChange={(e) => handleChange("to", e.target.value)}
            />
          </>
        ) : (
          <Input
            placeholder="City (e.g. Goa)"
            list="cities"
            value={form.city || ""}
            onChange={(e) => handleChange("city", e.target.value)}
          />
        )}

        <Button onClick={handleSearch} disabled={isDisabled}>
          Search
        </Button>
      </div>

      {type !== "hotel" && (
        <datalist id="fromCities">
          {suggestions
            .filter((s) => data.some((item) => item.from === s))
            .map((city, i) => (
              <option key={i} value={city} />
            ))}
        </datalist>
      )}

      {type !== "hotel" && (
        <datalist id="toCities">
          {getToSuggestions().map((city, i) => (
            <option key={i} value={city} />
          ))}
        </datalist>
      )}

      {type === "hotel" && (
        <datalist id="cities">
          {suggestions.map((city, i) => (
            <option key={i} value={city} />
          ))}
        </datalist>
      )}

      {popular.length > 0 && (
        <div className="popular-searches">
          <h4>🔥 Popular Searches</h4>

          <div className="popular-grid">
            {popular.map((item, i) => (
              <div
                key={i}
                className="popular-card"
                onClick={() => handlePopularClick(item)}
              >
                <div className="popular-icon">
                  {item.type === "flight" && "✈️"}
                  {item.type === "bus" && "🚌"}
                  {item.type === "train" && "🚆"}
                  {item.type === "hotel" && "🏨"}
                </div>

                <div className="popular-info">
                  {item.type === "hotel" ? (
                    <h5>{item.city || "Unknown"}</h5>
                  ) : (
                    <div className="route">
                      <h5>{item.from || "N/A"}</h5>
                      <span className="arrow">→</span>
                      <h5>{item.to || "N/A"}</h5>
                    </div>
                  )}

                  <p className="tagline">
                    🔥 {item.count ? `${item.count} searches` : "Trending"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
