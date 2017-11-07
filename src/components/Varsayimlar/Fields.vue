<template>
  <div class="container container-fluid">
    <div class="row start-xs">
      <div class="col-xs-5">
        <h2 class="fieldset-label">BÜYÜME</h2>
        <div class="field-group">
          <label class="field-label">GSYH Reel Büyümesi</label>
          <InputGroup type="%" :fixed="2" :scope="[...scope, 'buyume', 'gsyhReelBuyumesi']"/>
        </div>

        <div class="field-group">
          <label class="field-label">GSYH Nominal Büyümesi</label>
          <InputGroup type="%" :fixed="2" :scope="[...scope, 'buyume', 'gsyhNominalBuyumesi']"/>
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
          <InputGroup type="₺" :fixed="5" :scope="[...scope, 'dovizKuru', 'yilSonuDolar']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Yıllık Ortalama Dolar Kuru</label>
          <InputGroup type="₺" :fixed="5" :scope="[...scope, 'dovizKuru', 'yillikOrtalamaDolar']"/>
        </div>
      </div>
      <div class="col-xs-5 col-xs-offset-2">
        <div class="field-group">
          <label class="field-label">Yıl Sonu Euro Kuru</label>
          <InputGroup type="₺" :fixed="5" :scope="[...scope, 'dovizKuru', 'yilSonuEuro']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Yıllık Ortalama Euro Kuru</label>
          <InputGroup type="₺" :fixed="5" :scope="[...scope, 'dovizKuru', 'yillikOrtalamaEuro']"/>
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
          <InputGroup type="%" :fixed="2" :scope="[...scope, 'fiyatlar', 'gsyhDeflatoru']"/>
        </div>

        <div class="field-group">
          <label class="field-label">H. Petrol Fiyatı - Brent</label>
          <InputGroup type="₺" :fixed="3" :scope="[...scope, 'fiyatlar', 'hamPetrolBrent']"/>
        </div>
        <div class="field-group">
          <label class="field-label">Elektrik Fiyatı - KWS</label>
          <InputGroup type="₺" :fixed="3" :scope="[...scope, 'fiyatlar', 'elektrikKWS']"/>
        </div>
        <div class="field-group">
          <label class="field-label">Motorin Fiyatı - Litre</label>
          <InputGroup type="₺" :fixed="3" :scope="[...scope, 'fiyatlar', 'motorin']"/>
        </div>
      </div>
      <div class="col-xs-5 col-xs-offset-2">
        <div class="field-group">
          <label class="field-label">TÜFE Yıl Sonu</label>
          <InputGroup type="%" :fixed="3" :scope="[...scope, 'fiyatlar', 'tufeYilSonu']"/>
        </div>

        <div class="field-group">
          <label class="field-label">TÜFE Yıllık Ortalama</label>
          <InputGroup type="%" :fixed="3" :scope="[...scope, 'fiyatlar', 'tufeYillikOrtalama']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Yİ-ÜFE Yıl Sonu</label>
          <InputGroup type="%" :fixed="3" :scope="[...scope, 'fiyatlar', 'yiUfeYilSonu']"/>
        </div>

        <div class="field-group">
          <label class="field-label">Yİ-ÜFE Yıllık Ortalama</label>
          <InputGroup type="%" :fixed="3" :scope="[...scope, 'fiyatlar', 'yiUfeYillikOrtalama']"/>
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
          <InputGroup type="%" :fixed="3" :scope="[...scope, 'memurMaasi', 'iDonem']"/>
        </div>

        <div class="field-group">
          <label class="field-label">II. Dönem</label>
          <InputGroup type="%" :fixed="3" :scope="[...scope, 'memurMaasi', 'iiDonem']"/>
        </div>
      </div>
      <div class="col-xs-5 col-xs-offset-2">
        <div class="field-group">
          <label class="field-label">Yillik Ortalama Artis</label>
          <InputGroup type="%" :fixed="3" disabled :getter-name="`${scope.join('/')}/memurMaasi/ortalama`"/>
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
          <InputGroup type="%" :fixed="3" :scope="[...scope, 'kamuIscisiUcreti', 'iDonem']"/>
        </div>

        <div class="field-group">
          <label class="field-label">II. Dönem</label>
          <InputGroup type="%" :fixed="3" :scope="[...scope, 'kamuIscisiUcreti', 'iiDonem']"/>
        </div>
      </div>
      <div class="col-xs-5 col-xs-offset-2">
        <div class="field-group">
          <label class="field-label">Yillik Ortalama Artis</label>
          <InputGroup type="%" :fixed="3"  disabled :getter-name="`${scope.join('/')}/kamuIscisiUcreti/ortalama`"/>
        </div>
      </div>
    </div>

    <div class="row start-xs note">
      *Memur maaşı için artış 1. ve 7. aylarda, işçi ücreti için artış 3. ve 9. aylardadır. İkinci artış ilkine eklenerek ortalama hesaplanır.
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
