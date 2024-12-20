export const getAuthToken = () => sessionStorage.getItem("authToken");
export const moveToOrderForm = () => {
  const section = document.getElementById("orderForm");
  section?.scrollIntoView({ behavior: "smooth" });
};
