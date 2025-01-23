<script setup lang="ts">
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-thumbnail.scss';
import fjGallery from "flickr-justified-gallery";
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import { onMounted } from "vue";
import lightGallery from "lightgallery";

const plugins = [
  lgThumbnail
]

const items = [
  {
    id: Math.random(),
    src: '/images/main.webp',
    thumb: '/images/main.webp',
  },
  {
    id: Math.random(),
    src: '/images/j6wz_PwfgCA.jpg',
    thumb: '/images/j6wz_PwfgCA.jpg',
  },
  {
    id: Math.random(),
    src: '/images/5fa4129180846424792156.jpg',
    thumb: '/images/5fa4129180846424792156.jpg',
  },
  {
    id: Math.random(),
    src: '/images/main.webp',
    thumb: '/images/main.webp',
  },
  {
    id: Math.random(),
    src: '/images/j6wz_PwfgCA.jpg',
    thumb: '/images/j6wz_PwfgCA.jpg',
  },
  {
    id: Math.random(),
    src: '/images/j6wz_PwfgCA.jpg',
    thumb: '/images/j6wz_PwfgCA.jpg',
  },
  {
    id: Math.random(),
    src: '/images/main.webp',
    thumb: '/images/main.webp',
  },
  {
    id: Math.random(),
    src: '/images/j6wz_PwfgCA.jpg',
    thumb: '/images/j6wz_PwfgCA.jpg',
  },
  {
    id: Math.random(),
    src: '/images/5fa4129180846424792156.jpg',
    thumb: '/images/5fa4129180846424792156.jpg',
  },
  {
    id: Math.random(),
    src: '/images/main.webp',
    thumb: '/images/main.webp',
  },
]
const settings = {
  speed: 200,
  plugins: plugins,
}

onMounted(() => {
  fjGallery(document.querySelectorAll('#examples-gal'), {
    itemSelector: '.gallery-item',
    // rowHeight: 280,
    // lastRow: 'start',
    gutter: 2,
    rowHeightTolerance: 0.1,
    calculateItemsHeight: false,
    onJustify: () => {
      lightGallery(document.getElementById('examples-gal')!, settings)
    }
  })
})

</script>

<template>
  <div id="examples">
    <div id="examples-gal">
      <div class="toggle-block">
        <div class="toggle-item is-active">
          Кухни
        </div>
        <div class="toggle-item">
          Диваны
        </div>
        <div class="toggle-item">
          Шкафы
        </div>
      </div>
      <a
        v-for="item in items"
        :key="item.id"
        class="gallery-item"
        :data-src="item.src"
      >
        <img class="img-responsive" :src="item.thumb" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
#examples {
  background-color: $accent;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 620px;
  overflow: hidden;
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
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.toggle-item {
  font-size: 18px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s linear;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  &:hover {
    opacity: .7;
  }
  &.is-active {
    color: #65a30d;
  }
}
</style>