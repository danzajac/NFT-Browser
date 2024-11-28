<template>
  <footer class="text-gray-600 body-font dark:text-white ">
    <div class="container px-4 py-4 mx-auto flex items-center sm:flex-row flex-col max-w-screen-xl">
      <div class="block">
        <router-link
          :to="{ name: 'home' }"
          class="flex title-font font-medium items-center md:justify-start justify-center "
        >
          <span class="ml-3 text-xl">🖼️&nbsp;.&nbsp;🍕</span>
        </router-link>
      </div>
      <span class="text-sm  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        Made on a random saturday in March. Hacked on sporadically.
      </span>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-xs">
        Copyright &copy; 2021
      </span>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-xs">
      </span>
    </div>
  </footer>

  <!-- <div class="column is-8 is-offset-2">
    <br>
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <router-link :to="{ name: 'home' }">
            <span class="icon">
              🥺
            </span>
          </router-link>
        </div>
      </div>
      <div class="level-right">
        <small
          class="level-item"
          style="color: var(--textLight)"
        >
          Made on a random saturday. Fun, right.
        </small>
      </div>
    </nav>
  </div> -->
</template>

<style scoped>

</style>
