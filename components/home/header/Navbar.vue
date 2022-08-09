<template>
  <div class="h-16 px-4" dir="rtl">
    <div class="max-w-6xl mx-auto h-full flex flex-row items-center">
      <div class="h-full p-4 flex flex-row items-center gap-3">
        <img class="h-full" src="/images/yarnovin.png" alt="logo" />
        <p>یار <span class="text-purple-300">نوین</span></p>
      </div>
      <span class="grow"></span>
      <ul class="hidden sm:flex flex-row items-center h-full gap-1">
        <li><a href="#groups" class="relative px-2 py-2 text-purple-200 rounded hover:bg-purple-100/10 transition-colors duration-500 before:content-[''] before:absolute before:top-full before:right-0 before:w-0 hover:before:w-full before:h-0.5 before:rounded-md before:bg-purple-200 before:transition-all before:duration-300">گروه</a></li>
        <li><a href="#services" class="relative px-2 py-2 text-purple-200 rounded hover:bg-purple-100/10 transition-colors duration-500 before:content-[''] before:absolute before:top-full before:right-0 before:w-0 hover:before:w-full before:h-0.5 before:rounded-md before:bg-purple-200 before:transition-all before:duration-300">خدمات ما</a></li>
        <li><a href="#team" class="relative px-2 py-2 text-purple-200 rounded hover:bg-purple-100/10 transition-colors duration-500 before:content-[''] before:absolute before:top-full before:right-0 before:w-0 hover:before:w-full before:h-0.5 before:rounded-md before:bg-purple-200 before:transition-all before:duration-300">تیم</a></li>
      </ul>
      <span class="grow"></span>
      <HomeHeaderToggleTheme />
    </div>
  </div>
</template>
