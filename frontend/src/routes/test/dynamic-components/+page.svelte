<script>
  import Component from "./Component.svelte";

  const data = [
    {
      label: "Width",
      value: 0,
    },
    {
      label: "Height",
      value: 0,
    },
  ];

  let state = $state({});
</script>

<pre>{JSON.stringify(state, null, 2)}</pre>
<Component label="Width" bind:value={state.width} />
<Component label="Height" bind:value={state.height} />
