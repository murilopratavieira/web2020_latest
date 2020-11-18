<template>
  <v-main>
    <produtcs tipo="Destaques"></produtcs>
    <produtcs tipo="Promoções"></produtcs>
    <produtcs tipo="Categorias"></produtcs>
  </v-main>
</template>

<script>
import produtcs from "./ProductsShow.vue";

export default {
  components: { produtcs },
  data() {
    return {};
  },
};
</script>
