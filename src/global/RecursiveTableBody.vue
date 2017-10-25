<template>
  <>
  <tr>
    <td class="level-1">{{data.label}}</td>
    <td is="TableRowDisplay"
        :getter-name="`${strParentScope}/enerjiGiderleri/yolcu/motorinGideri`"></td>
    <td is="TableRowDisplay"
        :getter-name="`${strParentScope}/enerjiGiderleri/lojistik/motorinGideri`"></td>
    <td is="TableRowDisplay"
        :getter-name="`${strParentScope}/enerjiGiderleri/yht/motorinGideri`"></td>
    <td is="TableRowDisplay"
        :getter-name="`${strParentScope}/enerjiGiderleri/marmaray/motorinGideri`"></td>
    <td is="TableRowDisplay"
        :getter-name="`${strParentScope}/enerjiGiderleri/aracBakim/motorinGideri`"></td>
    <td is="TableRowDisplay"
        :getter-name="`${strParentScope}/enerjiGiderleri/adf/motorinGideri`"></td>
    <td></td>
    <td is="TableRowDisplay"
        :getter-name="`${strParentScope}/enerjiGiderleri/genelYonetim/motorinGideri`"></td>
    <td></td>
    <td></td>
  </tr>
  <template v-if="data.children">
    <recursive-table-row key="expense.name"
                         v-for="expense in data.children"
                         data="expense"></recursive-table-row>
  </template>
  </>
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
