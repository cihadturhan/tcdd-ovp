<script>
  import Wrapper from '@@/Wrapper';
  import Fields from '@@/Varsayimlar/Fields';

  export default {
    extends: Wrapper,
    name: 'varsayimlar',
    data() {
      return {
        scope: ['varsayimlar'],
        fields: Fields,
      };
    },
    components: {},
  };
</script>
