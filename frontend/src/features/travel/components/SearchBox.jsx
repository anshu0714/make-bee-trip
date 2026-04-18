import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";

const tabs = ["flight", "bus", "train", "hotel"];

const SearchBox = () => {
  const [type, setType] = useState("flight");
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    navigate("/results", {
      state: { type, ...form },
    });
  };

  return (
    <div className="search-box">
      <div className="tabs">
        {tabs.map((t) => (
          <button
            key={t}
            className={type === t ? "active" : ""}
            onClick={() => setType(t)}
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
              onChange={(e) => handleChange("from", e.target.value)}
            />
            <Input
              placeholder="To (e.g. Mumbai)"
              onChange={(e) => handleChange("to", e.target.value)}
            />
          </>
        ) : (
          <Input
            placeholder="City (e.g. Goa)"
            onChange={(e) => handleChange("city", e.target.value)}
          />
        )}

        <Button onClick={handleSearch}>Search</Button>
      </div>
    </div>
  );
};

export default SearchBox;
