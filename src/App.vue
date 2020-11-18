<template>
  <v-app>
    <!-- Must have the app property -->
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="#f96900"
      dark
    >
      <v-toolbar-title style="width: 350px">
        <a href="/" class="white--text" style="text-decoration: none"
          ><v-icon>mdi-alpha-b-circle</v-icon>&nbsp;BeUni</a
        >
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Buscar"
        class="hidden-sm-and-down pl-10 ml-4"
      />
      <v-spacer />
      <v-btn v-on="on" href="/carrinho" color="orange">
        Carrinho
        <v-badge content="1" value="1" color="red">
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
      <v-btn href="/registrar" color="orange">
        Registrar
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-bottom-navigation :value="activeBtn" color="red" horizontal>
        <a
          v-for="(categoria, index) in categorias"
          :key="index"
          href="/produtos"
          class="v-btn"
        >
          <span>{{ categoria.title }}</span>
        </a>

        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">
              <span>Universidades</span>
            </v-btn>
          </template>
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item
              v-for="(universidade, index) in universidades"
              :key="index"
              href="/produtos"
            >
              <v-list-item-title>{{ universidade.title }}</v-list-item-title>
            </v-list-item>
          </v-card>
        </v-menu>
      </v-bottom-navigation>
    </v-content>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      categorias: [
        { title: "Moletons" },
        { title: "Camisetas" },
        { title: "Shorts" },
        { title: "Brindes" },
      ],
      universidades: [{ title: "CAASO" }, { title: "Federal" }],
      activeBtn: 1,
    };
  },
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}

.v-btn {
  margin-right: 10px;
}
</style>
