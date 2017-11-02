<template>
  <fields :scope="scope"></fields>
</template>

<script>
  import fields from '@@/Versiyonlar/Fields';

  export default {
    name: 'versiyonlar',
    data() {
      return {
        scope: ['versiyonlar'],
      };
    },
    components: {
      fields,
    },
  };
</script>
