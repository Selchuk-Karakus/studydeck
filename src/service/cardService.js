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

export const saveCard = (card) => {
  return card.id ? updateCard(card) : createCard(card);
};

export const createCard = (card) => {
  return fetch(`/api/card`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(card),
  }).then((res) => res.json());
};

export const updateCard = (card) => {
  return fetch(`/api/card/${card.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(card),
  }).then((res) => res.json());
};
