<template>
  <input
    :value="dividedValue"
    :class="computedClassName"
    @focus="handleFocus"
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
    data() {
      return {
        extraClass: '',
      };
    },
    methods: {
      handleFocus($event) {
        this.focused = true;
        if (this.value === 0) {
          $event.target.select();
        }
      },
      onChange($event) {
        if (this.disabled) {
          return;
        }
        let value = Number($event.target.value.replace(/\./g, '').replace(',', '.'));
        if (isNaN(value)) {
          this.extraClass = 'wrong-value';
          setTimeout(() => {
            this.extraClass = '';
          }, 800);
          value = 0;
        }

        this.$store.commit({
          type: 'change',
          scope: this.scope,
          value: isNaN(value) ? 0 : value,
        });
      },
    },
    computed: {
      computedClassName() {
        if (this.extraClass) {
          return [this.className, this.extraClass];
        }
        return this.className;
      },
    },
  };
</script>

<style scoped>
  @import '../styles/colors.css';

  input {
    padding-right: 5px;
    appearance: none;
    border: none;
    &:disabled {
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

  .wrong-value {
    animation: blink 0.3s 1 alternate;
  }

  @keyframes blink {
    0% {
      box-shadow: 0px 0px 2px var(--lipstick);
    }
    30% {
      box-shadow: 0px 0px 15px var(--lipstick);
    }
    60% {
      box-shadow: 0px 0px 1px var(--lipstick);
    }
    90% {
      box-shadow: 0px 0px 10px var(--lipstick);
    }
  }
</style>
