<template>
  <div class="container container-fluid">

    <h2 class="fieldset-label">PERSONEL GİDERLERİ</h2>

    <div class="row start-xs">
      <table class="tableizer-table">
        <thead>
        <tr class="section-title">
          <th></th>
          <th colspan="2">MEMUR</th>
          <th colspan="2">SÖZLEŞMELİ</th>
          <th colspan="2">DAİMİ İŞÇİ</th>
          <th colspan="2">GEÇİCİ İŞÇİ</th>
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
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Yolcu</td>
          <td is="TableRowInput" :scope="[...scope, 'yolcu', 'memur', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'yolcu', 'memur', 'ortalamaAylikUcret']"></td>
          <td is="TableRowInput" :scope="[...scope, 'yolcu', 'sozlesmeli', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'yolcu', 'sozlesmeli', 'ortalamaAylikUcret']"></td>
          <td is="TableRowInput" :scope="[...scope, 'yolcu', 'daimi', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'yolcu', 'daimi', 'ortalamaAylikUcret']"></td>
          <td is="TableRowInput" :scope="[...scope, 'yolcu', 'gecici', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'yolcu', 'gecici', 'ortalamaAylikUcret']"></td>
        </tr>
        <tr>
          <td>Lojistik</td>
          <td is="TableRowInput" :scope="[...scope, 'lojistik', 'memur', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'lojistik', 'memur', 'ortalamaAylikUcret']"></td>
          <td is="TableRowInput" :scope="[...scope, 'lojistik', 'sozlesmeli', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'lojistik', 'sozlesmeli', 'ortalamaAylikUcret']"></td>
          <td is="TableRowInput" :scope="[...scope, 'lojistik', 'daimi', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'lojistik', 'daimi', 'ortalamaAylikUcret']"></td>
          <td is="TableRowInput" :scope="[...scope, 'lojistik', 'gecici', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'lojistik', 'gecici', 'ortalamaAylikUcret']"></td>
        </tr>
        <tr>
          <td>YHT</td>
          <td is="TableRowInput" :scope="[...scope, 'yht', 'memur', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'yht', 'memur', 'ortalamaAylikUcret']"></td>
          <td is="TableRowInput" :scope="[...scope, 'yht', 'sozlesmeli', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'yht', 'sozlesmeli', 'ortalamaAylikUcret']"></td>
          <td is="TableRowInput" :scope="[...scope, 'yht', 'daimi', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'yht', 'daimi', 'ortalamaAylikUcret']"></td>
          <td is="TableRowInput" :scope="[...scope, 'yht', 'gecici', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'yht', 'gecici', 'ortalamaAylikUcret']"></td>
        </tr>
        <tr>
          <td>Marmaray</td>
          <td is="TableRowInput" :scope="[...scope, 'marmaray', 'memur', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'marmaray', 'memur', 'ortalamaAylikUcret']"></td>
          <td is="TableRowInput" :scope="[...scope, 'marmaray', 'sozlesmeli', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'marmaray', 'sozlesmeli', 'ortalamaAylikUcret']"></td>
          <td is="TableRowInput" :scope="[...scope, 'marmaray', 'daimi', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'marmaray', 'daimi', 'ortalamaAylikUcret']"></td>
          <td is="TableRowInput" :scope="[...scope, 'marmaray', 'gecici', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'marmaray', 'gecici', 'ortalamaAylikUcret']"></td>
        </tr>
        <tr>
          <td>Araç Bakım</td>
          <td is="TableRowInput" :scope="[...scope, 'aracBakim', 'memur', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'aracBakim', 'memur', 'ortalamaAylikUcret']"></td>
          <td is="TableRowInput" :scope="[...scope, 'aracBakim', 'sozlesmeli', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'aracBakim', 'sozlesmeli', 'ortalamaAylikUcret']"></td>
          <td is="TableRowInput" :scope="[...scope, 'aracBakim', 'daimi', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'aracBakim', 'daimi', 'ortalamaAylikUcret']"></td>
          <td is="TableRowInput" :scope="[...scope, 'aracBakim', 'gecici', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'aracBakim', 'gecici', 'ortalamaAylikUcret']"></td>
        </tr>
        <tr>
          <td>ADF</td>
          <td is="TableRowInput" :scope="[...scope, 'adf', 'memur', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'adf', 'memur', 'ortalamaAylikUcret']"></td>
          <td is="TableRowInput" :scope="[...scope, 'adf', 'sozlesmeli', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'adf', 'sozlesmeli', 'ortalamaAylikUcret']"></td>
          <td is="TableRowInput" :scope="[...scope, 'adf', 'daimi', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'adf', 'daimi', 'ortalamaAylikUcret']"></td>
          <td is="TableRowInput" :scope="[...scope, 'adf', 'gecici', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'adf', 'gecici', 'ortalamaAylikUcret']"></td>
        </tr>
        <tr>
          <td>Genel Yönetim</td>
          <td is="TableRowInput" :scope="[...scope, 'genelYonetim', 'memur', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'genelYonetim', 'memur', 'ortalamaAylikUcret']"></td>
          <td is="TableRowInput" :scope="[...scope, 'genelYonetim', 'sozlesmeli', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'genelYonetim', 'sozlesmeli', 'ortalamaAylikUcret']"></td>
          <td is="TableRowInput" :scope="[...scope, 'genelYonetim', 'daimi', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'genelYonetim', 'daimi', 'ortalamaAylikUcret']"></td>
          <td is="TableRowInput" :scope="[...scope, 'genelYonetim', 'gecici', 'adet']"></td>
          <td is="TableRowInput" :scope="[...scope, 'genelYonetim', 'gecici', 'ortalamaAylikUcret']"></td>
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
    data() {
      return {};
    },
    components: {
      InputGroup,
      TableRowInput,
      TableRowDisplay,
    },
  };
</script>
