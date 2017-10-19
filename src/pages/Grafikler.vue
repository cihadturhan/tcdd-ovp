<template>
  <fields :scope="scope"></fields>
</template>

<script>
  import fields from '@@/Grafikler/Fields';

  export default {
    name: 'grafikler',
    data() {
      return {
        scope: ['grafikler'],
      };
    },
    components: {
      fields,
    },
  };
</script>
