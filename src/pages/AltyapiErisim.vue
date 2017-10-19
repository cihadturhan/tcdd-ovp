<script>
  import Wrapper from '@@/Wrapper';
  import Fields from '@@/AltyapiErisim/Fields';

  export default {
    extends: Wrapper,
    name: 'altyapiErisim',
    data() {
      return {
        scope: ['altyapiErisim'],
        fields: Fields,
      };
    },
    components: {},
  };
</script>
