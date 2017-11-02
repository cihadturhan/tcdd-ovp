<template>
  <div class="tab-container">
    <ul class="tab-list-container">
      <li class="add-tab" @click.stop="addPrevYear"><i class="typcn typcn-plus add-icon"></i> <small>{{minYear - 1}} </small></li>
      <li @click="onTabClick(index)" v-for="(tab, index) in tabs"
          :class="{active: index == activeIndex}">
        <a href="javascript:void(0)">
          {{tab.title}}
          <i @click.stop="onTabCloseClick(tab.title)"
             v-if="(tab.title === minYear || tab.title === maxYear) && tabs.length > 1"
             class="typcn typcn-times close-tab"></i>
        </a>
      </li>
      <li class="add-tab" @click.stop="addNextYear"><i class="typcn typcn-plus add-icon"></i> <small>{{maxYear + 1}} </small></li>
    </ul>
    <div class="tab-content">
      <section v-if="$store.state[tab.title]" v-for="(tab, index) in tabs"
               v-show="index == activeIndex">
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
    computed: {
      maxYear() {
        return this.$store.state.maxYear;
      },
      minYear() {
        return this.$store.state.minYear;
      },
      tabs() {
        const titles = [];

        for (let year = this.minYear; year <= this.maxYear; year += 1) {
          titles.push({ title: year });
        }
        return titles;
      },
      activeIndex() {
        return this.$store.state.currentYear - this.$store.state.minYear;
      },
    },
    methods: {
      addPrevYear() {
        addNewYear(this.$store, this.minYear - 1);
      },
      addNextYear() {
        addNewYear(this.$store, this.maxYear + 1);
      },
      onTabClick(index) {
        this.$store.commit({ type: 'setYear', year: Number(this.tabs[index].title) });
      },
      onTabCloseClick(year) {
        this.$store.commit({ type: 'removeYear', year: Number(year) });
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

  .close-tab{
    opacity: 0.5;
    &:hover{
      opacity: 1;
    }
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
    &.add-tab{
      color: #2c3e50;
    }
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
