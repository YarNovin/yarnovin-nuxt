<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-8 py-8">
    <div class="aspect-square">
      <div
        class="w-full h-full bg-purple-200 dark:bg-zinc-700 shadow-md rounded-md flex flex-col gap-4 justify-center items-center hover:-translate-y-4 hover:shadow-lg transition duration-500 select-none cursor-pointer">
        <fa :icon="['fas', 'robot']" class="w-12 h-12" />
        <p class="text-xl text-center">ساخت ربات</p>
      </div>
    </div>
    <div class="aspect-square">
      <div
        class="w-full h-full bg-purple-200 dark:bg-zinc-700 shadow-md rounded-md flex flex-col gap-4 justify-center items-center hover:-translate-y-4 hover:shadow-lg transition duration-500 select-none cursor-pointer">
        <fa :icon="['fas', 'wrench']" class="w-10 h-10" />
        <p class="text-xl text-center">ساخت صفحات وب</p>
      </div>
    </div>
    <div class="aspect-square">
      <div
        class="w-full h-full bg-purple-200 dark:bg-zinc-700 shadow-md rounded-md flex flex-col gap-4 justify-center items-center hover:-translate-y-4 hover:shadow-lg transition duration-500 select-none cursor-pointer">
        <fa :icon="['fas', 'brain']" class="w-10 h-10" />
        <p class="text-xl text-center">هوش مصنوعی</p>
      </div>
    </div>
  </div>
</template>
