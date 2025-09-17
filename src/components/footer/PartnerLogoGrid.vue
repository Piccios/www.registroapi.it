<template>
  <div
    class="grid auto-rows-fr grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 items-center"
    :class="customGridClass"
  >
    <template v-for="item in items" :key="item.alt">
      <component
        :is="item.href ? 'a' : 'div'"
        :href="item.href"
        target="_blank"
        rel="noopener"
        :aria-label="item.ariaLabel || item.alt"
        :title="item.title || item.alt"
        class="group flex items-center justify-center p-2 bg-transparent rounded-none transition-colors duration-300"
      >
        <img
          :src="item.src"
          :alt="item.alt"
          :height="undefined"
          :width="undefined"
          loading="lazy"
          decoding="async"
          class="w-auto object-contain grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-[1.02] transition duration-300"
          :class="[defaultImgClass, item.imgClass]"
        />
      </component>
    </template>
  </div>

</template>

<script setup lang="ts">
export type PartnerItem = {
  src: string;
  alt: string;
  href?: string;
  title?: string;
  ariaLabel?: string;
  width?: number;
  height?: number;
  imgClass?: string;
};

const props = defineProps<{
  items: PartnerItem[];
  customGridClass?: string;
  defaultImgClass?: string;
}>();
</script>

<style scoped>
</style>
