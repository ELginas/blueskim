<script>
  const { color, class: klass } = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 16 16"
  stroke={color}
  class={klass}
>
  <path
    d="m5 3 5 5m-5 5 5-5"
    style="stroke-linecap:round;stroke-linejoin:round;"
    transform="matrix(1.3077 0 0 1.3 -1.808 -2.4)"
  />
</svg>
