<template>
  <div>
    <home-header/>
    <div class="flex flex-col items-stretch py-8 gap-8">
      <section id="services" class="max-w-6xl w-full p-5 mx-auto">
        <h3 class="text-4xl text-center mb-14">خدمات ما</h3>
        <HomeSectionsServices />
      </section>
    </div>
  </div>
</template>

<script>
import themeMixin from '~/mixins/themeLoader'

export default {
  name: 'IndexPage',
  mixins: [themeMixin],
  head() {
    return {
      title: 'صفحه اصلی',
      meta: [
        {
          name: 'description',
          content: 'سایت مجموعه یارنوین . اطلاعات بیشتر در داخل سایت.',
        },
      ],
    }
  },
}
</script>
<style scoped>
.bg-image {
  background: url("/images/head.jpg") center/cover no-repeat;
}
</style>
