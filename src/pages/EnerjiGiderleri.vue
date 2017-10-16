<script>
  import Wrapper from '@@/Wrapper';
  import Fields from '@@/EnerjiGiderleri/Fields';

  export default {
    extends: Wrapper,
    name: 'enerjiGiderleri',
    data() {
      return {
        scope: ['enerjiGiderleri'],
        fields: Fields,
      };
    },
    components: {},
  };
</script>
