export const fetchVehicles = async () => {
  const res = await fetch("/api/vehicles");
  return res.json();
};