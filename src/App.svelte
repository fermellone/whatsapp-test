<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import Navbar from "./components/Navbar.svelte";
</script>

<Navbar />
<main class="m-2">
  <Router {routes} />
</main>