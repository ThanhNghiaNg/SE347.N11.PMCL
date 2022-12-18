export const hostURL = "http://localhost:5000";
export const addDotStyle = (str) => {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' ₫';
  };
