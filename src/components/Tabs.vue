<template>
  <div class="tab-container">
    <ul class="tab-list-container">
      <li @click="onTabClick(index)" v-for="(tab, index) in tabs"
          :class="{active: index == activeIndex}">
        <a href="javascript:void(0)">{{tab.title}}</a>
      </li>
      <li class="add-tab" @click="onNewTabCreated"><i class="icon-plus add-icon"></i></li>
    </ul>
    <div class="tab-content">
      <section v-for="(tab, index) in tabs" v-show="index == activeIndex">
        <component :is="content" :scope="[tab.title, ...scope]"></component>
      </section>
    </div>
  </div>
</template>


<script>
  /* eslint-disable no-underscore-dangle */
  import { addNewYear } from '../store/util';

  export default {
    name: 'tabs',
    props: {
      scope: Array,
      content: Object,
    },
    data() {
      return { activeIndex: 0 };
    },
    computed: {
      tabs() {
        const titles = [];
        const minYear = this.$store.state.minYear;
        const maxYear = this.$store.state.maxYear;

        for (let year = minYear; year <= maxYear; year += 1) {
          titles.push({ title: year });
        }
        return titles;
      },
    },
    methods: {
      onNewTabCreated() {
        const maxYear = this.$store.state.maxYear;
        addNewYear(this.$store, maxYear + 1);
        this.$store.commit('addYear');
      },
      onTabClick(index) {
        this.activeIndex = index;
        this.$store.commit({ type: 'setYear', year: Number(this.tabs[index].title) });
      },
    },
  };
</script>

<style scoped>
  .tab-container {
    margin-top: 22px;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .tab-list-container {
    width: 100%;
  }

  ul {
    flex: 0 0 32px;
    display: flex;
    margin: 0px auto;
    justify-content: center;
  }

  li {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    &.active {
      background-color: #F7F8FC;
      &::before, &::after {
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

  .tab-content {
    background-color: #F7F8FC;
    flex: 1;
  }

  section {
    padding: 60px 30px;
  }

  .add-icon {
    color: var(--tealish)
  }

  .add-tab {
    cursor: pointer;
  }
</style>
