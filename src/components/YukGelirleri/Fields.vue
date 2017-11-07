<template>
  <div class="container container-fluid">

    <h2 class="fieldset-label">YÜK GELİRLERİ</h2>

    <div class="row start-xs">
      <table class="tableizer-table">
        <thead>
        <tr class="group-title disabled">
          <th>MAL / HİZMET</th>
          <th>Satış Miktarı <br/>(Bin Ton-KM)</th>
          <th>Birim Fiyat <br/>(Ton-KM/TL)</th>
          <th>Satış Hasılatı <br/>(Bin TL)</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Yurtiçi taşıma geliri</td>
          <td is="TableRowInput" :divider="1000" :scope="[...scope, 'yurtici', 'netTonKm']"></td>
          <td is="TableRowDisplay" :getter-name="scope.join('/') + '/yurtici/birimGelir'"></td>
          <td is="TableRowInput" :divider="1000" :scope="[...scope, 'yurtici', 'gelir']"></td>
        </tr>
        <tr>
          <td>Uluslararası taşıma geliri</td>
          <td is="TableRowInput" :divider="1000" :scope="[...scope, 'uluslararasi', 'netTonKm']"></td>
          <td is="TableRowDisplay" :getter-name="scope.join('/') + '/uluslararasi/birimGelir'"></td>
          <td is="TableRowInput" :divider="1000" :scope="[...scope, 'uluslararasi', 'gelir']"></td>
        </tr>
        <tr class="disabled">
          <td>Taşıma Geliri Toplamı:</td>
          <td is="TableRowDisplay" :divider="1000" :getter-name="scope.join('/') + '/toplamNetTonKm'"></td>
          <td is="TableRowDisplay" :getter-name="scope.join('/') + '/ortalamaBirimGelir'"></td>
          <td is="TableRowDisplay" :divider="1000" :getter-name="scope.join('/') + '/tasimaGeliri'"></td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Yurtiçi diğer gelirler</td>
          <td>-</td>
          <td>-</td>
          <td is="TableRowInput"  :divider="1000" :scope="[...scope, 'yurtici', 'digerGelirler']"></td>
        </tr>
        <tr>
          <td>Uluslararası diğer gelirler</td>
          <td>-</td>
          <td>-</td>
          <td is="TableRowInput" :divider="1000" :scope="[...scope, 'uluslararasi', 'digerGelirler']"></td>
        </tr>
        <tr>
          <td>Diğer Gelirler Toplamı:</td>
          <td>-</td>
          <td>-</td>
          <td is="TableRowDisplay" :divider="1000" :getter-name="scope.join('/') + '/toplamDigerGelirler'"></td>
        </tr>
        <tr>
          <td>İdari Taşıma</td>
          <td is="TableRowInput" :divider="1000" :scope="[...scope, 'idariTasima']"></td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr class="section-title">
          <td>TOPLAM YÜK GELİRİ</td>
          <td is="TableRowDisplay" :divider="1000" :getter-name="scope.join('/') + '/toplamSatisNetTonKm'"></td>
          <td>&nbsp;</td>
          <td is="TableRowDisplay" :divider="1000" :getter-name="scope.join('/') + '/toplamGelir'"></td>
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
