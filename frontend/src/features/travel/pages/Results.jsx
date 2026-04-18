import { useSearchParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";

import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";

import TravelCard from "../components/TravelCard";
import FiltersSidebar from "../components/FiltersSidebar";

import { getTravelData } from "../services/travel.api";
import { showError } from "../../../utils/toast.util";

const Results = () => {
  const [params] = useSearchParams();

  const state = useMemo(
    () => ({
      type: params.get("type") || "flight",
      from: params.get("from") || "",
      to: params.get("to") || "",
      city: params.get("city") || "",
    }),
    [params],
  );

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getTravelData(state);
        setData(res.data);
      } catch (err) {
        showError(err.message);
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
      showError(err.message);
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

          {!loading && data.length === 0 && (
            <div className="empty-state">
              <h3>No Results Found</h3>
              <p>Try changing filters or search again</p>
            </div>
          )}

          {loading ? (
            <div className="skeleton-grid">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="skeleton-card" />
              ))}
            </div>
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
