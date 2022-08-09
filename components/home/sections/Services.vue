<template>
  <div class="grid grid-cols-1 md:grid-cols-3 w-full gap-6 lg:gap-8">
    <div class="aspect-square">
      <HomeSectionsServiceCard
        class="w-full h-full"
        title="ساخت ربات"
        body-text="ساخت ربات های تلگرامی اختصاصی مخصوص گروه ها و کانال ها و همینطور ساخت ربات های واتساپ و اینستاگرام."
        :icon="['fas', 'robot']" />
    </div>
    <div class="aspect-square">
      <HomeSectionsServiceCard
        class="w-full h-full"
        title="ساخت صفحات وب"
        body-text="ساخت صفحات رسپانسیو و همینطور با دیزاینی مناسب مخصوص کسب و کار شما."
        :icon="['fas', 'brush']" />
    </div>
    <div class="aspect-square">
      <HomeSectionsServiceCard
        class="w-full h-full"
        title="هوش مصنوعی"
        body-text="نوشتن هوش مصنوعی برای مقاصد گوناگون مانند استفاده در ربات های تلگرامی و سایت های مختلف."
        :icon="['fas', 'brain']" />
    </div>
  </div>
</template>

<script>
export default {}
</script>
