<template>
  <div class="chart-content">
    <div class="row center-xs">
      <div class="col-lg-6">
        <div class="panel">
          <highcharts :options="options1"></highcharts>
        </div>
        <div class="panel">
          <highcharts :options="options4"></highcharts>
        </div>
        <div class="panel">
          <highcharts :options="options5"></highcharts>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="panel">
          <highcharts :options="gelirDaginim"></highcharts>
        </div>
        <div class="panel">
          <highcharts :options="giderDaginim"></highcharts>
        </div>
        <!--<div class="panel">
          <highcharts :options="options2"></highcharts>
        </div>-->
      </div>
    </div>
  </div>
</template>


<script>
  import Vue from 'vue';
  import VueHighcharts from 'vue-highcharts';
  import Highcharts from 'highcharts';
  import { rows } from '@/util/config';

  Vue.use(VueHighcharts, { Highcharts });

  export default {
    computed: {
      years() {
        const state = this.$store.state;
        const result = [];
        for (let year = state.minYear; year <= state.maxYear; year += 1) {
          result.push(year);
        }
        return result;
      },
      giderler() {
        const getters = this.$store.getters;
        return this.years.map(year => Math.round(getters[`${year}/genelIcmal//gelirler/genelToplam/toplam`] / 1000));
      },
      gelirlerBreakdown() {
        const { getters } = this.$store;
        const breakdowns = ['faaliyetGelirleri', 'kamuHizmetYukumlulugu', 'faaliyetDisiGelirler'];
        return breakdowns.map(breakdown => ({
          data: this.years.map(year =>
            Math.round(getters[`${year}/genelIcmal//gelirler/${breakdown}/genelToplam/toplam`] / 1000),
          ),
          name: breakdown,
        }));
      },
      giderlerBreakdown() {
        const { getters } = this.$store;
        const breakdowns = ['faaliyetGiderleri', 'faaliyetDisiGiderler'];
        return breakdowns.map(breakdown => ({
          data: this.years.map(year =>
            Math.round(getters[`${year}/genelIcmal//giderler/${breakdown}/genelToplam/toplam`] / 1000),
          ),
          name: breakdown,
        }));
      },
      giderlerDistribution() {
        const { getters } = this.$store;
        return rows.map(({ key }) => ({
          data: this.years.map(year =>
            Math.round(getters[`${year}/genelIcmal//giderler/${key}/toplam`] / 1000),
          ),
          name: key,
        }));
      },
      gelirlerDistribution() {
        const { getters } = this.$store;
        return rows.map(({ key }) => ({
          data: this.years.map(year =>
            Math.round(getters[`${year}/genelIcmal//gelirler/${key}/toplam`] / 1000),
          ),
          name: key,
        }));
      },
      gelirler() {
        const getters = this.$store.getters;
        return this.years.map(year => Math.round(getters[`${year}/genelIcmal//giderler/genelToplam/toplam`] / 1000));
      },
      farklar() {
        return this.giderler.map((d, i) => d - this.gelirler[i]);
      },
      options1() {
        return {
          chart: {
            height: 300,
            type: 'spline',
          },
          title: {
            text: 'Orta Vadeli Gelir ve Gider Karşılaştırması',
          },
          xAxis: {
            categories: this.years,
          },
          yAxis: {
            title: {
              text: 'Birim (Bin TL)',
            },
            plotLines: [{
              value: 0,
              width: 1,
              color: '#808080',
            }],
          },
          tooltip: {
            valueSuffix: ' Bin TL',
          },
          legend: {
            layout: 'vertical',
            align:
              'right',
            verticalAlign:
              'middle',
            borderWidth:
              0,
          },
          series: [{
            name: 'Gider',
            data: this.giderler,
          }, {
            name: 'Gelir',
            data: this.gelirler,
          }, {
            name: 'Fark',
            data: this.farklar,
          }],
          credits: {
            enabled: false,
          },
        };
      },
      options2() {
        return {
          chart: {
            height: 300,
            type: 'pie',
            innerRadius: 10,
          },
          title: {
            text: 'Gelir Dağılımları',
          },
          tooltip: {
            valueSuffix: ' Bin TL',
          },
          legend: {
            layout: 'vertical',
            align:
              'right',
            verticalAlign:
              'middle',
            borderWidth:
              0,
          },
          series: [{
            size: '80%',
            innerSize: '60%',
            name: 'Gelir',
            data: [
              { name: 'Faaliyet Gelirleri', y: 1890 },
              { name: 'Faaliyet Dışı Gelirler', y: 1280 },
              { name: 'Kamu Hizmet Yükümlülüğü', y: 1400 },
              { name: 'Diğer Gelirler', y: 2190 },
            ],
          }],
          credits: {
            enabled: false,
          },
        };
      },
      options4() {
        return {
          chart: {
            height: 300,
            type: 'areaspline',
          },
          title: {
            text: 'Yıllara Göre Gelir Kırınımları',
          },
          xAxis: {
            categories: this.years,
          },
          yAxis: {
            title: {
              text: 'Birim (Bin TL)',
            },
            plotLines: [{
              value: 0,
              width: 1,
              color: '#808080',
            }],
          },
          tooltip: {
            valueSuffix: ' Bin TL',
          },
          plotOptions: {
            areaspline: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                lineWidth: 1,
                lineColor: '#666666',
              },
            },
          },
          series: this.gelirlerBreakdown,
          credits: {
            enabled: false,
          },
        };
      },
      options5() {
        return {
          chart: {
            height: 300,
            type: 'areaspline',
          },
          title: {
            text: 'Yıllara Göre Gider Kırınımları',
          },
          xAxis: {
            categories: this.years,
          },
          yAxis: {
            title: {
              text: 'Birim (Bin TL)',
            },
            plotLines: [{
              value: 0,
              width: 1,
              color: '#808080',
            }],
          },
          tooltip: {
            valueSuffix: ' Bin TL',
          },
          plotOptions: {
            areaspline: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                lineWidth: 1,
                lineColor: '#666666',
              },
            },
          },
          series: this.giderlerBreakdown,
          credits: {
            enabled: false,
          },
        };
      },
      giderDaginim() {
        return {
          chart: {
            height: 300,
            type: 'column',
          },
          title: {
            text: 'Yıllara Göre Gider Dağınımları',
          },
          xAxis: {
            categories: this.years,
          },
          yAxis: {
            min: 0,
            title: {
              text: 'Gider (Bin TL)',
            },
            stackLabels: {
              enabled: true,
              style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray',
              },
            },
          },
          tooltip: {
            valueSuffix: ' Bin TL',
          },
          credits: {
            enabled: false,
          },
          series: this.giderlerDistribution,
        };
      },
      gelirDaginim() {
        return {
          chart: {
            height: 300,
            type: 'column',
          },
          title: {
            text: 'Yıllara Göre Gelir Dağınımları',
          },
          xAxis: {
            categories: this.years,
          },
          yAxis: {
            min: 0,
            title: {
              text: 'Gelir (Bin TL)',
            },
            stackLabels: {
              enabled: true,
              style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray',
              },
            },
          },
          tooltip: {
            valueSuffix: ' Bin TL',
          },
          credits: {
            enabled: false,
          },
          series: this.gelirlerDistribution,
        };
      },
    },
  };

</script>


<style>
  .chart-content {
    background-color: #F7F8FC;
    flex: 1;
    padding: 15px 0;
    overflow: auto;
  }

  .panel {
    background: white;
    padding: 15px;
    display: inline-block;
    box-shadow: 0 2px 10px hsla(0, 0%, 0%, 0.1);
    margin-right: 15px;
    margin-bottom: 15px;
    border-radius: 5px;
    width: 100%;
  }
</style>
