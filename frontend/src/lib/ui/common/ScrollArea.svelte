<script>
  let {
    offsetWidth = $bindable(),
    offsetHeight = $bindable(),
    class: klass,
    children,
    ...rest
  } = $props();
</script>

<div
  bind:offsetWidth
  bind:offsetHeight
  class={["overflow-auto", klass]}
  {...rest}
>
  {@render children?.()}
</div>
