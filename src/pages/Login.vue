<template>
  <form action="" @submit.prevent="attempLogin()">
    <div v-if="error"> Hatalı Giriş! Giriş bilgilerinizi kontrol edip tekrar deneyiniz. </div>
    <div><input name="username" v-model="params.username"></div>
    <div><input type="password" name="password" v-model="params.password"></div>
    <div><input type="submit" value="GİRİŞ YAP" :disabled="!isValid"></div>
  </form>
</template>

<script>
  import axios from 'axios';
  import { host } from '@/util/config';
  import qs from 'qs';
  /* eslint-disable */
  const authTokenRegex = /input type="hidden" name="authenticityToken" value="([a-zA-Z0-9]+)"/;

  export default {
    data() {
      return {
        loading: true,
        error: false,
        params: {
          username: '',
          password: '',
        },
      };
    },
    computed: {
      isValid(){
        return this.params.username !== '' && this.params.password !== '';
      }
    },
    methods: {
      attempLogin() {
        this.error = false;
        this.loading = true;
        axios.post(`${host}/secureovp/authenticate`, qs.stringify(this.params), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          fetchType: 'CORS',
          withCredentials: true,
        }).then(response => {
          this.loading = false;
          if (response.data === 'success') {
            this.$store.commit({type: 'updateUser', user: { username: this.params.username }, });
            this.$router.push({name: 'Varsayimlar'});
          } else {
            this.error = true;
          }
        }).catch(() => {
          this.loading = false;
        });
      },
    },
    created() {

    },
  };

</script>

