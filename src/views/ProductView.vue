<template>
  <div class="home">
    <Product :images="product.images" />

    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>

    <div class="order">
      <table style="width: 100%">
        <tr>
          <th>Qtd.</th>
          <th>Preço</th>
        </tr>
        <th>
          <div>
            <span>-</span>
            <input v-model="product.quantity" type="number" name="" min="1" />
            <span>+</span>
          </div>
        </th>
        <th>R$ {{ product.quantity * product.price }}</th>
      </table>

      <a class="button" href="/carrinho"><button>Comprar</button></a>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product";

export default {
  name: "Home",
  data: () => {
    return {
      product: {
        images: ["moletom.png", "moletom2.png"],
        name: "Moletom Canguru Atacado",
        description:
          "Os moletons são feitas em ótima qualidade e esse produto é apenas para compras em atacado",
        price: 110.99,
        quantity: 1,
      },
    };
  },
  components: {
    Product,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  max-width: 768px;
  overflow: hidden;
  margin: 0 auto;
}

h1 {
  padding: 16px;
  margin: 16px 0 0;
  font-family: Galada, arial;
  font-size: 3rem;
}
p {
  padding: 16px;
  margin: 0;
  font-family: Abel, arial;
  font-size: 1.3rem;
}

.title {
  color: black;
}

.quantity-text {
  display: flex;
}

.order {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px;

  .product-price {
    font-family: Galada, arial;
    font-size: 2rem;
    margin-right: 32px;
    font-size: 24px;
  }

  button {
    padding: 6px 32px 0;
    color: #fefefe;
    background-color: #2c3e50;
    font-family: Galada, arial;
    font-size: 20px;
    border: 1px solid #fefefe;
    border-radius: 8px;
    cursor: pointer;
  }
}
</style>
