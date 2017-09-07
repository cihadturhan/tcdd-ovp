<template>
  <ul id="menu">
    <li class="active">
      <router-link to="/varsayimlar" class="menu-title">
        <i class="icon-waves"></i>
        <span>VARSAYIMLAR</span>
      </router-link>
    </li>
    <li class="sub-menu">
      <a class="menu-title" href="#">
        <i class="icon-arrow-forward-outline"></i>
        <span>GELİRLER</span>
        <caret></caret>
      </a>
      <ul>
        <li>
          <router-link to="faaliyet-gelirleri">FAALİYET GELİRLERİ</router-link>
        </li>
        <li>
          <router-link to="kamu-hizmet-yukumlulugu">KAMU HİZMET YÜKÜMLÜLÜĞÜ</router-link>
        </li>
        <li>
          <router-link to="faaliyet-disi-gelirler">FAALİYET DIŞI GELİRLER</router-link>
        </li>
      </ul>
    </li>

    <li class="sub-menu collapsed">
      <a class="menu-title">
        <i class="icon-arrow-back-outline"></i>
        <span>GİDERLER</span>
        <caret></caret>
      </a>
      <ul>
        <li>
          <router-link to="faaliyet-gelirleri">FAALİYET GELİRLERİ</router-link>
        </li>
        <li>
          <router-link to="kamu-hizmet-yukumlulugu">KAMU HİZMET YÜKÜMLÜLÜĞÜ</router-link>
        </li>
        <li>
          <router-link to="faaliyet-disi-gelirler">FAALİYET DIŞI GELİRLER</router-link>
        </li>
      </ul>
    </li>

    <li class="sub-menu collapsed">
      <a class="menu-title">

        <i class="icon-arrow-repeat"></i>
        <span>DÖNEM KAR/ZARAR</span>
        <caret></caret>

        </a>
      <ul>
        <li>
          <router-link to="faaliyet-gelirleri">FAALİYET GELİRLERİ</router-link>
        </li>
        <li>
          <router-link to="kamu-hizmet-yukumlulugu">KAMU HİZMET YÜKÜMLÜLÜĞÜ</router-link>
        </li>
        <li>
          <router-link to="faaliyet-disi-gelirler">FAALİYET DIŞI GELİRLER</router-link>
        </li>
      </ul>
    </li>

  </ul>
</template>

<script>
  import caret from './icons/caret';

  export default {
    name: 'appmenu',
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
      & > span{
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
        }}
      }
    }
    & li:not(.sub-menu), .menu-title {
      height: 30px;
      display: flex;
      align-items: center;
    }
  }
</style>
