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
      <p class="summary-text" :class="donemKarZarar > 0 ? 'summary-success' : 'summary-danger'">
        <VueOdometer
          class="vue-odometer"
          :duration="100"
          :value="donemKarZararAbs"></VueOdometer>
      </p>
    </div>
  </div>
</template>

<script>
  import VueOdometer from 'vue-odometer';

  export default {
    props: {
      scope: [Array],
    },
    name: 'Summary',
    computed: {
      gelirlerToplam() {
        const currentYear = this.$store.state.currentYear;
        return this.$store.getters[`${currentYear}/genelIcmal/gelirler/toplam`];
      },
      giderlerToplam() {
        return this.$store.getters.giderlerToplam;
      },
      donemKarZarar() {
        return this.$store.getters.donemKarZarar;
      },
      donemKarZararAbs() {
        return Math.abs(this.$store.getters.donemKarZarar);
      },
    },
    components: {
      VueOdometer,
    },
  };
</script>

<style scoped>
  @import '../styles/colors.css';
  .summary-text{
    color: var(--azul);
    &.summary-danger{
      color: var(--dusty-orange);
    }

    &.summary-success{
      color: var(--tealish);
    }
  }


  .row-summary{
    display: flex;
    width: 655px;
    padding-top: 20px;
    padding-bottom: 25px;
    background-color: var(--full-white);
    box-shadow: 0 0px 1px rgba(0, 0, 0, 0.09), 0 0px 10px rgba(0, 0, 0, 0.09);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
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
    /*transition: color 0.5s;*/
    /*&.positive{
      color: var(--tealish)
    }
    &.negative{
      color: var(--dusty-orange)
    }*/
  }
</style>
