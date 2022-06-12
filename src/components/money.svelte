<script>
    import { onMount } from "svelte";
    let isLoading = true;
    let isMonetized = false;
  
    onMount(() => {
      if (!document.monetization) {
      // No web monetization polyfill is installed (e.g. Coil).
        isLoading = false;
        isMonetized = false;
        return;
      }
  
      // Check the value of document.monetization.state
      // to see if a user is web monetized.
      const { state } = document.monetization;
  
      if (state === "stopped") {
        // Not currently sending micropayments, nor trying to.
        isLoading = false;
        isMonetized = false;
      }
  
      // Determine when Web Monetization has started actively paying
      document.monetization.addEventListener("monetizationstart", event => {
        isLoading = false;
        isMonetized = true;
      });
    });
  </script>
  
  <slot {isLoading} {isMonetized} />