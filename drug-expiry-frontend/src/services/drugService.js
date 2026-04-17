const BASE_URL = "http://localhost:5000/api/drugs";

export const getDrugs = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addDrug = async (drug) => {
  const res = await fetch(`${BASE_URL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(drug),
  });

  return res.json();
};
