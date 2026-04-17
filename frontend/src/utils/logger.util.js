const isDev = import.meta.env.MODE === "development";

export const logInfo = (...args) => {
  if (isDev) {
    console.log("ℹ️ INFO:", ...args);
  }
};

export const logWarn = (...args) => {
  if (isDev) {
    console.warn("⚠️ WARN:", ...args);
  }
};

export const logError = (...args) => {
  if (isDev) {
    console.error("❌ ERROR:", ...args);
  }
};