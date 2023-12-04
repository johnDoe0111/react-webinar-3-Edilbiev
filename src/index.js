import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app.js";
import Store from "./store.js";
import { generateCode } from "./utils.js";

const store = new Store({
  list: [
    {
      code: generateCode(),
      title: "Название товара",
      price: 100.0,
      quantity: 0,
      totalPrice: 0,
    },
    {
      code: generateCode(),
      title: "Книга про React",
      price: 770,
      quantity: 0,
      totalPrice: 0,
    },
    {
      code: generateCode(),
      title: "Конфета",
      price: 33,
      quantity: 0,
      totalPrice: 0,
    },
    {
      code: generateCode(),
      title: "Трактор",
      price: 7955320,
      quantity: 0,
      totalPrice: 0,
    },
    {
      code: generateCode(),
      title: "Телефон iPhone XIXV",
      price: 120000,
      quantity: 0,
      totalPrice: 0,
    },
    {
      code: generateCode(),
      title: "Карандаши цветные",
      price: 111,
      quantity: 0,
      totalPrice: 0,
    },
    {
      code: generateCode(),
      title: "Товар сюрприз",
      price: 0,
      quantity: 0,
      totalPrice: 0,
    },
  ],
  basketList: [],
});

const root = createRoot(document.getElementById("root"));

store.subscribe(() => {
  root.render(<App store={store} />);
});

// Первый рендер приложения
root.render(<App store={store} />);
