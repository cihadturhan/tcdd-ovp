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
        <td> 800,865,000</td>
        <td> 705,000,000</td>
        <td> 261,400,000</td>
        <td> 86,000,000</td>
        <td> -</td>
        <td></td>
        <td> 1,853,265,000</td>
        <td> -</td>
        <td> 1,853,265,000</td>
        <td> 1,853,265,000</td>
      </tr>
      <tr class="disabled-light">
        <td> Yolcu Gelirleri</td>
        <td> 82,865,000</td>
        <td> -</td>
        <td> 192,400,000</td>
        <td> 86,000,000</td>
        <td> -</td>
        <td> 361,265,000</td>
        <td> -</td>
        <td> 361,265,000</td>
        <td></td>
        <td> 361,265,000</td>
      </tr>
      <tr>
        <td> Yurtiçi Yolcu Gelirleri</td>
        <td> 81,713,000</td>
        <td> -</td>
        <td> 192,400,000</td>
        <td> 86,000,000</td>
        <td> -</td>
        <td></td>
        <td> 360,113,000</td>
        <td> -</td>
        <td> 360,113,000</td>
        <td> 360,113,000</td>
      </tr>
      <tr>
        <td> Banliyo</td>
        <td> 120,000</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td> 120,000</td>
        <td></td>
        <td> 120,000</td>
        <td> 120,000</td>
      </tr>
      <tr>
        <td> Bölgesel</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td> -</td>
        <td></td>
        <td> -</td>
        <td> -</td>
      </tr>
      <tr>
        <td> Anahat</td>
        <td> 78,256,000</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td> 78,256,000</td>
        <td></td>
        <td> 78,256,000</td>
        <td> 78,256,000</td>
      </tr>
      <tr>
        <td> Marmaray</td>
        <td></td>
        <td></td>
        <td></td>
        <td> 86,000,000</td>
        <td></td>
        <td></td>
        <td> 86,000,000</td>
        <td></td>
        <td> 86,000,000</td>
        <td> 86,000,000</td>
      </tr>
      <tr>
        <td> YHT</td>
        <td></td>
        <td></td>
        <td is="TableRowInput" :scope="[...scope, 'faaliyetGiderleri','']"></td>
        <td></td>
        <td></td>
        <td></td>
        <td> 192,400,000</td>
        <td></td>
        <td> 192,400,000</td>
        <td> 192,400,000</td>
      </tr>
      <tr>
        <td> Diğer yolcu gelirleri</td>
        <td> 3,337,000</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td> 3,337,000</td>
        <td></td>
        <td> 3,337,000</td>
        <td> 3,337,000</td>
      </tr>
      <tr>
        <td> Yurtdışı Yolcu Gelirleri</td>
        <td> 1,152,000</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td> 1,152,000</td>
        <td></td>
        <td> 1,152,000</td>
        <td> 1,152,000</td>
      </tr>
      <tr>
        <td> Yük Gelirleri</td>
        <td> -</td>
        <td> 705,000,000</td>
        <td> -</td>
        <td> -</td>
        <td> -</td>
        <td></td>
        <td> 705,000,000</td>
        <td> -</td>
        <td> 705,000,000</td>
        <td> 705,000,000</td>
      </tr>
      <tr>
        <td> Yurtiçi Yük Gelirleri</td>
        <td></td>
        <td> 626,756,000</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td> 626,756,000</td>
        <td></td>
        <td> 626,756,000</td>
        <td> 626,756,000</td>
      </tr>
      <tr>
        <td> Yurtdışı Yük Gelirleri</td>
        <td></td>
        <td> 78,244,000</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td> 78,244,000</td>
        <td></td>
        <td> 78,244,000</td>
        <td> 78,244,000</td>
      </tr>
      <tr class="group-title">
        <td> Kamu Hizmet Yükümlülüğü</td>
        <td> 718,000,000</td>
        <td> -</td>
        <td> 69,000,000</td>
        <td> -</td>
        <td> -</td>
        <td></td>
        <td> 787,000,000</td>
        <td> -</td>
        <td> 787,000,000</td>
        <td> 787,000,000</td>
      </tr>
      <tr>
        <td> Banliyö</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td> -</td>
        <td></td>
        <td> -</td>
        <td> -</td>
      </tr>
      <tr>
        <td> Bölgesel</td>
        <td> 391,000,000</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td> 391,000,000</td>
        <td></td>
        <td> 391,000,000</td>
        <td> 391,000,000</td>
      </tr>
      <tr>
        <td> Anahat</td>
        <td> 327,000,000</td>
        <td></td>
        <td></td><td></td>
        <td></td>
        <td></td>
        <td> 327,000,000</td>
        <td></td>
        <td> 327,000,000</td>
        <td> 327,000,000</td>
      </tr>
      <tr>
        <td> Marmaray</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td> -</td>
        <td></td>
        <td> -</td>
        <td> -</td>
      </tr>
      <tr>
        <td> YHT</td>
        <td></td>
        <td></td>
        <td> 69,000,000</td>
        <td></td>
        <td></td>
        <td></td>
        <td> 69,000,000</td>
        <td></td>
        <td> 69,000,000</td>
        <td> 69,000,000</td>
      </tr>
      <tr class="group-title">
        <td> Faaliyet Dışı Gelirler</td>
        <td> 8,000,000</td>
        <td> 32,000,000</td>
        <td> -</td>
        <td> -</td>
        <td> -</td>
        <td></td>
        <td> 40,000,000</td>
        <td> -</td>
        <td> 40,000,000</td>
        <td> 40,000,000</td>
      </tr>
      <tr>
        <td> Hurda satışı</td>
        <td is="TableRowInput" :scope="[...scope, 'faaliyetGiderleri','']"></td>
        <td is="TableRowInput" :scope="[...scope, 'faaliyetGiderleri','']"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td is="TableRowInput" :scope="[...scope, 'faaliyetGiderleri','']"></td>
        <td is="TableRowInput" :scope="[...scope, 'faaliyetGiderleri','']"></td>
        <td></td>
        <td is="TableRowInput" :scope="[...scope, 'faaliyetGiderleri','']"></td>
      </tr>
      <tr>
        <td> Diğer satışlar</td>
        <td> 5,000,000</td>
        <td> 5,000,000</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td> 10,000,000</td>
        <td> 10,000,000</td>
        <td></td>
        <td> 10,000,000</td>
      </tr>
      <tr>
        <td> Diğer gelirler</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td> -</td>
        <td></td>
        <td> -</td>
        <td> -</td>
      </tr>
      <tr class="section-title">
        <td> GELİRLER TOPLAMI</td>
        <td> 808,865,000</td>
        <td> 737,000,000</td>
        <td> 261,400,000</td>
        <td> 86,000,000</td>
        <td> -</td>
        <td></td>
        <td> 1,893,265,000</td>
        <td> -</td>
        <td> 1,893,265,000</td>
        <td> 1,893,265,000</td>
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
      <tr>
        <td> Personel Giderleri</td>
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
        <td> Memur Personel</td>
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
        <td> Sözleşmeli</td>
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
        <td> Daimi İşçi</td>
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
        <td> Geçici İşçi</td>
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
        <td> Malzeme Giderleri</td>
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
        <td> Enerji Giderler</td>
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
        <td> Yakıt (Motorin)</td>
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
        <td> Elektrik Giderleri</td>
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
      <tr>
        <td> Yol Malzemeleri</td>
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
        <td> Çeken - Çekilen Malzemeleri</td>
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
        <td> Tesisler Malzemeler</td>
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
        <td> Genel İşletme ve Bakım Malzemeleri</td>
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
        <td> Yağ, Boya ve Kimyevi Malzemeler</td>
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
        <td> Kırtasiye, Basılı Kağıt ve Bilg Mlz G.</td>
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
      <tr>
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
        <td> Çeken Çekilen Araç Onarımları</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td> -</td>
        <td></td>
        <td></td>
        <td> -</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td> Dahili Bakım ve Onarım giderleri</td>
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
        <td> Bağlı Ortaklık bakım onarım giderleri</td>
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
        <td> Yerüstü ve Yeraltı Düzenleri</td>
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
        <td> Tesis Makine ve Cihaz Onarımları</td>
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
        <td> Binaların bakım ve onarımları</td>
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
      <tr>
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
        <td> Temizlik Hizmet Alımı Giderleri</td>
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
        <td> Araç Hizmet Alımı Giderleri</td>
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
        <td> Gişeler için Hizmet Alımı Gid.</td>
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
        <td> Koruma ve Güvenlik için Hizmet Al</td>
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
        <td> Diğer</td>
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
        <td> Çeken ve çekilen araçlar amortismanı</td>
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
        <td> Tesisler, makinalar ve cihazlar amortism</td>
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
      <tr>
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
      <tr>
        <td> Gaz (Isıtma) Gideri</td>
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
        <td> Su Gideri</td>
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
        <td> Kira Giderleri</td>
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
        <td> Mahkeme ve Noter Giderleri</td>
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
        <td> Eğitim Kültür ve Yayın Giderleri</td>
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
        <td> Vergi ve Sigorta</td>
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
        <td> Haberleşme Giderleri</td>
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
      <tr>
        <td> TCDD Altyapı Erişim ücreti</td>
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
        <td> Faaliyet Dışı Giderler</td>
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
        <td> Faiz ve Komisyon</td>
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
      <tr>
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
        <td> Ö.D. Ait Sözl. Pers. Emeklilik</td>
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
        <td> Ö.D. Ait Kıdem Tazminatları</td>
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
        <td> Ö.D. Ait Memur Emekli İkramiyeleri</td>
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
        <td> Diğer</td>
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
  </div>
</template>


<script>
  import TableRowInput from '@/components/TableRowInput';

  export default {
    computed: {
      scope() {
        return [this.$store.state.currentYear];
      },
    },
    components: {
      TableRowInput,
    },
  };
</script>


<style scoped lang="postcss">
  @import "../styles/colors.css";

  .grid-container{
    flex: 1;
  }

  tr > td:first-child {
    text-align: left;
  }

  td:nth-child(-n + 10):nth-child(n + 10) {
    background-image: linear-gradient(hsla(60, 100%, 60%, 0.36), hsla(60, 100%, 60%, 0.36));
  }

  td:nth-child(-n + 5):nth-child(n + 2) {
    background-image: linear-gradient(rgba(234, 139, 17, 0.36), rgba(234, 139, 17, 0.36));
  }
</style>

