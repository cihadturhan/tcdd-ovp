<template>
  <div class="row center-xs">

    <div class="col-lg-10 col-md-12">
      <h2 class="fieldset-label">PERSONEL GİDERLERİ</h2>

      <div class="row start-xs">
        <table class="tableizer-table">
          <thead>
          <tr class="section-title">
            <th style="min-width: 120px;"></th>
            <th colspan="2">MEMUR</th>
            <th colspan="2">SÖZLEŞMELİ</th>
            <th colspan="2">DAİMİ İŞÇİ</th>
            <th colspan="2">GEÇİCİ İŞÇİ</th>
            <th colspan="2" style="min-width: 200px;">TOPLAM</th>
          </tr>
          <tr class="disabled-light">
            <th></th>
            <th>Adet</th>
            <th>Ort Aylık Ücret</th>
            <th>Adet</th>
            <th>Ort Aylık Ücret</th>
            <th>Adet</th>
            <th>Ort Aylık Ücret</th>
            <th>Adet</th>
            <th>Ort Aylık Ücret</th>
            <th>Personel Adeti</th>
            <th>Personel Gideri</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="row in rows">
            <td>{{row.title}}</td>
            <td is="TableRowInput" :scope="[...scope, row.key, 'memur', 'adet']"></td>
            <td is="TableRowInput" :scope="[...scope, row.key, 'memur', 'ortalamaAylikUcret']"></td>
            <td is="TableRowInput" :scope="[...scope, row.key, 'sozlesmeli', 'adet']"></td>
            <td is="TableRowInput"
                :scope="[...scope, row.key, 'sozlesmeli', 'ortalamaAylikUcret']"></td>
            <td is="TableRowInput" :scope="[...scope, row.key, 'daimi', 'adet']"></td>
            <td is="TableRowInput" :scope="[...scope, row.key, 'daimi', 'ortalamaAylikUcret']"></td>
            <td is="TableRowInput" :scope="[...scope, row.key, 'gecici', 'adet']"></td>
            <td is="TableRowInput"
                :scope="[...scope, row.key, 'gecici', 'ortalamaAylikUcret']"></td>
            <td is="TableRowDisplay"
                :getter-name="scope.join('/') + `/${row.key}/personelAdeti`"></td>
            <td is="TableRowDisplay"
                :getter-name="scope.join('/') + `/${row.key}/personelGideri`"></td>
          </tr>

          <tr>
            <td>Toplam</td>
            <td colspan="9"></td>
            <td is="TableRowDisplay" :getter-name="scope.join('/') + '/toplamGider'"></td>
          </tr>
          </tbody>
        </table>
      </div>
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
