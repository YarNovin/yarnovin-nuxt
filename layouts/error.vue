<template>
  <div>
    <div v-if="error.statusCode === 404" class="min-h-[94vh] flex flex-col items-center justify-center gap-4">
      <h3 class="text-2xl">صفحه مورد نظر شما یافت نشد</h3>
      <nuxt-link to="/" class="text-purple-700 hover:text-purple-900 dark:text-purple-200 dark:hover:text-purple-50 transition-colors duration-300">بازگشت به صفحه اصلی</nuxt-link>
    </div>
  </div>
</template>

<script>
import themeLoader from '~/mixins/themeLoader';

export default {
  mixins: [themeLoader],
  props: ['error']
}
</script>
