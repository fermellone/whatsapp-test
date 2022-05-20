<script>
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
</script>

<nav class="flex items-center justify-between flex-wrap bg-indigo-500 p-6">
  <div class="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
    <div class="text-sm sm:flex-grow">
      <a
        href="/"
        class="block mt-4 sm:inline-block sm:mt-0 text-indigo-100 hover:text-white mr-4 text-lg uppercase active:text-white active:font-semibold"
        use:link
        use:active
      >
        Todo
      </a>
    </div>
  </div>
</nav>
