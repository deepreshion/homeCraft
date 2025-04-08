<script setup lang="ts">

</script>

<template>
  <div id="about-us" class="about-us">
    <div class="responsive-container-block bigContainer">
      <div class="responsive-container-block Container bottomContainer">
        <div class="allText bottomText">
          <p class="text-blk headingText text-green">
            О нас
          </p>
          <p class="text-blk subHeadingText">
            Мебельная компания «Селена»
          </p>
          <p class="text-blk description">
            Мы создаем уникальную мебель по Вашим индивидуальным заказам.
            Наша профессиональная команда работает над тем, чтобы воплотить Ваши идеи в жизнь используя только лучшие материалы и передовые технологии.
            Мы предлагаем полный цикл услуг - от дизайна до установки.
            Давайте вместе создадим мебель Вашей мечты!
          </p>
          <a class="btn" href="#contact"><button>Далее</button></a>
        </div>
        <div class="videoContainer">
          <div class="dotsImg image-block" />
          <img src="/images/design.png">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.responsive-container-block {
  height: fit-content;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.text-blk {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  line-height: 25px;
}

.responsive-container-block.bigContainer {
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text-blk.headingText {
  font-size: 23px;
  font-weight: 700;
  line-height: 28px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 10px;
  margin-left: 0px;
  padding-top: 0px;
  padding-right: 10px;
  padding-bottom: 0px;
  padding-left: 0px;
}

.allText {
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  width: 50%;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
}

.text-blk.subHeadingText {
  color: rgb(102, 102, 102);
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 15px;
  margin-left: 0px;
  padding-top: 0px;
  padding-right: 10px;
  padding-bottom: 0px;
  padding-left: 0px;
}

.text-blk.description {
  font-size: 18px;
  line-height: 28px;
  color: rgb(153, 153, 153);
  padding-top: 0px;
  padding-right: 10px;
  padding-bottom: 0px;
  padding-left: 0px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 40px;
  margin-left: 0px;
}

.responsive-container-block.Container {
  margin-top: 80px;
  margin-right: auto;
  margin-bottom: 50px;
  margin-left: auto;
  align-items: center;
}

.responsive-container-block.Container.bottomContainer {
  flex-direction: row;
  margin-top: 50px;
  margin-right: auto;
  margin-bottom: 50px;
  margin-left: auto;
}

.allText.aboveText {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 40px;
}

.allText.bottomText {
  margin-top: 0px;
  margin-right: 10px;
  margin-bottom: 0px;
  margin-left: 0px;
}

.mainVideo {
  width: 85%;
  height: 450px;
  margin-top: -30px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.videoContainer {
  width: 46%;
  height: 600px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 10px;
}

.mainVideo {
  z-index: 10;
}

.dotsImg {
  position: absolute;
  width: 80%;
  height: 600px;
  top: 0px;
  right: 0px;
  background: radial-gradient(rgba(0, 0, 0, 0.2) 15%, transparent 20%) 10px 10px,
  radial-gradient(rgba(0, 0, 0, 0.2) 15%, transparent 20%) 30px 30px;
  background-size: 40px 40px;
  z-index: -1;
}

@media (max-width: 1024px) {
  .responsive-container-block.Container {
    max-width: 850px;
  }

  .text-blk.description {
    font-size: 18px;
  }

  .allText {
    width: 40%;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 20px;
  }

  .responsive-container-block.bigContainer {
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
  }

  .text-blk.subHeadingText {
    font-size: 30px;
  }

  .responsive-container-block.Container.bottomContainer {
    margin-top: 80px;
    margin-right: auto;
    margin-bottom: 50px;
    margin-left: auto;
  }

  .responsive-container-block.Container {
    max-width: 830px;
  }

  .allText.aboveText {
    margin-top: 30px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 40px;
  }

  .allText.bottomText {
    margin-top: 30px;
    margin-right: 40px;
    margin-bottom: 0px;
    margin-left: 0px;
  }

  .allText.bottomText {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-right: 0px;
    margin-bottom: 30px;
    margin-left: 0px;
  }

  .responsive-container-block.Container.bottomContainer {
    flex-direction: column;
  }

  .text-blk.headingText {
    text-align: center;
    font-size: 22px;
  }

  .text-blk.subHeadingText {
    text-align: center;
  }

  .text-blk.description {
    text-align: center;
  }

  .explore {
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
  }

  #inc0s {
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
  }

  .dotsImg {
    width: 50%;
    left: 50%;
    transform: translateX(-50%);
  }

  .videoContainer {
    width: 100%;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }

  .mainVideo {
    width: 100%;
  }

  .allText.bottomText {
    margin-top: 30px;
    margin-right: 0px;
    margin-bottom: 60px;
    margin-left: 0px;
  }

  .text-blk.description {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }

  .text-blk.headingText {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }

  .text-blk.subHeadingText {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }

  .mainVideo {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }
}

@media (max-width: 768px) {
  .allText {
    width: 100%;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }

  .responsive-container-block.Container {
    flex-direction: column;
    height: auto;
  }

  .text-blk.headingText {
    text-align: center;
  }

  .text-blk.subHeadingText {
    text-align: center;
    font-size: 28px;
    line-height: 38px;
  }

  .text-blk.description {
    text-align: center;
    font-size: 18px;
    line-height: 27px;
  }

  .allText {
    margin-top: 40px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }

  .allText.aboveText {
    margin-top: 40px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }

  .responsive-container-block.Container {
    margin-top: 80px;
    margin-right: auto;
    margin-bottom: 50px;
    margin-left: auto;
  }

  .responsive-container-block.Container.bottomContainer {
    margin-top: 50px;
    margin-right: auto;
    margin-bottom: 50px;
    margin-left: auto;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 10px;
  }

  .allText.bottomText {
    margin-top: 40px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }

  .allText.bottomText {
    margin-top: 40px;
    margin-right: 0px;
    margin-bottom: 60px;
    margin-left: 0px;
  }

  .mainVideo {
    height: 400px;
  }

  .videoContainer {
    height: 550px;
  }

  .explore {
    font-size: 16px;
    padding-top: 8px;
    padding-right: 40px;
    padding-bottom: 8px;
    padding-left: 40px;
  }
}

@media (max-width: 500px) {
  .responsive-container-block.Container {
    padding-top: 10px;
    padding-right: 0px;
    padding-bottom: 10px;
    padding-left: 0px;
    width: 100%;
    max-width: 100%;
  }

  .responsive-container-block.bigContainer {
    padding-top: 10px;
    padding-right: 25px;
    padding-bottom: 10px;
    padding-left: 25px;
  }

  .allText {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    width: 100%;
  }

  .responsive-container-block.bigContainer {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
  }

  .explore {
    font-size: 16px;
    line-height: 25px;
    padding: 8px 35px 8px 35px;
  }

  .dotsImg {
    width: 80%;
    height: 100%;
  }

  .mainVideo {
    height: 260px;
  }

  .videoContainer {
    height: 320px;
  }

  .responsive-container-block.Container.bottomContainer {
    padding: 0 0 0 0;
  }

  .text-blk.description {
    font-size: 16px;
    line-height: 23px;
    margin: 0 0 30px 0;
  }

  .text-blk.subHeadingText {
    font-size: 24px;
  }
}
</style>