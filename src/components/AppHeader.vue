<template>
  <header>
    <img src="../assets/logo.svg">
    <h1 class="lead brand">
      <span>TCDD TAŞIMACILIK A.Ş. GENEL MÜDÜRLÜĞÜ</span> <br/>
      <span>ORTA VADELİ PLAN ÇALIŞMASI</span>
    </h1>

    <div class="last-update">
      <span class="text-light">Son Guncelleme: {{}}  &nbsp;&middot;&nbsp; </span>
      <a class="text-light" href="javascript:void(0)" @click.prevent="logout()">Çıkış Yap</a>
    </div>

    <div>
      <div> <span class="text-lighter">Merhaba {{$store.state.user.username}} &nbsp;&middot;&nbsp; </span>
        <a class="text-light" href="javascript:void(0)" @click.prevent="logout()">Çıkış Yap</a></div>
    </div>

  </header>
</template>

<script>
  import axios from 'axios';
  import { host } from '@/util/config';

  export default {
    name: 'header',
    methods: {
      logout() {
        axios.post(`${host}/secureovp/logout`, {}, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }).then(() => {
          this.$store.commit({ type: 'updateUser', user: {} });
          this.$router.push({ name: 'Login' });
        });
      },
    },
    created() {
      this.$store.dispatch('getLastOVP');
    },
  };
</script>

<style scoped>
  @import '../styles/colors.css';

  header {
    background-color: #1D1E28;
    text-align: left;
    padding: 5px 20px;
    display: flex;
    align-items: center;
  }

  .last-update{
    flex: 2;
  }

  .brand {
    color: var(--white);
    flex: auto;
    text-align: left;
    font-size: 18px;
    font-weight: 500;
    padding: 5px 10px;
  }

  .text-lighter {
    color: var(--full-white);
  }

  .text-light {
    color: var(--light-blue-grey);
  }
</style>
