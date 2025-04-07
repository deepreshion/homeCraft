<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const toggleBodyScroll = (disable: boolean) => {
  if (disable) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

watch(isMobileMenuOpen, (newValue) => {
  toggleBodyScroll(newValue);
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  toggleBodyScroll(false);
});
</script>

<template>
  <div class="menu" :class="['is-header', isScrolled ? 'is-scrolled' : '']">
    <img src="/images/selena_logo.png" alt="Селена" class="logo">
    <nav class="menu-items">
      <div class="desktop-menu">
        <a href="#intro">Изготовление мебели</a>
        <a href="#about-us">О нас</a>
        <a href="#contact">Контакты</a>
      </div>
      <div v-if="!isMobileMenuOpen" class="mobile-menu">
        <button @click="toggleMobileMenu" class="burger-button">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  </div>
  <div :class="['mobile-menu-overlay', isMobileMenuOpen ? 'is-open' : '']">
    <div @click="toggleMobileMenu" class="close-button">
      <span></span>
      <span></span>
    </div>
    <nav class="mobile-menu-items">
      <a href="#intro" @click="toggleMobileMenu">Изготовление мебели</a>
      <a href="#about-us" @click="toggleMobileMenu">О нас</a>
      <a href="#contact" @click="toggleMobileMenu">Контакты</a>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.menu {
  box-sizing: border-box;
  width: 100%;
  align-self: center;
  margin-bottom: auto;
  display: flex;
  top: 0;
  z-index: 1000;
  padding: 30px;
  transition: .2s ease-in;
  overflow: hidden;
  justify-content: center;
  background-color: transparent;
  position: sticky;
  height: 80px;
  .logo {
    position: absolute;
    left: 30px;
    top: 10px;
    height: 60px;
    width: auto;
  }
  .menu-items {
    transition: .3s ease-in;
    display: flex;
    justify-content: center;
  }
  a {
    font-size: 18px;
    text-decoration: none;
    display: inline-block;
    transition: .3s ease-in;
    color: #fff;
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
  @media (min-width: 768px) {
    &.is-scrolled {
      background-color: rgba(0, 0, 0, 0.4);
      .menu-items {
        transform: translateX(calc(50vw - 63%));
      }
    }
  }
}

.mobile-menu {
  display: none;
}

.burger-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30px;
  width: 35px;
  border-radius: 4px;
  padding: 5px;
  box-shadow: none;
  span {
    background-color: #fff;
    height: 3px;
    width: 100%;
    transition: all 0.3s ease;
  }
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;

  &.is-open {
    opacity: 1;
    visibility: visible;
  }

  .mobile-menu-items {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      font-size: 24px;
      color: #fff;
      text-decoration: none;
      margin: 15px 0;
      transition: .3s ease-in;

      &:hover {
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }

  .close-button {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    cursor: pointer;

    span {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #fff;
      transform-origin: center;

      &:first-child {
        transform: rotate(45deg);
      }

      &:last-child {
        transform: rotate(-45deg);
      }
    }
  }
}

@media (max-width: 767px) {
  .menu {
    justify-content: flex-end;
    width: 80px;
    margin-left: auto;
    padding: 25px;
    .menu-items {
      justify-content: flex-end;
    }
    &.is-scrolled {
      .burger-button {
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 10px;
        span {
          background-color: rgba(0, 0, 0, 0.4);
        }
      }
    }
  }

  .desktop-menu {
    display: none;
  }

  .mobile-menu {
    display: block;
  }
}
</style>