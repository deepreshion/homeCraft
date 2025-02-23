<script setup lang="ts">
import { faBoxOpen, faWallet, faPencilRuler, faLightbulb, faHome, faHeadset } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <section class="services-section-two">
    <div class="auto-container">
      <div class="sec-title">
        <h5 class="title text-grey2">Почему заказывают мебель у нас?</h5>
        <h2 class="text-dark">Наши преимущества</h2>
      </div>

      <div class="row clearfix">

        <!--Service Block Two-->
        <div class="service-block-two col-md-4 col-sm-6 col-xs-12">
          <div class="inner-outer">
            <div class="inner-box">
              <div class="icon-box">
                <font-awesome :icon="faBoxOpen" />
              </div>
              <h3>Широкий ассортимент</h3>
              <div class="text">Компания МЭК предлагает Вам разнообразный и доступный по цене ассортимент мебели.</div>
            </div>
          </div>
        </div>

        <!--Service Block Two-->
        <div class="service-block-two col-md-4 col-sm-6 col-xs-12">
          <div class="inner-outer">
            <div class="inner-box">
              <div class="icon-box">
                <font-awesome :icon="faWallet" />
              </div>
              <h3>На любой кошелек</h3>
              <div class="text">Разнообразие материалов и широкий диапазон цен позволяет удовлетворить любые запросы.</div>
            </div>
          </div>
        </div>

        <!--Service Block Two-->
        <div class="service-block-two col-md-4 col-sm-6 col-xs-12">
          <div class="inner-outer">
            <div class="inner-box">
              <div class="icon-box">
                <font-awesome :icon="faPencilRuler" />
              </div>
              <h3>Индивидуальные проекты</h3>
              <div class="text">Дизайнер составит индивидуальный проект по Вашим требованиям и средствам.</div>
            </div>
          </div>
        </div>

        <!--Service Block Two-->
        <div class="service-block-two col-md-4 col-sm-6 col-xs-12">
          <div class="inner-outer">
            <div class="inner-box">
              <div class="icon-box">
                <font-awesome :icon="faLightbulb" />
              </div>
              <h3>Оригинальные идеи</h3>
              <div class="text">Хотите что-то не такое как у всех? Мы готовы предложить Вам самые смелые решения.</div>
            </div>
          </div>
        </div>

        <!--Service Block Two-->
        <div class="service-block-two col-md-4 col-sm-6 col-xs-12">
          <div class="inner-outer">
            <div class="inner-box">
              <div class="icon-box">
                <font-awesome :icon="faHome" />
              </div>
              <h3>Для любого интерьера</h3>
              <div class="text">Мебель производства компании МЭК – просто комплектовать под любые помещения.</div>
            </div>
          </div>
        </div>

        <!--Service Block Two-->
        <div class="service-block-two col-md-4 col-sm-6 col-xs-12">
          <div class="inner-outer">
            <div class="inner-box">
              <div class="icon-box">
                <font-awesome :icon="faHeadset" />
              </div>
              <h3>Служба поддержки</h3>
              <div class="text">Поможем определиться с выбором, расскажем о новинках и рассчитаем стоимость.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.services-section-two {
  padding: 60px 0;

  .sec-title {
    text-align: center;
    margin-bottom: 45px;
  }

  .icon-box {
    font-size: 42px;
    color: $green;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
  }

  .service-block-two {
    flex: 0 0 33.33%;
    max-width: calc(33.33% - 10px);
    box-sizing: border-box;
    @media (max-width: 768px) {
      flex: 0 0 45%;
      max-width: 45%;
    }
    @media (max-width: 480px) {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .inner-outer {
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, .1);
      min-height: 240px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      transition: transform 0.3s ease;

      .inner-box {
        text-align: center;

        .icon-box {
          margin-bottom: 20px;

          .icon {
            font-size: 40px;
            color: #ff6f61;
          }
        }

        h3 {
          font-size: 24px;
          margin-bottom: 10px;

          a {
            text-decoration: none;
            color: #333;
            transition: color 0.3s ease;
          }
        }

        .text {
          font-size: 16px;
          color: #555;
        }
      }
    }
  }
}
</style>