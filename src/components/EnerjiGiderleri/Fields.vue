<template>
  <div class="container container-fluid">

    <h2 class="fieldset-label">ENERJİ GİDERLERİ</h2>

    <div class="row start-xs">
      <table class="tableizer-table">
        <thead>
        <tr class="section-title">
          <th></th>
          <th colspan="2">MOTORİN</th>
          <th colspan="2">ELEKTRİK</th>
          <th></th>
        </tr>
        <tr class="group-title">
          <th></th>
          <th>Kullanım (Litre)</th>
          <th>Gider (TL)</th>
          <th>Kullanım (KWS)</th>
          <th>Gider (TL)</th>
          <th>Toplam Gider (TL)</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="row in rows">
          <td>{{row.title}}</td>
          <td is="TableRowInput" :scope="[...scope, row.key, 'motorin']"></td>
          <td is="TableRowDisplay"
              :getter-name="scope.join('/') + `/${row.key}/motorinGideri`"></td>
          <td is="TableRowInput" :scope="[...scope, row.key, 'elektrik']"></td>
          <td is="TableRowDisplay"
              :getter-name="scope.join('/') + `/${row.key}/elektrikGideri`"></td>
          <td is="TableRowDisplay" :getter-name="scope.join('/') + `/${row.key}/toplamGider`"></td>
        </tr>

        <tr>
          <td>Araç Bakım</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr class="group-title disabled">
          <td>Toplam</td>
          <td is="TableRowDisplay" :getter-name="scope.join('/') + '/toplamMotorinKullanimi'"></td>
          <td is="TableRowDisplay" :getter-name="scope.join('/') + '/toplamMotorinGideri'"></td>
          <td is="TableRowDisplay" :getter-name="scope.join('/') + '/toplamElektrikKullanimi'"></td>
          <td is="TableRowDisplay" :getter-name="scope.join('/') + '/toplamElektrikGideri'"></td>
          <td is="TableRowDisplay" :getter-name="scope.join('/') + '/toplamGider'"></td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="row start-xs note">
      *Elektrik ve Motorin birim fiyatları Varsayımlar sayfasındadır
    </div>


  </div>
</template>


<script>
  import InputGroup from '@/components/InputGroup';
  import TableRowInput from '@/components/TableRowInput';
  import TableRowDisplay from '@/components/TableRowDisplay';


  export default {
    name: 'fields',
    props: {
      scope: Array,
    },
    computed: {
      rows() {
        return this.$store.state.rows;
      },
    },
    components: {
      InputGroup,
      TableRowInput,
      TableRowDisplay,
    },
  };
</script>

<style scoped>
  .note {
    margin-top: 15px
  }
</style>
