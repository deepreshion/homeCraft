<script setup lang="ts">
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-thumbnail.scss';
import 'lightgallery/scss/lg-fullscreen.scss';
import 'lightgallery/scss/lg-relative-caption.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import { onMounted } from "vue";

const sections = ref([
  {
    label: 'Все',
    value: 'all'
  },
  {
    label: 'Кухни',
    value: 'kitchens'
  },
  {
    label: 'Диваны',
    value: 'divan'
  },
])
const activeSection = ref('all')

const items = ref([
  {
    id: Math.random(),
    src:'/homeCraft/images/main.webp',
    thumb:'/homeCraft/images/main.webp',
  },
  {
    id: Math.random(),
    src:'/homeCraft/images/divan.png',
    thumb:'/homeCraft/images/divan.png',
  },
  {
    id: Math.random(),
    src:'/homeCraft/images/kitchen.png',
    thumb:'/homeCraft/images/kitchen.png',
  },
  {
    id: Math.random(),
    src:'/homeCraft/images/main.webp',
    thumb:'/homeCraft/images/main.webp',
  },
  {
    id: Math.random(),
    src:'/homeCraft/images/divan.png',
    thumb:'/homeCraft/images/divan.png',
  },
  {
    id: Math.random(),
    src:'/homeCraft/images/main.webp',
    thumb:'/homeCraft/images/main.webp',
  },
  {
    id: Math.random(),
    src:'/homeCraft/images/divan.png',
    thumb:'/homeCraft/images/divan.png',
  },
  {
    id: Math.random(),
    src:'/homeCraft/images/kitchen.png',
    thumb:'/homeCraft/images/kitchen.png',
  },
])

const kitchens = Array.from({ length: 10 }, () => {
  return  {
    id: Math.random(),
    src:'/homeCraft/images/kitchen.png',
    thumb:'/homeCraft/images/kitchen.png',
  }
})

const divan = Array.from({ length: 10 }, () => {
  return  {
    id: Math.random(),
    src:'/homeCraft/images/divan.png',
    thumb:'/homeCraft/images/divan.png',
  }
})

const setFilter = (value: string) => {
  activeSection.value = value
  items.value = value === 'all'? items : value === 'kitchens'? kitchens : divan
  initGallery()
}

const plugins = [
  lgThumbnail
]

const settings = {
  speed: 200,
  plugins: plugins,
  showCloseIcon: true,
  mobileSettings: {
    controls: false,
    showCloseIcon: true,
    download: false,
    rotate: false
  }
}

const initGallery = async () => {
  if (process.client) {
    const { default: fjGallery } = await import('flickr-justified-gallery');
    const { default: lightGallery } = await import('lightgallery');
    const isMobile = window.innerWidth < 768;

    const elements = document.querySelectorAll('#examples-gal');

    if (elements.length) {
      fjGallery(elements, {
        itemSelector: '.gallery-item',
        gutter: 2,
        rowHeight: isMobile ? 160 : 320,
        maxRowsCount: isMobile ? 4 : 2,
        rowHeightTolerance: 0.1,
        calculateItemsHeight: false,
        onInit: () => {
          const galElement = document.getElementById('examples-gal');
          if (galElement) {
            lightGallery(galElement, settings);
          }
        }
      });
    }
  }
}

onMounted( () => {
  initGallery()
});

</script>

<template>
  <div id="examples">
<!--    <div class="toggle-block">-->
<!--      <h4 class="text-dark">Примеры работ</h4>-->
<!--      <div-->
<!--        v-for="item in sections"-->
<!--        :key="item.value"-->
<!--        class="toggle-item"-->
<!--        :class="{'is-active': activeSection === item.value}"-->
<!--        @click="setFilter(item.value)"-->
<!--      >-->
<!--        {{ item.label }}-->
<!--      </div>-->
<!--    </div>-->
    <div id="examples-gal">
      <div
        v-for="item in items"
        :key="item.id"
        class="gallery-item"
        :data-src="item.src"
      >
        <img class="img-responsive" :src="item.thumb" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#examples {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 640px;
  overflow: hidden;
  position: relative;
}

#examples-gal {
  width: 100%;
  max-width: 1920px;
  position: relative;
}

.toggle-block {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;
  background-color: rgba(255,255,255, .7);
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  //h4 {
  //  margin-bottom: 16px;
  //}
}

.toggle-item {
  font-size: 18px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s linear;
  color: $grey-text2;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:hover {
    opacity: .7;
  }
  &.is-active {
    color: #65a30d;
  }
}
</style>