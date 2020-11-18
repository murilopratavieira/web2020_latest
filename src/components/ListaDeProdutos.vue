<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <template v-for="(detalhesDoProduto, indice) in produtos">
        <v-col :key="indice">
          <Thumbnail
            :nome="detalhesDoProduto.nome"
            :preco="detalhesDoProduto.preco"
            :imagem="detalhesDoProduto.imagem"
            :link="detalhesDoProduto.link"
          />
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>
<script>
import Thumbnail from "./Thumbnail";

export default {
  name: "ListaDeProdutos",
  components: {
    Thumbnail,
  },
  data() {
    return {
      produtos: [
        {
          nome: "Moletom com bordado personalizável TESTANDO TESTANDO RESIZE",
          preco: 25,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2020/08/miniatura-moletom-sacim-PB-frente.png",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },
        {
          nome: "Moletom com bordado personalizável",
          preco: 180,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2020/08/miniatura-moletom-sacim-PB-frente.png",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },
        {
          nome: "Moletom com bordado personalizável",
          preco: 95,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2020/08/miniatura-moletom-sacim-PB-frente.png",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },
        {
          nome: "Moletom com bordado personalizável",
          preco: 18,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2020/08/miniatura-moletom-sacim-PB-frente.png",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },
        {
          nome: "Moletom com bordado personalizável",
          preco: 110,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2020/08/miniatura-moletom-sacim-PB-frente.png",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },
        {
          nome: "Moletom com bordado personalizável",
          preco: 30,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2020/08/miniatura-moletom-sacim-PB-frente.png",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },
        {
          nome: "Moletom com bordado personalizável",
          preco: 45,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2020/08/miniatura-moletom-sacim-PB-frente.png",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },
        {
          nome: "Moletom com bordado personalizável",
          preco: 180,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2020/08/miniatura-moletom-sacim-PB-frente.png",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },
        {
          nome: "Moletom com bordado personalizável",
          preco: 20,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2020/08/miniatura-moletom-sacim-PB-frente.png",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },
        {
          nome: "Moletom com bordado personalizável",
          preco: 180,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2020/08/miniatura-moletom-sacim-PB-frente.png",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },
        {
          nome: "Moletom com bordado personalizável",
          preco: 35,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2020/08/miniatura-moletom-sacim-PB-frente.png",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },
        {
          nome: "Moletom com bordado personalizável",
          preco: 110,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2020/08/miniatura-moletom-sacim-PB-frente.png",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },
      ],
    };
  },
};
</script>

<style scoped>
p {
  color: rgb(0, 0, 0);
}

a {
  text-decoration: none;
}

/*
#lista-de-produtos {
  font-size: 150%;
  font-family: sans-serif;
  display: grid;
  grid-gap: 15px;
  //grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-columns: auto auto auto;
  text-align: center;
}

#lista-de-produtos div {
  line-height: 13px;
}*/

.imagem-produto {
  width: 100%;
  height: 100%;
}

.preco p:nth-child(2) {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
}

.preco {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.preco p:nth-child(2) {
  color: #40d2a3;
  font-weight: 600;
}

.botao {
  background-color: rgb(249, 105, 0);
  opacity: 0.9;
}

.botao:hover {
  opacity: 1;
}
</style>