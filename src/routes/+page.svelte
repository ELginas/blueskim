<script>
  import MainContent from "$lib/components/MainContent.svelte";
  import MembersSidebar from "$lib/components/MembersSidebar.svelte";
  import NavSidebar from "$lib/components/NavSidebar.svelte";
  import ServerSidebar from "$lib/components/ServerSidebar.svelte";
</script>

<div class="flex h-full">
  <NavSidebar />
  <ServerSidebar name="Godot Wild Jam 200 2001 2002" />
  <MainContent />
  <MembersSidebar />
</div>
