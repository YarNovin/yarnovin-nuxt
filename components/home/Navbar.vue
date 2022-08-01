<template>
  <div class="h-16 px-4 bg-white shadow dark:bg-zinc-700" dir="rtl">
    <div class="max-w-6xl mx-auto h-full flex flex-row items-center">
      <div class="h-full p-4 flex flex-row items-center gap-3">
        <img class="h-full" src="/images/yarnovin.png" alt="logo" />
        <p>یارنوین</p>
      </div>
      <span class="grow"></span>
      <ul class="flex flex-row items-center h-full gap-1">
        <li><a href="#groups" class="text-purple-900 px-2.5 py-2 rounded-md dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-100/10 border-solid border-b-2 border-transparent hover:border-b-purple-400 dark:hover:border-b-purple-200 transition-colors duration-300">گروه</a></li>
        <li><a href="#services" class="text-purple-900 px-2.5 py-2 rounded-md dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-100/10 border-solid border-b-2 border-transparent hover:border-b-purple-400 dark:hover:border-b-purple-200 transition-colors duration-300">خدمات ما</a></li>
        <li><a href="#team" class="text-purple-900 px-2.5 py-2 rounded-md dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-100/10 border-solid border-b-2 border-transparent hover:border-b-purple-400 dark:hover:border-b-purple-200 transition-colors duration-300">تیم</a></li>
      </ul>
      <span class="grow"></span>
      <GlobalToggleTheme />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    switchTheme() {
      document.documentElement.classList.toggle('dark')
    },
  },
}
</script>
