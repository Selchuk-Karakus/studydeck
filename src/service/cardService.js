export const getCards = () => {
  return fetch(`/api/card`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
};

export const destroyCard = (id) => {
  return fetch(`/api/card/${id}`, {
    method: "DELETE",
  });
};
