const getCards = () => {
  return fetch(`/api/card`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
};

export default getCards;
