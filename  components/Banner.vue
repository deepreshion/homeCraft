<script setup lang="ts">

</script>

<template>
<div class="banner">
  <div class="menu">
    <a href="#intro">Изготовление мебели</a>
    <a href="#about-us">О нас</a>
    <a href="#contact">Связь</a>
  </div>
  <h1 class="title">Индивидуальная <br> мебель</h1>
  <h3 class="subtitle">Все, как <span class="highlight">вы</span> захотите</h3>
  <a class="btn" href="#contact"><button>Написать</button></a>
</div>
</template>

<style scoped lang="scss">
.banner {
  background-image: url('/public/images/main.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  background-attachment: fixed;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  padding: 30px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
  > * {
    z-index: 2;
  }
}

.title {
  font-size: clamp(48px, 7vw, 120px);
  line-height: 1;
  letter-spacing: .05em;
  text-transform: uppercase;
  margin: 10px 0;
  text-align: right;
}

.subtitle {
  font-size: 36px;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.menu {
  align-self: center;
  margin-bottom: auto;
  display: flex;
  a {
    font-size: 18px;
    text-decoration: none;
    color: inherit;
    display: inline-block;
    transition: .3s linear;
    &:hover {
      color: rgba(255, 255, 255, 0.6);
    }

    &:not(:last-child) {
     &::after {
       content: '';
       border-right: 1px solid white;
       margin-left: 12px;
       margin-right: 12px;
     }
    }
  }
}

.btn {
  margin-bottom: auto;
}

</style>