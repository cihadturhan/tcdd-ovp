<template>
  <ul id="menu">
    <li>
      <router-link to="/anasayfa">ANA SAYFA</router-link>
    </li>
    <li class="active">
      <router-link to="/varsayimlar" class="menu-title">
        <i class="typcn typcn-waves"></i>
        <span>VARSAYIMLAR</span>
      </router-link>
    </li>
    <li class="sub-menu" ref="li1" @click="show('li1')" :class="shown.li1">
      <a class="menu-title" href="javascript:void(0)">
        <i class="typcn typcn-arrow-forward-outline"></i>
        <span>GELİRLER</span>
        <caret></caret>
      </a>
      <ul>
        <li>
          <router-link to="faaliyet-gelirleri">FAALİYET GELİRLERİ</router-link>
        </li>
        <li>
          <router-link to="yuk-gelirleri">YÜK GELİRLERİ</router-link>
        </li>
      </ul>
    </li>

    <li class="sub-menu" ref="li2" @click="show('li2')" :class="shown.li2">
      <a class="menu-title" href="javascript:void(0)">
        <i class="typcn typcn-arrow-back-outline"></i>
        <span>GİDERLER</span>
        <caret></caret>
      </a>
      <ul>
        <li>
          <router-link to="personel-giderleri">PERSONEL GİDERLERİ</router-link>
        </li>
        <li>
          <router-link to="enerji-giderleri">ENERJİ GİDERLERİ</router-link>
        </li>
        <li>
          <router-link to="altyapi-erisim">ALTYAPI ERİŞİM ÜCRETLERİ</router-link>
        </li>
      </ul>
    </li>

    <li class="sub-menu" ref="li3" @click="show('li3')" :class="shown.li3">
      <a class="menu-title" href="javascript:void(0)">

        <i class="typcn typcn-arrow-repeat"></i>
        <span>DÖNEM KAR/ZARAR</span>
        <caret></caret>

      </a>
      <ul>
        <li>
          <router-link to="genel-icmal">GENEL İCMAL</router-link>
        </li>
      </ul>
    </li>

  </ul>
</template>

<script>
  import caret from './icons/caret';

  export default {
    name: 'appmenu',
    data() {
      return {
        items: {
          li1: { hide: true },
          li2: { hide: true },
          li3: { hide: true },
        },
        activeIndex: null,
      };
    },
    mounted() {
      const hasActive = Object.entries(this.items).find((entry) => {
        const el = this.$refs[entry[0]];
        return !!Array.from(el.querySelectorAll('a')).find(child => Array.from(child.classList).indexOf('active') > -1, false);
      });

      if (hasActive) {
        this.activeIndex = hasActive[0];
      }
    },
    watch: {
      activeIndex(newValue, oldValue) {
        if (oldValue) {
          this.items[oldValue].hide = true;
        }
        this.items[newValue].hide = false;
      },
    },
    computed: {
      shown() {
        return Object.entries(this.items).reduce((p, c) => {
          const prev = p;
          prev[c[0]] = c[1].hide ? 'collapsed' : '';
          return prev;
        }, {});
      },
    },
    methods: {
      show(index) {
        this.activeIndex = index;
      },
    },
    components: {
      caret,
    },
  };
</script>

<style>
  li {
    list-style: none;
  }

  #menu {
    padding-top: 30px;
    width: 266px;
    background-color: #373B52;
    color: white;
    text-align: left;
    & a {
      color: #F9F9F9;
      font-weight: 500;
    }

    & i {
      font-size: 20px;
      margin-right: 3px;
    }

    & > li {
      padding-left: 17px;
      position: relative;
      a.active::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: hsla(0, 100%, 100%, 0.1);
        border-left: 5px solid #7BBDB7;
      }
    }

    & .menu-title {
      display: flex;
      align-items: center;
      & > span {
        margin-right: 5px;
      }
    }

    & li.sub-menu {
      &.collapsed > ul {
        display: none;
      }
      & > ul {
        & > li {
          padding-left: 30px;
          position: relative;
          & > a {
            color: #CFD2E6;
            font-size: 13px;
          }
        }
      }
    }
    & li:not(.sub-menu), .menu-title {
      height: 30px;
      display: flex;
      align-items: center;
    }
  }
</style>
