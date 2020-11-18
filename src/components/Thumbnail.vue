<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <a v-bind:href="link">
      <v-img contain :src="imagem"></v-img>

      <v-card-title class="titulo">{{ nome }}</v-card-title>
    </a>

    <v-card-text>
      <div class="secao-preco">R$ {{ preco }}</div>
      <a v-bind:href="link">
        <v-btn depressed color="orange"> Mais Informações </v-btn>
      </a>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
  </v-card>
</template>

<script>
export default {
  name: "Thumbnail",
  props: ["nome", "preco", "imagem", "link"],
  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="stylus" scoped>
a {
  text-decoration: none;
}

.titulo {
  text-decoration: underline;
}

.secao-preco {
  font-size: 150%;
  padding-bottom: 8%;
}
</style>