<template>
<div class="banner">
  <img src="/images/selena_logo.png" alt="Селена" class="mobile-logo">
  <h1 class="title">Индивидуальная <br> мебель</h1>
  <h3 class="subtitle">Все, как <span class="highlight">вы</span> захотите</h3>
  <a class="btn" href="#contact"><button>Написать</button></a>
</div>
</template>

<style scoped lang="scss">
.banner {
  margin-top: -80px;
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
  padding: 0 30px 30px;
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
  font-size: clamp(32px, 6.5vw, 120px);
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

.mobile-logo {
  width: 140px;
  padding-top: 20px;
  align-self: center;
  @media (min-width: 769px) {
    display: none;
  }
}

@media (max-width: 768px) {
  .banner {
    padding: 0 16px 16px;
  }
  .title {
    font-size: clamp(14px, 6vw, 28px);
    margin-top: auto;
    br {
      display: none;
    }
  }

  .subtitle {
    font-size: 24px;
  }

  .btn {
    margin-bottom: auto;
  }
}

@media (max-width: 480px) {

}
</style>