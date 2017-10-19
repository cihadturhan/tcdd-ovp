<template>
  <div class="chart-content">
    <div class="row center-xs">
      <div class="col-lg-12">
        <div class="panel">
          <highcharts :options="options1"></highcharts>
        </div>
        <div class="panel">
          <highcharts :options="options2"></highcharts>
        </div>
        <div class="panel">
          <highcharts :options="options3"></highcharts>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import Vue from 'vue';
  import VueHighcharts from 'vue-highcharts';
  import Highcharts from 'highcharts';

  Vue.use(VueHighcharts, { Highcharts });

  export default {
    data() {
      return {
        options1: {
          chart: {
            height: 300,
            width: 540,
          },
          title: {
            text: 'Orta Vadeli Gelir ve Gider Karşılaştırması',
          },
          xAxis: {
            categories: ['2017', '2018', '2019', '2020',
            ],
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
            valueSuffix: 'bin TL',
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
            data: [2790, 2840, 2880, 2700],
          }, {
            name: 'Gelir',
            data: [1890, 1980, 2190, 2243],
          }, {
            name: 'Fark',
            data: [820, 780, 640, 510],
          }],
          credits: {
            enabled: false,
          },
        },
        options2: {
          chart: {
            height: 300,
            width: 300,
            type: 'pie',
            innerRadius: 10,
          },
          title: {
            text: 'Gelir Dağılımları',
          },
          tooltip: {
            valueSuffix: 'bin TL',
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
        },

        options3: {
          chart: {
            height: 300,
            width: 300,
            type: 'pie',
            innerRadius: 10,
          },
          title: {
            text: 'Gider Dağılımları',
          },
          tooltip: {
            valueSuffix: 'bin TL',
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
              { name: 'Faaliyet', y: 890 },
              { name: 'Faaliyet Dışı', y: 2980 },
              { name: 'Diğer', y: 2190 },
            ],
          }],
          credits: {
            enabled: false,
          },
        },
      };
    },
  };

</script>


<style>
  .chart-content {
    background-color: #F7F8FC;
    flex: 1;
    padding: 15px 0;
  }

  .panel {
    background: white;
    padding: 15px;
    display: inline-block;
    box-shadow: 0 2px 10px hsla(0, 0%, 0%, 0.1);
    margin-right: 15px;
    margin-bottom: 15px;
  }
</style>
