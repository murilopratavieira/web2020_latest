<template>
  <div class="hello">
    <form id="register">
      <div class="container">
        <section class="payment">
          <h2>pagamento</h2>

          <form-text
            v-model="card.number"
            label="Número do cartão"
            required="true"
            placeholder="Ex. 0123 4567 8901 2345"
            id="card-number"
          />
          <form-text
            v-model="card.name"
            label="Nome impresso no cartão"
            required="true"
            placeholder="Maria da Silva"
            id="card-number"
          />
          <form-text
            v-model="card.expiration"
            label="Validade"
            required="true"
            placeholder="10/10"
            id="card-number"
          />
          <form-text
            v-model="card.code"
            label="Cód. de Segurança"
            required="true"
            placeholder="123"
            id="card-number"
          />
          <label for="installments">Número de parcelas</label>
          <input list="installments" name="installment" id="installment" />
          <datalist id="installments">
            <option value="Edge" />
          </datalist>

          <label>
            <input
              v-model="form.subscribe"
              type="checkbox"
              checked="checked"
              name="subscribe"
              style="margin-bottom: 15px"
            />
            Salvar o cartão para compras futuras
          </label>
        </section>

        <section class="delivery">
          <h2>entrega</h2>

          <form-text
            v-model="card.number"
            label="CEP"
            required="true"
            id="card-number"
          />
          <form-text
            v-model="card.name"
            label="Bairro"
            required="true"
            placeholder="Ex. Morumbi"
            id="card-number"
          />
          <form-text
            v-model="card.expiration"
            label="Cidade"
            required="true"
            placeholder="Ex. São Paulo"
            id="card-number"
          />
          <form-text
            v-model="card.code"
            label="Estado"
            required="true"
            placeholder="Ex. SP"
            id="card-number"
          />
        </section>

        <section>
          <p>Total:</p>
          <p></p>
        </section>
      </div>
    </form>

    <Button label="Finalizar" id="conclude" />
  </div>
</template>

<script>
import TextInput from "./TextInput";
import Button from "./Button";

export default {
  name: "RegistrationForm",
  components: {
    "form-text": TextInput,
    Button,
  },
  data: function () {
    return {
      card: {
        number: null,
        name: null,
        expiration: null,
        code: null,
      },
      address: {
        city: null,
        state: null,
      },
      form: {},
    };
  },
};
</script>

<style scoped>
form {
  width: 500px;
  margin: 0 auto;
}

.container {
  padding: 10%;
}
</style>
