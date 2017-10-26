<script>
  import Wrapper from '@@/Wrapper';
  import Fields from '@@/GenelIcmal/Fields';

  export default {
    extends: Wrapper,
    name: 'genelIcmal',
    data() {
      return {
        scope: ['genelIcmal'],
        fields: Fields,
        footerShown: false,
      };
    },
    components: {},
  };
</script>
