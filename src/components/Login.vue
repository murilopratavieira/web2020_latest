<template>
  <div class="hello">
    <form
      id="register"
      @submit="checkForm"
      action="https://vuejs.org/"
      method="post"
    >
      <div class="container">
        <h2>Entrar</h2>
        <br />
        <label for="email">E-mail:</label>
        <input
          v-model="form.mail"
          type="email"
          id="mail"
          name="mail"
          placeholder="Ex: nome@gmail.com"
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

        <button type="submit" class="registerbtn">Entrar</button>
      </div>
    </form>
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
      },
    };
  },
  methods: {
    validatePassword: function (event) {},
    // nada a validar; a validação
    // é feita pelo post
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
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus {
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
