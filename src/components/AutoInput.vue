<template>
  <input type="number"
         :value="focused ? value : dividedValue"
         :class="className"
         @focus="focused = true"
         @blur="focused = false"
         @input="onChange"
         :disabled="disabled || getterName"/>

</template>

<script>
  import InputWrapper from './InputWrapper';

  export default {
    extends: InputWrapper,
    props: {
      disabled: Boolean,
      className: { type: String },
    },
    methods: {
      onChange($event) {
        if (this.disabled) {
          return;
        }
        this.$store.commit({
          type: 'change',
          scope: this.scope,
          value: parseFloat($event.target.value),
        });
      },
    },
  };
</script>

<style scoped>
  @import '../styles/colors.css';

  input {
    appearance: none;
    border: none;
    &:disabled{
      color: inherit;
    }
  }

  .text-input {
    font-weight: 500;
    line-height: 1.75;
    text-align: right;
    color: var(--charcoal-grey);
    background-color: var(--full-white);
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    box-shadow: inset 0 0 2px 0 rgba(55, 59, 82, 0.3);
    &:disabled {
      background-color: var(--pale-grey-two);
      color: var(--battleship-grey);
    }
  }
</style>
