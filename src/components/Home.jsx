import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";

function Home() {
  return (
    <main>
      <Header />
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold mb-4">Nuestra selección</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CardPizza
            name="Napolitana"
            price={5950}
            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
          />
          <CardPizza
            name="Española"
            price={6950}
            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
          />
          <CardPizza
            name="Pepperoni"
            price={6950}
            ingredients={["mozzarella", "pepperoni", "orégano"]}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
