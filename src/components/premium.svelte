

<script>
    import Money from "./money.svelte";
//     let isLoading = true;
//     let isMonetized = false;
//     onMount(async () => {
//         if (!document.monetization) {
//     // No web monetization polyfill is installed (e.g. Coil).
//       isLoading = false;
//       isMonetized = false;
//       return;
//     }

//     // Check the value of document.monetization.state
//     // to see if a user is web monetized.
//     const { state } = document.monetization;

//     if (state === "stopped") {
//       // Not currently sending micropayments, nor trying to.
//       isLoading = false;
//       isMonetized = false;
//     }

//     // Determine when Web Monetization has started actively paying
//     document.monetization.addEventListener("monetizationstart", event => {
//       isLoading = false;
//       isMonetized = true;
//     });
//   });
//     function handleProgress(event) {
//       console.log(event.detail);
//     }
  </script>
  
  <!-- Set up your payment pointer in your App.svelte -->
  <head>
    <meta name="monetization" content="$ilp.uphold.com/egpErgzkYGw6">
  </head>
  <Money let:isLoading let:isMonetized>
    {#if isLoading}
      <div>Loading message here</div>
    {:else if isMonetized}
      <div>Monetized/premium content here</div>
    {:else}
      <div>Show ads here</div>
    {/if}
  </Money>