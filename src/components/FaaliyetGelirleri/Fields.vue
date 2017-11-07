<template>
  <div class="container container-fluid">
    <div class="row center-xs">
      <div class="col-lg-12">

        <h2 class="fieldset-label">YOLCU GELİRLERİ</h2>
        <h3 class="fieldset-label">1. Banliyö</h3>

        <table class="tableizer-table">
          <thead>
          <tr class="section-title">
            <th></th>
            <th>Marmaray</th>
            <th>Ankara Banliyösü</th>
            <th>Kentiçi Toplam</th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <td>Gelir (Bin TL)</td>
            <td is="TableRowInput"
                :divider="1000"
                :scope="[...scope, 'banliyo', 'marmaray', 'gelir']"></td>
            <td is="TableRowInput"
                :divider="1000" 
                :scope="[...scope, 'banliyo', 'ankara', 'gelir']"></td>
            <td is="TableRowDisplay"
                :divider="1000"
                :getter-name="scope.join('/') + '/banliyo/toplamGelir'"></td>
          </tr>

          <tr>
            <td>Yolcu Sayısı</td>
            <td is="TableRowInput" :scope="[...scope, 'banliyo', 'marmaray', 'yolcuSayisi']"></td>
            <td is="TableRowInput" :scope="[...scope, 'banliyo', 'ankara', 'yolcuSayisi']"></td>
            <td is="TableRowDisplay" :getter-name="scope.join('/') + '/banliyo/toplamYolcu'"></td>
          </tr>

          <tr>
            <td>Yolcu Km (Bin KM)</td>
            <td is="TableRowInput"
                :divider="1000"
                :scope="[...scope, 'banliyo', 'marmaray', 'yolcuKm']"></td>
            <td is="TableRowInput"
                :divider="1000"
                :scope="[...scope, 'banliyo', 'ankara', 'yolcuKm']"></td>
            <td is="TableRowDisplay"
                :divider="1000"
                :getter-name="scope.join('/') + '/banliyo/toplamYolcuKm'"></td>
          </tr>

          <tr class="disabled">
            <td>Birim Gelir (TL/Yolcu KM)</td>
            <td is="TableRowDisplay"
                :getter-name="scope.join('/') + '/banliyo/marmaray/birimGelir'"></td>
            <td is="TableRowDisplay"
                :getter-name="scope.join('/') + '/banliyo/ankara/birimGelir'"></td>
            <td is="TableRowDisplay"
                :getter-name="scope.join('/') + '/banliyo/birimGelir'"></td>
          </tr>
          </tbody>
        </table>

        <br/>
        <h3 class="fieldset-label">2. Anahat</h3>
        <h4 class="fieldset-label">2.1 Konvansiyonel</h4>

        <table class="tableizer-table">
          <thead>
          <tr class="section-title">
            <th></th>
            <th>Yurtiçi</th>
            <th>Uluslararası</th>
            <th>Konvansiyonel Toplam</th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <td>Gelir (Bin TL)</td>
            <td is="TableRowInput"
                :divider="1000"
                :scope="[...scope, 'anahat', 'konvansiyonel', 'yurtici', 'gelir']"></td>
            <td is="TableRowInput"
                :divider="1000"
                :scope="[...scope, 'anahat', 'konvansiyonel', 'uluslararasi', 'gelir']"></td>
            <td is="TableRowDisplay"
                :divider="1000"
                :getter-name="scope.join('/') + '/anahat/konvansiyonel/toplamGelir'"></td>
          </tr>

          <tr>
            <td>Yolcu Sayısı</td>
            <td is="TableRowInput"
                :scope="[...scope, 'anahat', 'konvansiyonel', 'yurtici', 'yolcuSayisi']"></td>
            <td is="TableRowInput"
                :scope="[...scope, 'anahat', 'konvansiyonel', 'uluslararasi', 'yolcuSayisi']"></td>
            <td is="TableRowDisplay"
                :getter-name="scope.join('/') + '/anahat/konvansiyonel/toplamYolcu'"></td>
          </tr>

          <tr>
            <td>Yolcu Km (Bin KM)</td>
            <td is="TableRowInput"
                :divider="1000"
                :scope="[...scope, 'anahat', 'konvansiyonel', 'yurtici', 'yolcuKm']"></td>
            <td is="TableRowInput"
                :divider="1000"
                :scope="[...scope, 'anahat', 'konvansiyonel', 'uluslararasi', 'yolcuKm']"></td>
            <td is="TableRowDisplay"
                :divider="1000"
                :getter-name="scope.join('/') + '/anahat/konvansiyonel/toplamYolcuKm'"></td>
          </tr>

          <tr class="disabled">
            <td>Birim Gelir (TL/Yolcu KM)</td>
            <td is="TableRowDisplay"
                :getter-name="scope.join('/') + '/anahat/konvansiyonel/yurtici/birimGelir'"></td>
            <td is="TableRowDisplay"
                :getter-name="scope.join('/') + '/anahat/konvansiyonel/uluslararasi/birimGelir'"></td>
            <td is="TableRowDisplay"
                :getter-name="scope.join('/') + '/anahat/konvansiyonel/birimGelir'"></td>
          </tr>
          </tbody>
        </table>

        <br/>
        <h4 class="fieldset-label">2.2 Yüksek Hızlı Tren</h4>
        <table class="tableizer-table">
          <thead>
          <tr class="section-title">
            <th></th>
            <th>Ankara-Eskişehir YHT</th>
            <th>Konya-Ankara YHT</th>
            <th>Ankara-İstanbul YHT</th>
            <th>Konya-İstanbul YHT</th>
            <th>YHT Toplam</th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <td>Gelir (Bin TL)</td>
            <td is="TableRowInput"
                :divider="1000"
                :scope="[...scope, 'anahat', 'yht', 'ankaraEskisehir', 'gelir']"></td>
            <td is="TableRowInput"
                :divider="1000"
                :scope="[...scope, 'anahat', 'yht', 'konyaAnkara', 'gelir']"></td>
            <td is="TableRowInput"
                :divider="1000"
                :scope="[...scope, 'anahat', 'yht', 'ankaraIstanbul', 'gelir']"></td>
            <td is="TableRowInput"
                :divider="1000"
                :scope="[...scope, 'anahat', 'yht', 'konyaIstanbul', 'gelir']"></td>
            <td is="TableRowDisplay"
                :divider="1000"
                :getter-name="scope.join('/') + '/anahat/yht/toplamGelir'"></td>
          </tr>

          <tr>
            <td>Yolcu Sayısı</td>
            <td is="TableRowInput"
                :scope="[...scope, 'anahat', 'yht', 'ankaraEskisehir', 'yolcuSayisi']"></td>
            <td is="TableRowInput"
                :scope="[...scope, 'anahat', 'yht', 'konyaAnkara', 'yolcuSayisi']"></td>
            <td is="TableRowInput"
                :scope="[...scope, 'anahat', 'yht', 'ankaraIstanbul', 'yolcuSayisi']"></td>
            <td is="TableRowInput"
                :scope="[...scope, 'anahat', 'yht', 'konyaIstanbul', 'yolcuSayisi']"></td>
            <td is="TableRowDisplay"
                :getter-name="scope.join('/') + '/anahat/yht/toplamYolcu'"></td>
          </tr>

          <tr>
            <td>Yolcu Km (Bin KM)</td>
            <td is="TableRowInput"
                :divider="1000"
                :scope="[...scope, 'anahat', 'yht', 'ankaraEskisehir', 'yolcuKm']"></td>
            <td is="TableRowInput"
                :divider="1000"
                :scope="[...scope, 'anahat', 'yht', 'konyaAnkara', 'yolcuKm']"></td>
            <td is="TableRowInput"
                :divider="1000"
                :scope="[...scope, 'anahat', 'yht', 'ankaraIstanbul', 'yolcuKm']"></td>
            <td is="TableRowInput"
                :divider="1000"
                :scope="[...scope, 'anahat', 'yht', 'konyaIstanbul', 'yolcuKm']"></td>
            <td is="TableRowDisplay"
                :divider="1000"
                :getter-name="scope.join('/') + '/anahat/yht/toplamYolcuKm'"></td>
          </tr>

          <tr class="disabled">
            <td>Birim Gelir (TL/Yolcu KM)</td>
            <td is="TableRowDisplay"
                :getter-name="scope.join('/') + '/anahat/yht/ankaraEskisehir/birimGelir'"></td>
            <td is="TableRowDisplay"
                :getter-name="scope.join('/') + '/anahat/yht/konyaAnkara/birimGelir'"></td>
            <td is="TableRowDisplay"
                :getter-name="scope.join('/') + '/anahat/yht/ankaraIstanbul/birimGelir'"></td>
            <td is="TableRowDisplay"
                :getter-name="scope.join('/') + '/anahat/yht/konyaIstanbul/birimGelir'"></td>
            <td is="TableRowDisplay"
                :getter-name="scope.join('/') + '/anahat/yht/birimGelir'"></td>
          </tr>
          </tbody>
        </table>
        <br/>


        <h3 class="fieldset-label">3. Diğer</h3>

        <table class="tableizer-table">
          <thead>
          <tr class="section-title">
            <th></th>
            <th>Diğer</th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <td>Gelir (Bin TL)</td>
            <td is="TableRowInput"
                :divider="1000"
                :scope="[...scope, 'diger', 'yurtici', 'gelir']"></td>
          </tr>

          <tr>
            <td>Yolcu Sayısı</td>
            <td is="TableRowInput" :scope="[...scope, 'diger', 'yurtici', 'yolcuSayisi']"></td>
          </tr>

          <tr>
            <td>Yolcu Km (Bin KM)</td>
            <td is="TableRowInput"
                :divider="1000"
                :scope="[...scope, 'diger', 'yurtici', 'yolcuKm']"></td>
          </tr>

          <tr class="disabled">
            <td>Birim Gelir (TL/Yolcu KM)</td>
            <td is="TableRowDisplay"
                :getter-name="scope.join('/') + '/diger/yurtici/birimGelir'"></td>
          </tr>
          </tbody>
        </table>

        <br/>

        <br/>
        <h3 class="fieldset-label">3. Toplam</h3>

        <table class="tableizer-table">
          <thead>
          <tr class="section-title">
            <th></th>
            <th>Anahat (Konvansiyonel + YHT) Toplam</th>
            <th>Yolcu (Banliyo + Anahat) Toplam</th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <td>Gelir (Bin TL)</td>
            <td is="TableRowDisplay"
                :divider="1000"
                :getter-name="scope.join('/') + '/anahat/toplamGelir'"></td>
            <td is="TableRowDisplay"
                :divider="1000"
                :getter-name="scope.join('/') + '/toplamGelir'"></td>
          </tr>

          <tr>
            <td>Yolcu Sayısı</td>
            <td is="TableRowDisplay" :getter-name="scope.join('/') + '/anahat/toplamYolcu'"></td>
            <td is="TableRowDisplay" :getter-name="scope.join('/') + '/toplamYolcu'"></td>
          </tr>

          <tr>
            <td>Yolcu Km (Bin KM)</td>
            <td is="TableRowDisplay"
                :divider="1000"
                :getter-name="scope.join('/') + '/anahat/toplamYolcuKm'"></td>
            <td is="TableRowDisplay"
                :divider="1000"
                :getter-name="scope.join('/') + '/toplamYolcuKm'"></td>
          </tr>

          <tr class="disabled">
            <td>Birim Gelir (TL/Yolcu KM)</td>
            <td is="TableRowDisplay"
                :getter-name="scope.join('/') + '/anahat/birimGelir'"></td>
            <td is="TableRowDisplay"
                :getter-name="scope.join('/') + '/birimGelir'"></td>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .row {
    margin-bottom: 20px;
  }
</style>
