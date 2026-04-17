import { useState } from "react";
import SearchForm from "../components/SearchForm";
import TravelCard from "../components/TravelCard";
import { getTravelData } from "../services/travel.api";
import logo from "../../../assets/logo.png";
import { logError } from "../../../utils/logger.util";
import { showError } from "../../../utils/toast.util";

import "../styles/travel.scss";

const Travel = () => {
  const [data, setData] = useState([]);
  const [params, setParams] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSearch = async (params) => {
    try {
      setLoading(true);

      const res = await getTravelData(params);

      setData(res?.data || []);
      setParams(params);
    } catch (err) {
      logError(err.message);
      showError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="travel-container">
      <img className="logo" src={logo} alt="logo" />

      <SearchForm onSearch={handleSearch} />

      <div className="results">
        {loading && <p>Loading...</p>}

        {!loading && params.type && data.length === 0 && (
          <p>No results found</p>
        )}

        {!loading &&
          data.length > 0 &&
          data.map((item) => (
            <TravelCard key={item.id} item={item} type={params.type} />
          ))}
      </div>
    </main>
  );
};

export default Travel;
