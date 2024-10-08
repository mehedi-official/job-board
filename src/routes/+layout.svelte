<script>
	import { navigating } from "$app/stores";
	import Loader from "$lib/components/Loader.svelte";
  import "../app.css";
</script>
 
 {#if $navigating}
  <section class="fixed w-full h-screen bg-black top-0 left-0 z-50">
    <section class="h-full grid justify-center content-center">
      <div class="">
        <Loader size={36} borderColor="white" />
      </div>
    </section>
  </section>
 {/if} 
<slot />