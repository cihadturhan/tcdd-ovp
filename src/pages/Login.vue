<template>
  <form action="" @submit="attempLogin">
    <div><input name="username"></div>
    <div><input type="password" name="password"></div>
    <div><input type="button" value="GİRİŞ YAP"></div>
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
        params: {
          username: '',
          password: '',
        },
      };
    },
    methods: {
      attempLogin() {

        axios.post(`${host}/secureovp/authenticate`, qs.stringify({
          username: 'tcdd',
          password: '1',
        }), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }).then(() => {
          axios.get(`${host}/application/getLastOVP`, {withCredentials: true}).then( ovpData => console.log(ovpData));
          axios.post(`${host}/application/addOVP`,  qs.stringify({
            'ovp.JSON': '{test: 1}',
          }), {withCredentials: true})
        });
      },
    },
    created() {
      this.attempLogin();
      /* axios.get(`${host}/secure/login`, { headers: { Accept: 'text/html' } }).then((response) => {
        this.params.authenticityToken = authTokenRegex.exec(response)[1];
      }); */
    },
  };

</script>

