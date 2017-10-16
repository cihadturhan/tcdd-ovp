<script>
  import Wrapper from '@@/Wrapper';
  import Fields from '@@/PersonelGiderleri/Fields';

  export default {
    extends: Wrapper,
    name: 'personelGiderleri',
    data() {
      return {
        scope: ['personelGiderleri'],
        fields: Fields,
      };
    },
    components: {},
  };
</script>
