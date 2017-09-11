<template>
  <div class="input-group">
    <input type="number" class="text-input" :value="value" @input="onChange" :disabled="disabled"/>
    <div class="input-group-addon">
      <span>{{type}}</span>
    </div>
  </div>
</template>

<script>
  import debounce from 'debounce';

  export default {
    props: {
      type: String,
      disabled: Boolean,
      scope: { type: Array, required: true },
    },
    computed: {
      value() {
        return this.scope.reduce((p, c) => p[c], this.$store.state);
      },
    },
    created() {
      this.onChange = debounce(this.onChange, 300);
    },
    methods: {
      onChange($event) {
        this.$store.commit({
          type: 'change',
          scope: this.scope,
          value: parseInt($event.target.value, 10),
        });
      },
    },
  };
</script>

<style scoped>
  .input-group {
    display: flex;

  }

  input {
    appearance: none;
    border: none;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    box-shadow: inset 0 0 2px 0 rgba(55, 59, 82, 0.3);
    background-color: var(--full-white);
  }

  input:disabled{
    background-color: var(--pale-grey-two);
  }

  .input-group-addon {
    background: rgba(6, 129, 204, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
</style>


