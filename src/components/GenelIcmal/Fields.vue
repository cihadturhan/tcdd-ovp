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
        <td is="TableRowDisplay"
            :getter-name="`${strScope}/faaliyetGelirleri/yolcu/yolcuGelir`"></td>
        <td>-</td>
        <td is="TableRowDisplay" :getter-name="`${strScope}/faaliyetGelirleri/yht/yolcuGelir`"></td>
        <td is="TableRowDisplay"
            :getter-name="`${strScope}/faaliyetGelirleri/marmaray/yolcuGelir`"></td>
        <td> -</td>
        <td> -</td>
        <td is="TableRowDisplay"
            :getter-name="`${strScope}/faaliyetGelirleri/yolcuGelir/toplam`"></td>
        <td>-</td>
        <td is="TableRowDisplay"
            :getter-name="`${strScope}/faaliyetGelirleri/yolcuGelir/toplam`"></td>
        <td is="TableRowDisplay"
            :getter-name="`${strScope}/faaliyetGelirleri/yolcuGelir/toplam`"></td>
      </tr>
      <tr>
        <td class="level-1"> Yurtiçi Yolcu Gelirleri</td>
        <td is="TableRowDisplay"
            :getter-name="`${strScope}/faaliyetGelirleri/yurtici/yolcu/toplam`"></td>
        <td is="TableRowDisplay"
            :getter-name="`${strScope}/faaliyetGelirleri/yurtici/lojistik/toplam`"></td>
        <td is="TableRowDisplay"
            :getter-name="`${strScope}/faaliyetGelirleri/yurtici/yht/toplam`"></td>
        <td is="TableRowDisplay"
            :getter-name="`${strScope}/faaliyetGelirleri/yurtici/marmaray/toplam`"></td>
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

      <tr>
        <td colspan="11"> &nbsp; </td>
      </tr>


      <tr v-for="flatGider in flatGiderler" :class="classNames[flatGider.level]">
        <td>{{flatGider.label}}</td>

        <td v-for="col in flatGider.cols"
            :is="col.scope ? 'TableRowInput' : 'TableRowDisplay'"
            v-bind="{[col.scope ? 'scope' : 'getterName']: col.scope || col.getter}">
        </td>
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
  import TableRowDisplay from '@/components/TableRowDisplay';
  import giderler from '@/store/genelIcmal/giderler/template';
  import { TypeOf } from '@/store/genelIcmal/util';
  import { rows } from '@/util/config';


  export default {
    data() {
      return {
        classNames: ['section-title', 'group-title', 'disabled-light', 'level-1', 'level-2', 'level-3'],
        giderler,
      };
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
        const [first, ...rest] = this.flatten(this.giderler);
        return [...rest, first];
      },
    },
    methods: {
      flatten(expense, scope = []) {
        let parentExpense;
        const currScope = `${this.strScope}/${scope.join('/')}${scope.length ? '/' : ''}`;
        let childrenExpense;
        if (expense.children && expense.children.length) {
          parentExpense = {
            label: expense.label,
            level: scope.length,
            cols: rows.reduce((prev, row) => [
              ...prev,
              {
                getter: `${currScope}${expense.name}/${row.key}/toplam`,
              },
            ], []),
          };

          childrenExpense = [parentExpense, ...expense.children.reduce((prev, curr) => {
            let child = this.flatten(curr, [...scope, expense.name]);
            if (TypeOf(child) === 'object') {
              child = [child];
            }
            return [
              ...prev,
              ...child,
            ];
          }, [])];
        } else {
          switch (TypeOf(expense.getters)) {
            case 'string':
              childrenExpense = {
                label: expense.label,
                level: scope.length,
                cols: rows.reduce((prev, row) => [
                  ...prev,
                  {
                    getter: `${currScope}${expense.name}/${row.key}`,
                  },
                ], []),
              };
              break;
            case 'array': {
              const expenseGetterObj = expense.getters
                .reduce((prev, getterObj) => ({ ...prev, [getterObj.name]: getterObj.getter }), {});

              childrenExpense = {
                label: expense.label,
                level: scope.length,
                cols: rows.reduce((prev, row) => {
                  if (row.key in expenseGetterObj) {
                    return [
                      ...prev,
                      {
                        getter: `${currScope}${expense.name}/${row.key}`,
                      }];
                  }
                  return [
                    ...prev,
                    {
                      scope: [...this.scope, ...scope, expense.name, row.key],
                    }];
                }, []),
              };
              break;
            }
            case 'undefined':
              childrenExpense = {
                label: expense.label,
                level: scope.length,
                cols: rows.reduce((prev, row) => [
                  ...prev,
                  {
                    scope: [...this.scope, ...scope, expense.name, row.key],
                  }], []),
              };
              break;
            default:
              childrenExpense = {};
          }
        }

        if (childrenExpense.cols) {
          childrenExpense.cols.splice(6, 0, {
            getter: `${currScope}${expense.name}/satislarinMaaliyeti`,
          });
          childrenExpense.cols.push({
            getter: `${currScope}${expense.name}/tcddTasimacilik`,
          });
          childrenExpense.cols.push({
            getter: `${currScope}${expense.name}/genelToplam`,
          });
        } else {
          parentExpense.cols.splice(6, 0, {
            getter: `${currScope}${expense.name}/satislarinMaaliyeti`,
          });
          parentExpense.cols.push({
            getter: `${currScope}${expense.name}/tcddTasimacilik`,
          });
          parentExpense.cols.push({
            getter: `${currScope}${expense.name}/genelToplam`,
          });
        }

        return childrenExpense;
      },
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

  .level-1 > td:first-child {
    padding-left: 15px;
  }

  .level-2 > td:first-child {
    padding-left: 30px;
  }

  .level-3 > tr:first-child {
    padding-left: 45px;
  }

  td:nth-child(-n + 10):nth-child(n + 10) {
    background-image: linear-gradient(rgba(254, 204, 255, 0.45), rgba(254, 204, 255, 0.45));
  }

  td:nth-child(-n + 5):nth-child(n + 2) {
    background-image: linear-gradient(hsla(211, 86%, 49%, 0.2), hsla(211, 86%, 49%, 0.2));
  }
</style>
