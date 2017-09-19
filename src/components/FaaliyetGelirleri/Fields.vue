<template>
  <div class="container container-fluid">

    <h2 class="fieldset-label">YOLCU GELİRLERİ</h2>
    <h3 class="fieldset-label">1. Banliyö</h3>

    <div class="row start-xs">
      <div class="col-xs-4">
        <h5 class="fieldset-label">a. Marmaray</h5>
        <div class="field-group">
          <label class="field-label">Gelir</label>
          <InputGroup type="" :scope="[...scope, 'banliyo', 'marmaray', 'gelir']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Yolcu Sayısı</label>
          <InputGroup type="" :scope="[...scope, 'banliyo', 'marmaray', 'yolcuSayisi']"/>
        </div>
        <div class="field-group">
          <label class="field-label">Yolcu KM</label>
          <InputGroup type="" :scope="[...scope, 'banliyo', 'marmaray', 'yolcuKm']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Birim Gelir</label>
          <InputGroup type="" getter-name="birimGelir" :scope="[...scope, 'banliyo', 'marmaray', 'value']"/>
        </div>

      </div>
      <div class="col-xs-4">
        <h5 class="fieldset-label">b. Ankara Banliyösü</h5>
        <div class="field-group">
          <label class="field-label">Gelir</label>
          <InputGroup type="" :scope="[...scope, 'banliyo', 'ankara', 'gelir']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Yolcu Sayısı</label>
          <InputGroup type="" :scope="[...scope, 'banliyo', 'ankara', 'yolcuSayisi']"/>
        </div>
        <div class="field-group">
          <label class="field-label">Yolcu KM</label>
          <InputGroup type="" :scope="[...scope, 'banliyo', 'ankara', 'yolcuKm']"/>
        </div>
        <div class="field-group">
          <label class="field-label">Birim Gelir</label>
          <InputGroup type="" getter-name="birimGelir" :scope="[...scope, 'banliyo', 'ankara', 'value']"/>
        </div>
      </div>

      <div class="col-xs-4">
        <h5 class="fieldset-label">Kentiçi Toplam</h5>
        <div class="field-group">
          <label class="field-label">Gelir</label>
          <InputGroup type="" getter-name="gelirToplam" :scope="[...scope, 'banliyo', 'gelir']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Yolcu Sayısı</label>
          <InputGroup type="" getter-name="gelirToplam" :scope="[...scope, 'banliyo', 'yolcuSayisi']"/>
        </div>
        <div class="field-group">
          <label class="field-label">Yolcu KM</label>
          <InputGroup type="" getter-name="gelirToplam" :scope="[...scope, 'banliyo', 'yolcuKm']"/>
        </div>
        <div class="field-group">
          <label class="field-label">Birim Gelir</label>
          <InputGroup type="" getter-name="toplamBirimGelir" :scope="[...scope, 'banliyo', 'value']"/>
        </div>
      </div>

    </div>

    <h3 class="fieldset-label">2. Anahat</h3>
    <h4 class="fieldset-label">2.1 Konvansiyonel</h4>
    <div class="row start-xs">
      <div class="col-xs-4">
        <h5 class="fieldset-label">a. Yurtiçi</h5>
        <div class="field-group">
          <label class="field-label">Gelir</label>
          <InputGroup type="" :scope="[...scope, 'anahat', 'konvansiyonel', 'yurtici', 'gelir']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Yolcu Sayısı</label>
          <InputGroup type="" :scope="[...scope, 'anahat', 'konvansiyonel', 'yurtici', 'yolcuSayisi']"/>
        </div>
        <div class="field-group">
          <label class="field-label">Yolcu KM</label>
          <InputGroup type="" :scope="[...scope, 'anahat', 'konvansiyonel', 'yurtici', 'yolcuKm']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Birim Gelir</label>
          <InputGroup type="" getter-name="birimGelir" :scope="[...scope, 'anahat', 'konvansiyonel', 'yurtici', 'value']"/>
        </div>
      </div>

      <div class="col-xs-4">
        <h5 class="fieldset-label">b. Uluslararası</h5>
        <div class="field-group">
          <label class="field-label">Gelir</label>
          <InputGroup type="" :scope="[...scope, 'anahat', 'konvansiyonel', 'uluslararasi', 'gelir']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Yolcu Sayısı</label>
          <InputGroup type="" :scope="[...scope, 'anahat', 'konvansiyonel', 'uluslararasi', 'yolcuSayisi']"/>
        </div>
        <div class="field-group">
          <label class="field-label">Yolcu KM</label>
          <InputGroup type="" :scope="[...scope, 'anahat', 'konvansiyonel', 'uluslararasi', 'yolcuKm']"/>
        </div>
        <div class="field-group">
          <label class="field-label">Birim Gelir</label>
          <InputGroup type="" getter-name="birimGelir" :scope="[...scope, 'anahat', 'konvansiyonel', 'uluslararasi', 'value']"/>
        </div>
      </div>

      <div class="col-xs-4">
        <h5 class="fieldset-label">Konvansiyonel Toplam</h5>
        <div class="field-group">
          <label class="field-label">Gelir</label>
          <InputGroup type="" getter-name="gelirToplam" :scope="[...scope,  'anahat', 'konvansiyonel', 'gelir']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Yolcu Sayısı</label>
          <InputGroup type="" getter-name="gelirToplam" :scope="[...scope,  'anahat', 'konvansiyonel', 'yolcuSayisi']"/>
        </div>
        <div class="field-group">
          <label class="field-label">Yolcu KM</label>
          <InputGroup type="" getter-name="gelirToplam" :scope="[...scope,  'anahat', 'konvansiyonel', 'yolcuKm']"/>
        </div>
        <div class="field-group">
          <label class="field-label">Birim Gelir</label>
          <InputGroup type="" getter-name="toplamBirimGelir" :scope="[...scope, 'anahat', 'konvansiyonel', 'value']"/>
        </div>
      </div>
    </div>

    <h4 class="fieldset-label">2.2 Yüksek Hızlı Tren</h4>
    <div class="row start-xs">
      <div class="col-xs-4">
        <h5 class="fieldset-label">Ankara-Eskişehir YHT</h5>
        <div class="field-group">
          <label class="field-label">Gelir</label>
          <InputGroup type="" :scope="[...scope, 'anahat', 'yht', 'ankaraEskisehir', 'gelir']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Yolcu Sayısı</label>
          <InputGroup type="" :scope="[...scope, 'anahat', 'yht', 'ankaraEskisehir', 'yolcuSayisi']"/>
        </div>
        <div class="field-group">
          <label class="field-label">Yolcu KM</label>
          <InputGroup type="" :scope="[...scope, 'anahat', 'yht', 'ankaraEskisehir', 'yolcuKm']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Birim Gelir</label>
          <InputGroup type="" getter-name="birimGelir" :scope="[...scope, 'anahat', 'yht', 'ankaraEskisehir', 'value']"/>
        </div>
      </div>

      <div class="col-xs-4">
        <h5 class="fieldset-label">Konya-Ankara YHT</h5>
        <div class="field-group">
          <label class="field-label">Gelir</label>
          <InputGroup type="" :scope="[...scope, 'anahat', 'yht', 'konyaAnkara', 'gelir']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Yolcu Sayısı</label>
          <InputGroup type="" :scope="[...scope, 'anahat', 'yht', 'konyaAnkara', 'yolcuSayisi']"/>
        </div>
        <div class="field-group">
          <label class="field-label">Yolcu KM</label>
          <InputGroup type="" :scope="[...scope, 'anahat', 'yht', 'konyaAnkara', 'yolcuKm']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Birim Gelir</label>
          <InputGroup type="" getter-name="birimGelir" :scope="[...scope, 'anahat', 'yht', 'konyaAnkara', 'value']"/>
        </div>
      </div>

      <div class="col-xs-4">
        <h5 class="fieldset-label">Ankara-İstanbul YHT</h5>
        <div class="field-group">
          <label class="field-label">Gelir</label>
          <InputGroup type="" :scope="[...scope, 'anahat', 'yht', 'ankaraIstanbul', 'gelir']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Yolcu Sayısı</label>
          <InputGroup type="" :scope="[...scope, 'anahat', 'yht', 'ankaraIstanbul', 'yolcuSayisi']"/>
        </div>
        <div class="field-group">
          <label class="field-label">Yolcu KM</label>
          <InputGroup type="" :scope="[...scope, 'anahat', 'yht', 'ankaraIstanbul', 'yolcuKm']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Birim Gelir</label>
          <InputGroup type="" getter-name="birimGelir" :scope="[...scope, 'anahat', 'yht', 'ankaraIstanbul', 'value']"/>
        </div>
      </div>

      <div class="col-xs-4">
        <h5 class="fieldset-label">Konya-İstanbul YHT</h5>
        <div class="field-group">
          <label class="field-label">Gelir</label>
          <InputGroup type="" :scope="[...scope, 'anahat', 'yht', 'konyaIstanbul', 'gelir']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Yolcu Sayısı</label>
          <InputGroup type="" :scope="[...scope, 'anahat', 'yht', 'konyaIstanbul', 'yolcuSayisi']"/>
        </div>
        <div class="field-group">
          <label class="field-label">Yolcu KM</label>
          <InputGroup type="" :scope="[...scope, 'anahat', 'yht', 'konyaIstanbul', 'yolcuKm']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Birim Gelir</label>
          <InputGroup type="" getter-name="birimGelir" :scope="[...scope, 'anahat', 'yht', 'konyaIstanbul', 'value']"/>
        </div>
      </div>

      <div class="col-xs-4 col-xs-offset-4">
        <h5 class="fieldset-label">YHT Toplam</h5>
        <div class="field-group">
          <label class="field-label">Gelir</label>
          <InputGroup type="" getter-name="gelirToplam" :scope="[...scope,  'anahat', 'yht', 'gelir']"/>
        </div>
        <div class="field-group">
          <label class="field-label">Yolcu Sayısı</label>
          <InputGroup type="" getter-name="gelirToplam" :scope="[...scope,  'anahat', 'yht', 'yolcuSayisi']"/>
        </div>
        <div class="field-group">
          <label class="field-label">Yolcu KM</label>
          <InputGroup type="" getter-name="gelirToplam" :scope="[...scope,  'anahat', 'yht', 'yolcuKm']"/>
        </div>
        <div class="field-group">
          <label class="field-label">Birim Gelir</label>
          <InputGroup type="" getter-name="toplamBirimGelir" :scope="[...scope, 'anahat', 'yht', 'value']"/>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
  import InputGroup from '@/components/InputGroup';

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
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .field-group {
    display: flex;
    justify-content: space-between;
  }

  .container{
    width: 100%;
  }

  .row{
    margin-bottom: 20px;
  }
</style>
