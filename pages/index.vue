<template>
<div>
  <HomeNavbar />
  <div class="flex flex-col items-stretch py-8 gap-8">
    <HomeHeader/>
    <section id="groups" class="max-w-6xl w-full p-5 mx-auto">
      <h3 class="text-2xl text-center">گروه ها</h3>
    </section>
  </div>
</div>
</template>

<script>
import themeMixin from "~/mixins/themeLoader";

export default {
  name: 'IndexPage',
  mixins: [themeMixin]
}
</script>
