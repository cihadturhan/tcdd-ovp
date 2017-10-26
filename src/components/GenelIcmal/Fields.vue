<template>
  <div class="ritz grid-container">
    <table class="waffle" cellspacing="0" cellpadding="0">
      <thead>
      <tr>
        <th></th>
        <th colspan="4"> İŞLETME GİDERLERİ</th>
        <th colspan="2"> BAKIM ONARIM GİDERLERİ</th>
        <th> SATIŞLARIN MALİYETİ</th>
        <th> GENEL YÖNETİM GİDERLERİ</th>
        <th> TCDD TAŞIMACILIK</th>
        <th> TOPLAM </th>
      </tr>
      </thead>
      <tbody>
      <tr class="subheading">
        <td></td>
        <td>YOLCU</td>
        <td>LOJİSTİK</td>
        <td>YHT</td>
        <td>MARMARAY</td>
        <td>ARAÇ BAKIM</td>
        <td>ADF</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr class="group-title disabled">
        <td> Faaliyet Gelirleri</td>
        <td is="TableRowDisplay"
            :getter-name="`${strScope}/faaliyetGelirleri/yolcu/toplamGelir`"></td>
        <td is="TableRowDisplay"
            :getter-name="`${strScope}/faaliyetGelirleri/lojistik/toplamGelir`"></td>
        <td is="TableRowDisplay"
            :getter-name="`${strScope}/faaliyetGelirleri/yht/toplamGelir`"></td>
        <td is="TableRowDisplay"
            :getter-name="`${strScope}/faaliyetGelirleri/marmaray/toplamGelir`"></td>
        <td> -</td>
        <td></td>
        <td> 1,853,265,000</td>
        <td> -</td>
        <td> 1,853,265,000</td>
        <td> 1,853,265,000</td>
      </tr>
      <tr class="disabled-light">
        <td> Yolcu Gelirleri</td>
        <td is="TableRowDisplay" :getter-name="`${strScope}/faaliyetGelirleri/yolcu/yolcuGelir`"></td>
        <td>-</td>
        <td is="TableRowDisplay" :getter-name="`${strScope}/faaliyetGelirleri/yht/yolcuGelir`"></td>
        <td is="TableRowDisplay" :getter-name="`${strScope}/faaliyetGelirleri/marmaray/yolcuGelir`"></td>
        <td> -</td>
        <td> -</td>
        <td is="TableRowDisplay" :getter-name="`${strScope}/faaliyetGelirleri/yolcuGelir/toplam`"></td>
        <td>-</td>
        <td is="TableRowDisplay" :getter-name="`${strScope}/faaliyetGelirleri/yolcuGelir/toplam`"></td>
        <td is="TableRowDisplay" :getter-name="`${strScope}/faaliyetGelirleri/yolcuGelir/toplam`"></td>
      </tr>
      <tr>
        <td class="level-1"> Yurtiçi Yolcu Gelirleri</td>
        <td is="TableRowDisplay" :getter-name="`${strScope}/faaliyetGelirleri/yurtici/yolcu/toplam`"></td>
        <td is="TableRowDisplay" :getter-name="`${strScope}/faaliyetGelirleri/yurtici/lojistik/toplam`"></td>
        <td is="TableRowDisplay" :getter-name="`${strScope}/faaliyetGelirleri/yurtici/yht/toplam`"></td>
        <td is="TableRowDisplay" :getter-name="`${strScope}/faaliyetGelirleri/yurtici/marmaray/toplam`"></td>
        <td>-</td>
        <td>-</td>
        <td is="TableRowDisplay" :getter-name="`${strScope}/faaliyetGelirleri/yurtici/toplam`"></td>
        <td> - </td>
        <td is="TableRowDisplay" :getter-name="`${strScope}/faaliyetGelirleri/yurtici/toplam`"></td>
        <td is="TableRowDisplay" :getter-name="`${strScope}/faaliyetGelirleri/yurtici/toplam`"></td>
      </tr>
      <tr>
        <td class="level-2"> Banliyo</td>
        <td is="TableRowDisplay"
            :scope="`${strParentScope}/faaliyetGelirleri/banliyo/ankara/gelir`"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td is="TableRowDisplay"
            :scope="strParentScope + '/faaliyetGelirleri/banliyo/ankara/gelir'"></td>
        <td></td>
        <td is="TableRowDisplay"
            :scope="`${strParentScope}/faaliyetGelirleri/banliyo/ankara/gelir`"></td>
        <td is="TableRowDisplay"
            :scope="`${strParentScope}/faaliyetGelirleri/banliyo/ankara/gelir`"></td>
      </tr>
      <tr>
        <td class="level-2"> Marmaray</td>
        <td></td>
        <td></td>
        <td></td>
        <td is="TableRowDisplay"
            :scope="[...parentScope, 'faaliyetGelirleri', 'banliyo', 'marmaray', 'gelir']"></td>
        <td></td>
        <td></td>
        <td is="TableRowDisplay"
            :scope="[...parentScope, 'faaliyetGelirleri', 'banliyo', 'marmaray', 'gelir']"></td>
        <td></td>
        <td is="TableRowDisplay"
            :scope="[...parentScope, 'faaliyetGelirleri', 'banliyo', 'marmaray', 'gelir']"></td>
        <td is="TableRowDisplay"
            :scope="[...parentScope, 'faaliyetGelirleri', 'banliyo', 'marmaray', 'gelir']"></td>
      </tr>
      <tr>
        <td class="level-2"> Anahat</td>
        <td is="TableRowInput" :scope="[...scope, 'faaliyetGelirleri', 'yurtici', 'anahat']"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td is="TableRowDisplay" :scope="[...scope, 'faaliyetGelirleri', 'yurtici', 'anahat']"></td>
        <td></td>
        <td is="TableRowDisplay" :scope="[...scope, 'faaliyetGelirleri', 'yurtici', 'anahat']"></td>
        <td is="TableRowDisplay" :scope="[...scope, 'faaliyetGelirleri', 'yurtici', 'anahat']"></td>
      </tr>

      <tr>
        <td class="level-2"> YHT</td>
        <td></td>
        <td></td>
        <td is="TableRowDisplay"
            :getter-name="`${strParentScope}/faaliyetGelirleri/anahat/yht/toplamGelir`"></td>
        <td></td>
        <td></td>
        <td></td>
        <td is="TableRowDisplay"
            :getter-name="`${strParentScope}/faaliyetGelirleri/anahat/yht/toplamGelir`"></td>
        <td></td>
        <td is="TableRowDisplay"
            :getter-name="`${strParentScope}/faaliyetGelirleri/anahat/yht/toplamGelir`"></td>
        <td is="TableRowDisplay"
            :getter-name="`${strParentScope}/faaliyetGelirleri/anahat/yht/toplamGelir`"></td>
      </tr>
      <tr>
        <td class="level-2"> Diğer yolcu gelirleri</td>
        <td is="TableRowInput" :scope="[...scope, 'faaliyetGelirleri', 'yurtici', 'diger']"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td is="TableRowDisplay" :scope="[...scope, 'faaliyetGelirleri', 'yurtici', 'diger']"></td>
        <td></td>
        <td is="TableRowDisplay" :scope="[...scope, 'faaliyetGelirleri', 'yurtici', 'diger']"></td>
        <td is="TableRowDisplay" :scope="[...scope, 'faaliyetGelirleri', 'yurtici', 'diger']"></td>
      </tr>
      <tr>
        <td class="level-1"> Yurtdışı Yolcu Gelirleri</td>
        <td is="TableRowDisplay"
            :scope="[...parentScope, 'faaliyetGelirleri', 'anahat', 'konvansiyonel', 'uluslararasi', 'gelir']"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td is="TableRowDisplay"
            :scope="[...parentScope, 'faaliyetGelirleri', 'anahat', 'konvansiyonel', 'uluslararasi', 'gelir']"></td>
        <td></td>
        <td is="TableRowDisplay"
            :scope="[...parentScope, 'faaliyetGelirleri', 'anahat', 'konvansiyonel', 'uluslararasi', 'gelir']"></td>
        <td is="TableRowDisplay"
            :scope="[...parentScope, 'faaliyetGelirleri', 'anahat', 'konvansiyonel', 'uluslararasi', 'gelir']"></td>
      </tr>
      <tr class="disabled-light">
        <td> Yük Gelirleri</td>
        <td> -</td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/yukGelirleri/toplamGelir`"></td>
        <td> -</td>
        <td> -</td>
        <td> -</td>
        <td></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/yukGelirleri/toplamGelir`"></td>
        <td> -</td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/yukGelirleri/toplamGelir`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/yukGelirleri/toplamGelir`"></td>
      </tr>
      <tr>
        <td class="level-1"> Yurtiçi Yük Gelirleri</td>
        <td></td>
        <td is="TableRowDisplay"
            :getter-name="`${strParentScope}/yukGelirleri/yurtici/toplamGelir`"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td is="TableRowDisplay"
            :getter-name="`${strParentScope}/yukGelirleri/yurtici/toplamGelir`"></td>
        <td></td>
        <td is="TableRowDisplay"
            :getter-name="`${strParentScope}/yukGelirleri/yurtici/toplamGelir`"></td>
        <td is="TableRowDisplay"
            :getter-name="`${strParentScope}/yukGelirleri/yurtici/toplamGelir`"></td>
      </tr>
      <tr>
        <td class="level-1"> Yurtdışı Yük Gelirleri</td>
        <td></td>
        <td is="TableRowDisplay"
            :getter-name="`${strParentScope}/yukGelirleri/uluslararasi/toplamGelir`"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td is="TableRowDisplay"
            :getter-name="`${strParentScope}/yukGelirleri/uluslararasi/toplamGelir`"></td>
        <td></td>
        <td is="TableRowDisplay"
            :getter-name="`${strParentScope}/yukGelirleri/uluslararasi/toplamGelir`"></td>
        <td is="TableRowDisplay"
            :getter-name="`${strParentScope}/yukGelirleri/uluslararasi/toplamGelir`"></td>
      </tr>
      <tr class="group-title">
        <td> Kamu Hizmet Yükümlülüğü</td>
        <td is="TableRowDisplay"
            :getter-name="scope.join('/') + '/kamuHizmetYukumlulugu/yolcu/toplamGelir'"></td>
        <td is="TableRowDisplay"
            :getter-name="scope.join('/') + '/kamuHizmetYukumlulugu/lojistik/toplamGelir'"></td>
        <td is="TableRowDisplay"
            :getter-name="scope.join('/') + '/kamuHizmetYukumlulugu/yht/toplamGelir'"></td>
        <td is="TableRowDisplay"
            :getter-name="scope.join('/') + '/kamuHizmetYukumlulugu/marmaray/toplamGelir'"></td>
        <td is="TableRowDisplay"
            :getter-name="scope.join('/') + '/kamuHizmetYukumlulugu/aracBakim/toplamGelir'"></td>
        <td is="TableRowDisplay"
            :getter-name="scope.join('/') + '/kamuHizmetYukumlulugu/adf/toplamGelir'"></td>
        <td> TODO </td>
        <td> -</td>
        <td> TODO</td>
        <td> TODO</td>
      </tr>
      <tr>
        <td> Bölgesel</td>
        <td is="TableRowInput"
            :scope="[...scope, 'kamuHizmetYukumlulugu', 'yolcu', 'bolgesel']"></td>
        <td is="TableRowInput"
            :scope="[...scope, 'kamuHizmetYukumlulugu', 'lojistik', 'bolgesel']"></td>
        <td is="TableRowInput" :scope="[...scope, 'kamuHizmetYukumlulugu', 'yht', 'bolgesel']"></td>
        <td is="TableRowInput"
            :scope="[...scope, 'kamuHizmetYukumlulugu', 'marmaray', 'bolgesel']"></td>
        <td is="TableRowInput"
            :scope="[...scope, 'kamuHizmetYukumlulugu', 'aracBakim', 'bolgesel']"></td>
        <td is="TableRowInput" :scope="[...scope, 'kamuHizmetYukumlulugu', 'adf', 'bolgesel']"></td>
        <td> 391,000,000</td>
        <td></td>
        <td> 391,000,000</td>
        <td> 391,000,000</td>
      </tr>
      <tr>
        <td> Anahat</td>
        <td is="TableRowInput" :scope="[...scope, 'kamuHizmetYukumlulugu', 'yolcu', 'anahat']"></td>
        <td is="TableRowInput"
            :scope="[...scope, 'kamuHizmetYukumlulugu', 'lojistik', 'anahat']"></td>
        <td is="TableRowInput" :scope="[...scope, 'kamuHizmetYukumlulugu', 'yht', 'anahat']"></td>
        <td is="TableRowInput"
            :scope="[...scope, 'kamuHizmetYukumlulugu', 'marmaray', 'anahat']"></td>
        <td is="TableRowInput"
            :scope="[...scope, 'kamuHizmetYukumlulugu', 'aracBakim', 'anahat']"></td>
        <td is="TableRowInput" :scope="[...scope, 'kamuHizmetYukumlulugu', 'adf', 'anahat']"></td>
        <td></td>
        <td> 327,000,000</td>
        <td> 327,000,000</td>
      </tr>
      <tr>
        <td> YHT</td>
        <td is="TableRowInput" :scope="[...scope, 'kamuHizmetYukumlulugu', 'yolcu', 'yht']"></td>
        <td is="TableRowInput" :scope="[...scope, 'kamuHizmetYukumlulugu', 'lojistik', 'yht']"></td>
        <td is="TableRowInput" :scope="[...scope, 'kamuHizmetYukumlulugu', 'yht', 'yht']"></td>
        <td is="TableRowInput" :scope="[...scope, 'kamuHizmetYukumlulugu', 'marmaray', 'yht']"></td>
        <td is="TableRowInput"
            :scope="[...scope, 'kamuHizmetYukumlulugu', 'aracBakim', 'yht']"></td>
        <td is="TableRowInput" :scope="[...scope, 'kamuHizmetYukumlulugu', 'adf', 'yht']"></td>
        <td> 69,000,000</td>
        <td></td>
        <td> 69,000,000</td>
        <td> 69,000,000</td>
      </tr>
      <tr class="group-title">
        <td> Faaliyet Dışı Gelirler</td>
        <td is="TableRowDisplay"
            :getter-name="scope.join('/') + '/faaliyetDisiGelirler/yolcu/toplamGelir'"></td>
        <td is="TableRowDisplay"
            :getter-name="scope.join('/') + '/faaliyetDisiGelirler/lojistik/toplamGelir'"></td>
        <td is="TableRowDisplay"
            :getter-name="scope.join('/') + '/faaliyetDisiGelirler/yht/toplamGelir'"></td>
        <td is="TableRowDisplay"
            :getter-name="scope.join('/') + '/faaliyetDisiGelirler/marmaray/toplamGelir'"></td>
        <td is="TableRowDisplay"
            :getter-name="scope.join('/') + '/faaliyetDisiGelirler/aracBakim/toplamGelir'"></td>
        <td is="TableRowDisplay"
            :getter-name="scope.join('/') + '/faaliyetDisiGelirler/adf/toplamGelir'"></td>
        <td></td>
        <td> -</td>
        <td> 40,000,000</td>
        <td> 40,000,000</td>
      </tr>
      <tr>
        <td> Hurda satışı</td>
        <td is="TableRowInput"
            :scope="[...scope, 'faaliyetDisiGelirler','yolcu', 'hurdaSatisi']"></td>
        <td is="TableRowInput"
            :scope="[...scope, 'faaliyetDisiGelirler','lojistik', 'hurdaSatisi']"></td>
        <td is="TableRowInput"
            :scope="[...scope, 'faaliyetDisiGelirler','yht', 'hurdaSatisi']"></td>
        <td is="TableRowInput"
            :scope="[...scope, 'faaliyetDisiGelirler','marmaray', 'hurdaSatisi']"></td>
        <td is="TableRowInput"
            :scope="[...scope, 'faaliyetDisiGelirler','aracBakim', 'hurdaSatisi']"></td>
        <td is="TableRowInput"
            :scope="[...scope, 'faaliyetDisiGelirler','adf', 'hurdaSatisi']"></td>
        <td>-</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td> Diğer satışlar</td>
        <td is="TableRowInput"
            :scope="[...scope, 'faaliyetDisiGelirler','yolcu', 'digerSatislar']"></td>
        <td is="TableRowInput"
            :scope="[...scope, 'faaliyetDisiGelirler','lojistik', 'digerSatislar']"></td>
        <td is="TableRowInput"
            :scope="[...scope, 'faaliyetDisiGelirler','yht', 'digerSatislar']"></td>
        <td is="TableRowInput"
            :scope="[...scope, 'faaliyetDisiGelirler','marmaray', 'digerSatislar']"></td>
        <td is="TableRowInput"
            :scope="[...scope, 'faaliyetDisiGelirler','aracBakim', 'digerSatislar']"></td>
        <td is="TableRowInput"
            :scope="[...scope, 'faaliyetDisiGelirler','adf', 'digerSatislar']"></td>
        <td>-</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td> Diğer gelirler</td>
        <td is="TableRowInput"
            :scope="[...scope, 'faaliyetDisiGelirler','yolcu', 'digerGelirler']"></td>
        <td is="TableRowInput"
            :scope="[...scope, 'faaliyetDisiGelirler','lojistik', 'digerGelirler']"></td>
        <td is="TableRowInput"
            :scope="[...scope, 'faaliyetDisiGelirler','yht', 'digerGelirler']"></td>
        <td is="TableRowInput"
            :scope="[...scope, 'faaliyetDisiGelirler','marmaray', 'digerGelirler']"></td>
        <td is="TableRowInput"
            :scope="[...scope, 'faaliyetDisiGelirler','aracBakim', 'digerGelirler']"></td>
        <td is="TableRowInput"
            :scope="[...scope, 'faaliyetDisiGelirler','adf', 'digerGelirler']"></td>
        <td>-</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr class="section-title">
        <td> GELİRLER TOPLAMI</td>
        <td is="TableRowDisplay"
            :getter-name="`${strScope}/gelirler/yolcu/toplamGelir`"></td>
        <td is="TableRowDisplay"
            :getter-name="`${strScope}/gelirler/lojistik/toplamGelir`"></td>
        <td is="TableRowDisplay"
            :getter-name="`${strScope}/gelirler/yht/toplamGelir`"></td>
        <td is="TableRowDisplay"
            :getter-name="`${strScope}/gelirler/marmaray/toplamGelir`"></td>
        <td></td>
        <td></td>
        <td is="TableRowDisplay"
            :getter-name="`${strScope}/gelirler/toplam`"></td>
        <td> -</td>
        <td is="TableRowDisplay"
            :getter-name="`${strScope}/gelirler/toplam`"></td>
        <td is="TableRowDisplay"
            :getter-name="`${strScope}/gelirler/toplam`"></td>
      </tr>
      <tr class="group-title">
        <td> Faaliyet Giderleri</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr class="disabled-light">
        <td>Personel Giderleri</td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/yolcu/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/lojistik/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/yht/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/marmaray/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/aracBakim/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/adf/personelGideri`"></td>
        <td></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/genelYonetim/memur/personelGideri`"></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="level-1"> Memur Personel</td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/yolcu/memur/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/lojistik/memur/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/yht/memur/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/marmaray/memur/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/aracBakim/memur/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/adf/memur/personelGideri`"></td>
        <td></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/genelYonetim/memur/personelGideri`"></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="level-1"> Sözleşmeli</td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/yolcu/sozlesmeli/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/lojistik/sozlesmeli/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/yht/sozlesmeli/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/marmaray/sozlesmeli/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/aracBakim/sozlesmeli/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/adf/sozlesmeli/personelGideri`"></td>
        <td></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/genelYonetim/sozlesmeli/personelGideri`"></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="level-1"> Daimi İşçi</td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/yolcu/daimi/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/lojistik/daimi/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/yht/daimi/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/marmaray/daimi/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/aracBakim/daimi/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/adf/daimi/personelGideri`"></td>
        <td></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/genelYonetim/daimi/personelGideri`"></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="level-1"> Geçici İşçi</td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/yolcu/gecici/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/lojistik/gecici/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/yht/gecici/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/marmaray/gecici/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/aracBakim/gecici/personelGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/adf/gecici/personelGideri`"></td>
        <td></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/personelGiderleri/genelYonetim/gecici/personelGideri`"></td>
        <td></td>
        <td></td>
      </tr>
      <tr class="disabled-light">
        <td>Malzeme Giderleri</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr class="disabled-light">
        <td> Enerji Giderleri</td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/enerjiGiderleri/yolcu/toplamGider`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/enerjiGiderleri/lojistik/toplamGider`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/enerjiGiderleri/yht/toplamGider`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/enerjiGiderleri/marmaray/toplamGider`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/enerjiGiderleri/aracBakim/toplamGider`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/enerjiGiderleri/adf/toplamGider`"></td>
        <td></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/enerjiGiderleri/genelYonetim/toplamGider`"></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="level-1"> Yakıt (Motorin)</td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/enerjiGiderleri/yolcu/motorinGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/enerjiGiderleri/lojistik/motorinGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/enerjiGiderleri/yht/motorinGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/enerjiGiderleri/marmaray/motorinGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/enerjiGiderleri/aracBakim/motorinGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/enerjiGiderleri/adf/motorinGideri`"></td>
        <td></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/enerjiGiderleri/genelYonetim/motorinGideri`"></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="level-1"> Elektrik Giderleri</td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/enerjiGiderleri/yolcu/elektrikGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/enerjiGiderleri/lojistik/elektrikGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/enerjiGiderleri/yht/elektrikGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/enerjiGiderleri/marmaray/elektrikGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/enerjiGiderleri/aracBakim/elektrikGideri`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/enerjiGiderleri/adf/elektrikGideri`"></td>
        <td></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/enerjiGiderleri/genelYonetim/elektrikGideri`"></td>
        <td></td>
        <td></td>
      </tr>
      <tr class="disabled-light">
        <td> Dışarıya Yaptırılan Bakım ve Onarım Giderleri</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="level-1"> Çeken Çekilen Araç Onarımları</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="level-2"> Bağlı Ortaklık bakım onarım giderleri</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr >
        <td class="level-2"> Dışarıya Yaptırılan Bakım ve Onarım Giderleri</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td class="level-2"> Dahili Bakım ve Onarım giderleri</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td> -</td>
      </tr>
      <tr>
        <td class="level-1">Diğer</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr class="disabled-light">
        <td> Hizmet Alımları</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="level-1"> Gişeler için Hizmet Alımı Gid.</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="level-1"> Araç Hizmet Alımı Giderleri</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="level-1"> Temizlik Hizmet Alımı Giderleri</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="level-1"> Diğer Hizmet Alımları</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr class="disabled-light">
        <td> Amortismanlar</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="level-1"> Çeken ve çekilen araçlar amortismanı</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="level-1"> Tesisler, makinalar ve cihazlar amortism</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="level-1"> Diğerleri</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr class="disabled-light">
        <td> Dış. Sağlanan Gaz ve Su Gideri</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr class="disabled-light">
        <td> Diğerleri</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr class="group-title">
        <td> TCDD Altyapı Erişim ücreti</td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/altyapiErisim/yolcu/gider`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/altyapiErisim/lojistik/gider`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/altyapiErisim/yht/gider`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/altyapiErisim/marmaray/gider`"></td>
        <td></td>
        <td></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/altyapiErisim/marmaray/gider`"></td>
        <td></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/altyapiErisim/marmaray/gider`"></td>
        <td is="TableRowDisplay" :getter-name="`${strParentScope}/altyapiErisim/marmaray/gider`"></td>
      </tr>
      <tr class="group-title">
        <td> Faaliyet Dışı Giderler</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr class="disabled-light">
        <td> Faiz ve Komisyon</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr class="disabled-light">
        <td> Kambiyo</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td> -</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr class="disabled-light">
        <td> Diğerler</td>
        <td> -</td>
        <td> -</td>
        <td> -</td>
        <td> -</td>
        <td> -</td>
        <td></td>
        <td> -</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="level-1"> Ö.D. Ait Sözl. Pers. Emeklilik</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td> -</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="level-1"> Ö.D. Ait Kıdem Tazminatları</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td> -</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="level-1"> Ö.D. Ait Memur Emekli İkramiyeleri</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td> -</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="level-1"> Diğer</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td> -</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr class="section-title">
        <td> GİDERLER TOPLAMI</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr class="section-title">
        <td> DÖNEM KAR/ZARAR</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td> Faaliyet Kar/Zararı</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td> Faaliyet Dışı Kar/Zarar</td>
        <td> 8,000,000</td>
        <td> 32,000,000</td>
        <td> -</td>
        <td> -</td>
        <td> -</td>
        <td> -</td>
        <td> 40,000,000</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td> Faaliyet Gelirinin Gideri Karşılama Oranı (%)</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td> Toplam Gelirin Toplam Gideri Karşılama Oranı (%)</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td> EBİTDA</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
    </table>

    <recursive-table-row :data="giderler" />
  </div>
</template>


<script>
  import TableRowInput from '@/components/TableRowInput';
  import TableRowDisplay from '@/components/TableRowDisplay';
  import giderler from '@/store/genelIcmal/giderler/template';
  /* eslint-disable */

  /* const flatten = (expense, scope = []) => {
    if (expense.children && expense.children.length) {
      childrenGetters = expense.children.reduce((prev, curr) => [
        ...prev,
        ...flatten(curr, [ ...scope, expense.name ]),
      ], []);
    } else {
      switch (TypeOf(expense.getters)) {
        case 'string':
          childrenGetters = rows.reduce((prev, row) => [
            ...prev,
            // TODO - 
            // [`${scope}/${expense.name}/${row.key}`]:
            //         (s, g, gs, globalGetters) => globalGetters[year + expense.getters.replace('{fieldName}', row.key)],
          ],
           {});
          break;
        case 'array':
          childrenGetters = expense.getters.reduce((prev, getterObj) => ({
            ...prev,
            [`${scope}/${expense.name}/${getterObj.name}`]:
                    (s, g, gs, globalGetters) => globalGetters[year + getterObj.getter],
          }), {});
          break;
        default:
          childrenGetters = {};
      }
    }

    return childrenGetters;
  }*/

  export default {
    data() {
      return { giderler };
    },
    props: {
      scope: Array,
    },
    computed: {
      parentScope() {
        const scope = [...this.scope];
        scope.pop();
        return scope;
      },
      strParentScope() {
        return this.parentScope.join('/');
      },
      strScope() {
        return this.scope.join('/');
      },
      flatGiderler() {
        return; // flatten(this.giderler) ;
      }
    },
    components: {
      TableRowInput,
      TableRowDisplay,
    },
  };
</script>


<style scoped lang="postcss">
  @import "../../styles/colors.css";

  .grid-container {
    flex: 1;
  }

  tr > td:first-child {
    text-align: left;
  }

  td.level-1{
    padding-left: 15px;
  }

  td.level-2{
    padding-left: 30px;
  }

  td.level-3{
    padding-left: 45px;
  }

  td:nth-child(-n + 10):nth-child(n + 10) {
    background-image: linear-gradient(rgba(254, 204, 255, 0.45), rgba(254, 204, 255, 0.45));
  }

  td:nth-child(-n + 5):nth-child(n + 2) {
    background-image: linear-gradient(hsla(211, 86%, 49%, 0.2), hsla(211, 86%, 49%, 0.2));
  }
</style>
