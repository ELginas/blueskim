<script>
  let {
    offsetWidth = $bindable(),
    offsetHeight = $bindable(),
    class: klass,
    style = "",
    children,
  } = $props();
</script>

<div
  bind:offsetWidth
  bind:offsetHeight
  class={["overflow-auto", klass]}
  {style}
>
  {@render children?.()}
</div>
