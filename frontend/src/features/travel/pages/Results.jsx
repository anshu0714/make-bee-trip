import { useLocation } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";

import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";

import TravelCard from "../components/TravelCard";
import FiltersSidebar from "../components/FiltersSidebar";

import { getTravelData } from "../services/travel.api";

const Results = () => {
  const location = useLocation();
  const state = useMemo(
    () => location.state || { type: "flight" },
    [location.state],
  );

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await getTravelData(state);
        setData(res.data);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [state]);

  const handleFilter = async (filters) => {
    try {
      setLoading(true);

      const res = await getTravelData({
        ...state,
        ...filters,
      });

      setData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="results-layout">
        {/* LEFT SIDEBAR */}
        <FiltersSidebar onFilter={handleFilter} />

        {/* RIGHT CONTENT */}
        <div className="results-content">
          <h2>
            {state.type.toUpperCase()} Results ({data.length})
          </h2>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="results-grid">
              {data.map((item) => (
                <TravelCard key={item.id} item={item} type={state.type} />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Results;
