<template>
  <div class="hello">
    <form
      id="register"
      @submit="checkForm"
      action="https://vuejs.org/"
      method="post"
    >
      <div class="container">
        <h2>cadastre-se</h2>

        <p>Preencha o formulário abaixo</p>

        <label for="email">E-mail:</label>
        <input
          v-model="form.mail"
          type="email"
          id="mail"
          name="mail"
          placeholder="Ex: mariadasilva@gmail.com"
          required="true"
        />

        <label for="password">Senha:</label>
        <input
          v-model="form.pass"
          type="password"
          id="pass"
          name="pass"
          placeholder=""
          required="true"
          @change="validatePassword($event)"
        />

        <label for="pass-repeat">Repita a senha:</label>
        <input
          v-model="form.pass_rep"
          type="password"
          id="confirm_pass"
          name="confirm_pass"
          placeholder=""
          required="true"
          @keyup="validatePassword($event)"
        />

        <label for="id">CPF:</label>
        <input
          v-model="form.id"
          type="text"
          id="id"
          name="id"
          placeholder="Ex: 123.456.789-00"
          pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
          title="Número não confere com o padrão."
          required="true"
        />

        <label for="name">Nome e sobrenome:</label>
        <input
          v-model="form.name"
          type="text"
          id="name"
          name="name"
          placeholder="Digite seu nome"
          pattern="[a-zA-Z]+$"
          required="true"
        />

        <label for="birth">Data de nascimento:</label>
        <input
          v-model="form.birth"
          type="text"
          id="birth"
          name="birth"
          placeholder="Ex: 01/01/1999"
          required="true"
        />

        <label for="gender">Sexo:</label>
        <input
          v-model="form.gender"
          type="radio"
          id="gender"
          name="gender"
          value="male"
        />masculino
        <input
          v-model="form.gender"
          type="radio"
          id="gender"
          name="gender"
          value="female"
        />feminino <br /><br />

        <label for="phone">Telefone:</label>
        <input
          v-model="form.phone"
          type="tel"
          id="phone"
          name="phone"
          placeholder="Ex: (99) 12345-6789"
          pattern="\([0-9]{2}\)[\s][0-9]{5}-[0-9]{4}"
          title="Número não confere com o padrão."
          required="false"
        />

        <label>
          <input
            v-model="form.subscribe"
            type="checkbox"
            checked="checked"
            name="subscribe"
            style="margin-bottom: 15px"
          />
          Desejo receber ofertas por e-mail
        </label>

        <p>
          Ao continuar, você concorda com a nossa
          <a href="#">política de privacidade</a>.
        </p>

        <button type="submit" class="registerbtn">Finalizar cadastro</button>
      </div>
    </form>

    <p class="signin">
      <span>Já tem um cadastro? </span>
      <a href="/entrar">entrar</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "RegistrationForm",
  data: function () {
    return {
      form: {
        mail: null,
        pass: null,
        pass_rep: null,
        id: null,
        name: null,
        birth: null,
        gender: null,
        phone: null,
        subscribe: false,
      },
    };
  },
  methods: {
    validatePassword: function (event) {
      if (this.pass !== this.pass_rep) {
        document
          .getElementById("confirm_pass")
          .setCustomValidity("Senhas diferentes!");
      } else {
        document.getElementById("confirm_pass").setCustomValidity("");
      }
    },
  },
};
</script>

<style scoped>
form {
  width: 500px;
  margin: 0 auto;
}

.container {
  padding: 10px;
}

h2 {
  text-align: center;
}

label {
  display: block;
  text-transform: lowercase;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
input[type="tel"]:focus {
  background-color: #ddd;
  outline: none;
}

::placeholder {
  color: #A5A8A9;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: red;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: red;
}

button {
  background-color: #f96900;
  color: white;
  padding: 14px 20px;
  margin: 8px auto;
  border: none;
  cursor: pointer;
  width: 50%;
  opacity: 0.9;
  display: block;
  font-weight: bold;
  text-transform: lowercase;
}

button:hover {
  opacity: 1;
}
</style>
