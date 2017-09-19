<script>

  import Wrapper from '@@/Wrapper';
  import Fields from '@@/FaaliyetGelirleri/Fields';

  export default {
    extends: Wrapper,
    name: 'faaliyetGelirleri',
    data() {
      return {
        scope: ['faaliyetGelirleri'],
        fields: Fields,
      };
    },
    components: {},
  };
</script>
