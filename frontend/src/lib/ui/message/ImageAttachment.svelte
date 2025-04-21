<script>
  const { width, height, url } = $props();
</script>

<div
  class="rounded-md overflow-hidden group hover:cursor-pointer"
  style="width:{width}px;height:{height}px;"
>
  <img class="w-full h-full" src={url} alt="" />
</div>
