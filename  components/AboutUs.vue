<script setup lang="ts">

</script>

<template>
  <div id="about-us" class="about-us">
    <div class="text">
      <h3>О нас</h3>
      <p>
        В [название компании] мы создаем уникальную мебель по вашим индивидуальным заказам. С [год основания], наша команда профессионалов работает над тем, чтобы воплощать ваши идеи в жизнь, используя только лучшие материалы и передовые технологии. Мы предлагаем полный цикл услуг — от дизайна до установки, гарантируя качество и удовлетворение каждого клиента. Давайте вместе создадим мебель вашей мечты!
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.about-us {
  margin: 32px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid $border;
  height: 460px;
  background-image: url('/public/images/golden lines.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top left;
  > div {
    flex: 1;
    max-width: 50%;
  }
}

.text {
  text-align: center;
  padding: 20px;
  h3 {
    margin-bottom: 16px;
  }
  p {
    color: $grey-text;
  }
}
</style>