<template>
  <div class="psuedo-table">
    <div class="table-row">
      <div class="table-col level-1">{{data.label}}</div>
      <div class="table-col" getter-name="`${strParentScope}/enerjiGiderleri/yolcu/motorinGideri`">asdf</div>
      <div class="table-col" getter-name="`${strParentScope}/enerjiGiderleri/lojistik/motorinGideri`">adsfadsf</div>
      <div class="table-col" getter-name="`${strParentScope}/enerjiGiderleri/yht/motorinGideri`">sdfdsf</div>
      <div class="table-col" getter-name="`${strParentScope}/enerjiGiderleri/marmaray/motorinGideri`">fadsf2</div>
      <div class="table-col" getter-name="`${strParentScope}/enerjiGiderleri/aracBakim/motorinGideri`">23423asdf</div>
      <div class="table-col" getter-name="`${strParentScope}/enerjiGiderleri/adf/motorinGideri`">sdfdsfds</div>
      <div class="table-col" ></div>
      <div class="table-col" getter-name="`${strParentScope}/enerjiGiderleri/genelYonetim/motorinGideri`">sdfdsfdsf</div>
      <div class="table-col" >sdfsdfs</div>
      <div class="table-col" >dsfsdf asdfasd </div>
    </div>
    <template v-if="data.children">
      <recursive-table-row :key="expense.name"
                          v-for="expense in data.children"
                          :data="expense"></recursive-table-row>
    </template>
  </div>
</template>

<script>
import { rows } from '@/util/config';

export default {
  computed: {
    rows() {
      return { ...rows };
    },
  },
  props: {
    data: Object,
  },
};
</script>

<style>
.table-row {
    margin-left: -15px;
    margin-right: -15px;
    width: 100%;
}

.table-col {
    padding: 0 15px;
}
</style>

