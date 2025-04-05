<script>
  const { class: klass, children } = $props();
</script>

<div class={["overflow-auto", klass]}>{@render children?.()}</div>
