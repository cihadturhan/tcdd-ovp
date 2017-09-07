<template>
  <div class="row-summary">
    <div class="col-summary">
      <h3>Gelirler Toplamı</h3>
      <p class="summary-text">
        <VueOdometer class="vue-odometer" :duration="100" :value="gelirlerToplam"></VueOdometer>
      </p>
    </div>
    <div class="col-summary">
      <h3>Giderler Toplamı</h3>
      <p class="summary-text">
        <VueOdometer class="vue-odometer" :duration="100" :value="giderlerToplam"></VueOdometer>
      </p>
    </div>
    <div class="col-summary">
      <h3>Dönem Kar/Zarar</h3>
      <p class="summary-text">
        <VueOdometer class="vue-odometer" :style="{color: donemKarZarar > 0 ? 'var(--tealish)' : 'var(--dusty-orange)'}" :duration="100" :value="giderlerToplam"></VueOdometer>
      </p>
    </div>
  </div>
</template>

<script>
  import VueOdometer from 'vue-odometer';

  export default {
    name: 'Summary',
    computed: {
      gelirlerToplam() {
        return this.$store.getters.gelirlerToplam;
      },
      giderlerToplam() {
        return this.$store.getters.giderlerToplam;
      },
      donemKarZarar() {
        return this.$store.getters.donemKarZarar > 1000 ? this.$store.getters.donemKarZarar
          : -this.$store.getters.donemKarZarar;
      },
      donemKarZararAbs() {
        return Math.abs(this.donemKarZarar);
      },
    },
    components: {
      VueOdometer,
    },
  };
</script>

<style scoped>
  .row-summary{
    display: flex;
    width: 655px;
    padding-top: 20px;
    padding-bottom: 25px;
    background-color: var(--full-white);
  }

  .col-summary{
    flex: 1;
    & > h3{
      font-weight: 300;
      margin-top: 0;
      margin-bottom: 15px;
    }
    & > p{
      margin: 0;
    }
  }

  .vue-odometer{
    font-size: 24px;
    color: var(--azul);
    /*transition: color 0.5s;*/
    /*&.positive{
      color: var(--tealish)
    }
    &.negative{
      color: var(--dusty-orange)
    }*/
  }
</style>
