<template>
  <div class="autocenter">
    <div class="form-container">
      <div  v-if="firstLoading">
        Yükleniyor...
      </div>

      <form action="" @submit.prevent="attempLogin()"  v-else>
        <div class="logo-container">
          <img src="../assets/logo.svg">
        </div>
        <h3 class="lead brand">
          <span>TCDD TAŞIMACILIK A.Ş. GENEL MÜDÜRLÜĞÜ</span> <br/>
          <span>ORTA VADELİ PLAN ÇALIŞMASI</span>
        </h3>

        <div v-if="error"> Hatalı Giriş! Giriş bilgilerinizi kontrol edip tekrar deneyiniz. </div>
        <div><input name="username" v-model="params.username"/></div>
        <div><input type="password" name="password" v-model="params.password"/></div>
        <div><input type="submit" value="GİRİŞ YAP" :disabled="!isValid"/></div>
      </form>
    </div>
  </div>
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
        firstLoading: true,
        error: false,
        params: {
          username: '',
          password: '',
        },
      };
    },
    computed: {
      isValid() {
        return this.params.username !== '' && this.params.password !== '';
      },
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
            this.$store.commit({ type: 'updateUser', user: { username: this.params.username }, });
            this.$router.push({ name: 'Anasayfa' });
          } else {
            this.error = true;
          }
        }).catch(() => {
          this.loading = false;
        });
      },
    },
    created() {
      axios.post(`${host}/secureovp/checkLoginForOvp`, qs.stringify(this.params), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        fetchType: 'CORS',
        withCredentials: true,
      }).then(response => {
        this.firstLoading = false;
        if (response.data !== 'fail') {
          this.$store.commit({ type: 'updateUser', user: { username: response.data }, });
          this.$router.push({ name: 'Anasayfa' });
        }
      }).catch(() => {
        this.firstLoading = false;
      })
    },
  };

</script>


<style scoped lang="postcss">
  @import '../styles/colors.css';

  .autocenter {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    line-height: 1.4em;
    margin-bottom: 20px;
  }

  .logo-container {
    background: var(--tealish);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    padding: 10px 0;
  }

  form {
    border: 1px solid var(--light-blue-grey);
    padding: 50px;
    border-radius: 10px;
    box-shadow: 0 10px 100px hsla(0, 0%, 0%, 0.1);
    position: relative;
    overflow: hidden;
    padding-top: 120px;
  }

  input {
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
  }

  input[type="submit"] {
    background-image: none;
    border: none;
    color: var(--white);

    &:not(:disabled) {
      background-color: var(--cerulean);
    }
    &:disabled {
      background-color: var(--bluey-grey-two);
    }
  }
</style>
