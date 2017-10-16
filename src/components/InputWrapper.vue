<template>

</template>
<script>
  export default {
    props: {
      getterName: String,
      scope: { type: Array },
    },
    computed: {
      value() {
        if (this.getterName) {
          let value;
          if (this.scope) {
            value = this.$store.getters[this.getterName](this.scope);
          } else {
            value = this.$store.getters[this.getterName];
          }

          return this.roundOff(value, 4);
        }
        return this.roundOff(this.scope.reduce((p, c) => p[c], this.$store.state), 4);
      },
    },
    methods: {
      roundOff(value, round) {
        return (parseInt(value * (10 ** (round + 1)), 10)
          - (parseInt(value * (10 ** round), 10) * 10)) > 4 ?
          (((parseFloat(parseInt((value + parseFloat(1 / (10 ** round)))
            * (10 ** round), 10)))) / (10 ** round)) :
          (parseFloat(parseInt(value * (10 ** round), 10)) / (10 ** round));
      },
    },
  };
</script>
