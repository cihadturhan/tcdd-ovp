<template>

</template>
<script>
  export default {
    props: {
      getterName: String,
      scope: [Array, String],
      divider: Number,
      fixed: Number,
    },
    data() {
      return {
        focused: false,
      };
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

        let currentScope;
        if (typeof this.scope === 'string') {
          currentScope = this.scope.split('/');
        } else {
          currentScope = this.scope;
        }
        return this.roundOff(currentScope.reduce((p, c) => p[c], this.$store.state), 4);
      },
      dividedValue() {
        let val = 0;
        if (this.divider && !this.focused) {
          val = Math.round(this.value / this.divider);
        } else {
          val = this.value;
        }

        const opts = this.fixed > 0 ? {
          minimumSignificantDigits: this.fixed,
          maximumSignificantDigits: this.fixed,
        } : {};
        return val.toLocaleString(
          'tr-TR', // use a string like 'en-US' to override browser locale
          opts,
        );
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
