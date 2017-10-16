<script>
  import Wrapper from '@@/Wrapper';
  import Fields from '@@/YukGelirleri/Fields';

  export default {
    extends: Wrapper,
    name: 'yukGelirleri',
    data() {
      return {
        scope: ['yukGelirleri'],
        fields: Fields,
      };
    },
    components: {},
  };
</script>
