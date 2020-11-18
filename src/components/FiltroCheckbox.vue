<template>
  <div class="checkbox">
    <div class="tipo">
      <label>
        <strong>{{ tipo }}</strong>
      </label>
    </div>
    <!-- Lista dinâmica de checkboxes de acordo com o número de opções recebidas -->
    <div v-for="(opcao, indice) in opcoes" :key="indice">
      <input
        type="checkbox"
        :id="opcao.nome"
        v-model="opcao.selecionado"
        @change="atualizarOpcoes"
      />
      <label :for="opcao.nome">{{ opcao.nome }}</label>
    </div>
    <v-divider class="mx-4"></v-divider>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: ["tipo", "opcoes"],
  data() {
    return {
      opcoesFiltradas: null,
    };
  },
  methods: {
    // Quando houver mudanças em algum checkbox, emitimos um sinal contendo as opções selecionadas
    atualizarOpcoes() {
      this.opcoesSelecionadas();
    },
    opcoesSelecionadas() {
      let filtradas = this.opcoes
        .filter((opcao) => opcao.selecionado)
        .map((nome) => nome.nome);
      this.$emit("change", filtradas);
    },
  },
};
</script>

<style scoped>
.tipo {
  margin-bottom: 5%;
}

.checkbox {
  padding: 10%;
  margin-right: 40%;
}
</style>
