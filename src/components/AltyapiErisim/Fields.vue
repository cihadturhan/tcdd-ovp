<template>
  <div class="container container-fluid">

    <h2 class="fieldset-label">ALTYAPI ERİŞİM ÜCRETLERİ</h2>

    <div class="row start-xs">
      <table class="tableizer-table">
        <thead>
        <tr class="section-title">
          <th>TREN CİNSİ</th>
          <th>HAMTON/TRENKM</th>
          <th style="width:100px">ÇARPAN</th>
          <th>TOPLAM (TL)</th>
        </tr>
        </thead>
        <tbody>

        <tr v-for="(row, key) in trenHamtonKm" v-if="row !== trenHamtonKm.banliyo">
          <td>{{row.title}}</td>
          <td is="TableRowInput" :scope="[...scope, 'trenHamtonKm', key, 'deger']"></td>
          <td is="TableRowInput" :scope="[...scope, 'trenHamtonKm', key, 'carpan']"></td>
          <td is="TableRowDisplay" :getter-name="scope.join('/') + `/${key}/gider`"></td>
        </tr>

        <tr class="group-title disabled">
          <td>Toplam</td>
          <td colspan="2"></td>
          <td is="TableRowDisplay" :getter-name="scope.join('/') + '/toplamGider'"></td>
        </tr>
        </tbody>
      </table>
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
      trenHamtonKm() {
        return [...this.scope, 'trenHamtonKm'].reduce((p, c) => p[c], this.$store.state);
      },
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
