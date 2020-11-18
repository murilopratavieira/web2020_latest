<template>
  <div class="cursor-deslizante">
    <div class="tipo">
      <label>
        <strong>{{ tipo }}</strong>
      </label>
    </div>
    <!-- 
      Definimos um cursor com valores fornecidos pelo props opcoes.
      O número de opções determina o tamanho do intervalo: 0 é o valor
      mínimo para a indexação das opções e opcoes.length() - 1 é o
      maior valor permitido. Quando houver mudança no cursor, chamamos
      a função aoAtualizar como resposta.
    -->
    <div class="cursor">
      <input
        type="range"
        min="0"
        :max="fimDoIntervalo"
        step="1"
        @change="aoAtualizar"
        :value="valorNoIntervalo"
      />
    </div>
    <div class="valor-escolhido">{{ opcoes[valorNoIntervalo] }}</div>
    <v-divider class="mx-4"></v-divider>
  </div>
</template>

<script>
export default {
  name: "CursorDeslizante",
  props: ["tipo", "opcoes"],
  data() {
    return {
      valorNoIntervalo: 0,
    };
  },
  mounted() {
    // Inicializa o cursor com a primeira opção disponível
    this.atualizar(0);
  },
  methods: {
    // Quando houver mudanças no cursor, reagimos ao evento e emitimos um sinal contendo a opção selecionada
    aoAtualizar(evento) {
      this.atualizar(evento.target.value);
    },
    atualizar(novoValor) {
      this.valorNoIntervalo = novoValor;
      let valorEscolhido = this.opcoes[this.valorNoIntervalo];
      this.$emit("change", valorEscolhido);
    },
  },
  computed: {
    /* 
    Retorna o maior valor permitido para o cursor de acordo
    com o número de opções fornecidas. Indexação começa em zero
    */
    fimDoIntervalo() {
      return this.opcoes.length - 1;
    },
  },
};
</script>

<style scoped>
.cursor-deslizante {
  padding: 10%;
  margin-right: 40%;
}

.tipo {
  margin-bottom: 5%;
}

.valor-escolhido {
  margin: 7%;
}
</style>
