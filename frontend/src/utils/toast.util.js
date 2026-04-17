import toast from "react-hot-toast";

export const showSuccess = (message = "Success") => {
  toast.success(message, {
    duration: 3000,
    style: {
      borderRadius: "8px",
      background: "#16a34a",
      color: "#fff",
    },
  });
};

export const showError = (message = "Something went wrong") => {
  toast.error(message, {
    duration: 4000,
    style: {
      borderRadius: "8px",
      background: "#dc2626",
      color: "#fff",
    },
  });
};

export const showLoading = (message = "Loading...") => {
  return toast.loading(message);
};

export const dismissToast = (id) => {
  toast.dismiss(id);
};
