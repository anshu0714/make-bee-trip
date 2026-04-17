import api, { handleResponse, handleError } from "../../../services/api.client";

export const getTravelData = async (params) => {
  try {
    const res = await api.get("/travel", { params });
    return handleResponse(res);
  } catch (err) {
    handleError(err);
  }
};
