<template>
  <div id="app">
    <ValidationObserver ref="observer" v-slot="{ valid, invalid, handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit)">
      {{ valid }}
      <p>
        <label for="password">Current Password</label>
        <ValidationProvider v-slot="{ errors, valid }" name="パスワード" rules="min:8|required">
        <input id="password" v-model="password" />
        {{ errors }}
        {{ valid }}
        </ValidationProvider>
      </p>
      <p>
        <label for="new_password">New Password</label>
        <ValidationProvider v-slot="{ errors, valid }" name="新しいパスワード" rules="min:8|required">
        <input id="new_password" v-model="new_password" />
        {{ errors }}
        {{ valid }}
        </ValidationProvider>
      </p>
      <button :disabled="invalid" type="submit">send</button>
    </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { required, min, confirmed } from 'vee-validate/dist/rules'
import { localize, ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja.json'
extend('required', required)
extend('min', min)
extend('confirmed', confirmed)
localize(ja)
export default {
  name: 'App',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      password: null,
      new_password: null
    }
  },
  methods: {
    onSubmit(e) {
      console.log('success', e)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
