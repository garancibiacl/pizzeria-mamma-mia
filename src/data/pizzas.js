// Hito 3 — Dataset de pizzas y carrito
export const pizzas = [
  {
    id: 1,
    name: "Napolitana",
    price: 5950,
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
  },
  {
    id: 2,
    name: "Española",
    price: 6950,
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
  },
  {
    id: 3,
    name: "Pepperoni",
    price: 6950,
    ingredients: ["mozzarella", "pepperoni", "orégano"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
  },
  {
    id: 4,
    name: "Veggie",
    price: 6550,
    ingredients: ["mozzarella", "pimentón", "champiñones", "aceitunas"],
    img: "https://images.unsplash.com/photo-1541745537413-b804c9f6f718?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Cuatro Quesos",
    price: 7250,
    ingredients: ["mozzarella", "provolone", "parmesano", "gorgonzola"],
    img: "https://images.unsplash.com/photo-1548365328-9f547fb0953c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Hawaiana",
    price: 6450,
    ingredients: ["mozzarella", "piña", "jamón"],
    img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1200&auto=format&fit=crop"
  }
];

export const pizzaCart = [
  { id: 1, name: "Napolitana", price: 5950, img: pizzas[0].img, count: 1 },
  { id: 3, name: "Pepperoni",  price: 6950, img: pizzas[2].img, count: 2 }
];
