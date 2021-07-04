<template>
  <div id="app">
    <ValidationObserver ref="observer" v-slot="{ invalid, handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit)">
      <p>
        <label for="curPasswd">Current Password</label>
        <ValidationProvider v-slot="{ errors, valid }" name="現在のパスワード" rules="min:8|required">
        <input id="curPasswd" v-model="currentPassword" />
        {{ errors }}
        {{ valid }}
        </ValidationProvider>
      </p>
      <p>
        <label for="newPasswd">New Password</label>
        <ValidationProvider v-slot="{ errors, valid }" name="新しいパスワード" rules="min:8|required">
        <input id="newPasswd" name="newPassword" v-model="newPassword" />
        {{ errors }}
        {{ valid }}
        </ValidationProvider>
      </p>
      <p>
        <label for="confirmPasswd">confirm Password</label>
        <ValidationProvider v-slot="{ errors, valid }" name="確認用パスワード" rules="min:8|required|confirmed:newPassword">
        <input id="confirmPasswd" v-model="confirmPassword" data-vv-as="password" />
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
      currentPassword: null,
      newPassword: null,
      confirmPassword: null
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
