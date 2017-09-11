<template>
  <div class="container container-fluid">
    <div class="row start-xs">
      <div class="col-xs-5">
        <h2 class="fieldset-label">BÜYÜME</h2>
        <div class="field-group">
          <label class="field-label">GSYH Reel Büyümesi</label>
          <InputGroup type="%" :scope="[...scope, 'buyume', 'gsyhReelBuyumesi']"/>
        </div>

        <div class="field-group">
          <label class="field-label">GSYH Nominal Büyümesi</label>
          <InputGroup type="%" :scope="[...scope, 'buyume', 'gsyhNominalBuyumesi']"/>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12">
        <h2 class="fieldset-label">DÖVİZ KURU</h2>
      </div>
      <div class="col-xs-5">
        <div class="field-group">
          <label class="field-label">Yıl Sonu Dolar Kuru</label>
          <InputGroup type="%" :scope="[...scope, 'dovizKuru', 'yilSonuDolar']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Yıllık Ortalama Dolar Kuru</label>
          <InputGroup type="%" :scope="[...scope, 'dovizKuru', 'yillikOrtalamaDolar']"/>
        </div>
      </div>
      <div class="col-xs-5 col-xs-offset-2">
        <div class="field-group">
          <label class="field-label">Yıl Sonu Euro Kuru</label>
          <InputGroup type="%" :scope="[...scope, 'dovizKuru', 'yilSonuEuro']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Yıllık Ortalama Euro Kuru</label>
          <InputGroup type="%" :scope="[...scope, 'dovizKuru', 'yillikOrtalamaEuro']"/>
        </div>
      </div>
    </div>


    <div class="row">
      <div class="col-xs-12">
        <h2 class="fieldset-label">FİYATLAR</h2>
      </div>
      <div class="col-xs-5">
        <div class="field-group">
          <label class="field-label">GSYH Deflatörü</label>
          <InputGroup type="%" :scope="[...scope, 'fiyatlar', 'gsyhDeflatoru']"/>
        </div>

        <div class="field-group">
          <label class="field-label">H. Petrol Fiyatı - Brent</label>
          <InputGroup type="%" :scope="[...scope, 'fiyatlar', 'hamPetrolBrent']"/>
        </div>
      </div>
      <div class="col-xs-5 col-xs-offset-2">
        <div class="field-group">
          <label class="field-label">TÜFE Yıl Sonu</label>
          <InputGroup type="%" :scope="[...scope, 'fiyatlar', 'tufeYilSonu']"/>
        </div>

        <div class="field-group">
          <label class="field-label">TÜFE Yıllık Ortalama</label>
          <InputGroup type="%" :scope="[...scope, 'fiyatlar', 'tufeYillikOrtalama']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Yİ-ÜFE Yıl Sonu</label>
          <InputGroup type="%" :scope="[...scope, 'fiyatlar', 'yiUfeYilSonu']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Yİ-ÜFE Yıllık Ortalama</label>
          <InputGroup type="%" :scope="[...scope, 'fiyatlar', 'yiUfeYillikOrtalama']"/>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12">
        <h2 class="fieldset-label">MEMUR MAASLARI</h2>
      </div>
      <div class="col-xs-5">
        <div class="field-group">
          <label class="field-label">I. Dönem</label>
          <InputGroup type="%" :scope="[...scope, 'memurMaasi', 'iDonem']"/>
        </div>

        <div class="field-group">
          <label class="field-label">II. Dönem</label>
          <InputGroup type="%" :scope="[...scope, 'memurMaasi', 'iiDonem']"/>
        </div>
      </div>
      <div class="col-xs-5 col-xs-offset-2">
        <div class="field-group">
          <label class="field-label">Yillik Ortalama Artis</label>
          <InputGroup type="%" disabled :scope="[...scope, 'memurMaasi', 'ortalama']"/>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12">
        <h2 class="fieldset-label">KAMU İŞÇİSİ ÜCRET ARTIŞ ORANLARI</h2>
      </div>
      <div class="col-xs-5">
        <div class="field-group">
          <label class="field-label">I. Dönem</label>
          <InputGroup type="%" :scope="[...scope, 'kamuIscisiUcreti', 'iDonem']"/>
        </div>

        <div class="field-group">
          <label class="field-label">II. Dönem</label>
          <InputGroup type="%" :scope="[...scope, 'kamuIscisiUcreti', 'iiDonem']"/>
        </div>
      </div>
      <div class="col-xs-5 col-xs-offset-2">
        <div class="field-group">
          <label class="field-label">Yillik Ortalama Artis</label>
          <InputGroup type="%" disabled :scope="[...scope, 'kamuIscisiUcreti', 'ortalama']"/>
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
