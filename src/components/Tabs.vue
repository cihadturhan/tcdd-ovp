<template>
  <div class="tab-container">
    <ul class="tab-list-container">
      <li @click="activeIndex = index" v-for="(tab, index) in tabs" :class="{active: index == activeIndex}">
        <a href="#">{{tab.title}}</a>
      </li>
    </ul>
    <div class="tab-content">
      <section v-for="(tab, index) in tabs" v-show="index == activeIndex">
        <component :is="tab.content" :scope="[...scope, tab.title]"></component>
      </section>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'tabs',
    props: {
      tabs: Array,
      scope: Array,
    },
    data() {
      return { activeIndex: 0 };
    },
  };
</script>

<style scoped>
  .tab-container{
    margin-top: 22px;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .tab-list-container{
    width: 100%;
  }

  ul{
    flex: 0 0 32px;
    display: flex;
    margin: 0px auto;
    justify-content: center;
  }

  li{
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    &.active{
      background-color: #F7F8FC;
      &::before, &::after{
        content: "";

      }

      & > a {
        color: #2c3e50;
      }
    }

    & > a {
      color: #20AA9D;
      font-size: 20px;
    }
  }

  .tab-content{
    background-color: #F7F8FC;
    flex: 1;
  }

  section{
    padding: 60px 30px;
  }
</style>
