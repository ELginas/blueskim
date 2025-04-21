<script>
  let element;
  let btnElement;
  const getText = (e) => {
    if (e.data) {
      return e.data;
    } else {
      return e.dataTransfer?.getData("text/plain");
    }
  };
</script>

<svelte:document
  onselectionchange={async (e) => {
    const selection = document.getSelection();
    const inElement =
      element.contains(selection?.anchorNode) &&
      element.contains(selection?.focusNode);
    if (inElement) {
      // Firefox Android: Have to unfocus before focusing to open virtual keyboard on selection
      element.blur();
      element.focus();
    }
    console.log("[document] selectionchange", e, selection, inElement);
  }}
/>

<div class="bg-background">
  <input
    type="text"
    class="text-base/base text-white"
    onkeydown={(e) => console.log("keydown", e)}
    onkeyup={(e) => console.log("keyup", e)}
    onkeypress={(e) => console.log("keypress", e)}
    onbeforeinput={(e) => console.log("beforeinput", e)}
    oninput={(e) => console.log("input", e)}
    oncopy={(e) => console.log("copy", e)}
    oncut={(e) => console.log("cut", e)}
    onpaste={(e) => console.log("paste", e)}
    onscroll={(e) => console.log("scroll", e)}
    onselectionchange={(e) => console.log("selectionchange", e)}
  />

  <button
    class="bg-background border border-border text-white"
    bind:this={btnElement}
    onclick={() => element.focus()}>Test</button
  >
  <button class="bg-background border border-border text-white">Test</button>
  <button class="bg-background border border-border text-white">Test</button>

  <p
    class="text-white"
    onselectionchange={(e) => console.log("[p] selectionchange", e)}
  >
    {#each [...Array(900)] as _}
      Some text for y'all
    {/each}
  </p>

  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="text-base/base text-white"
    contenteditable="plaintext-only"
    bind:this={element}
    onkeydown={(e) => console.log("keydown", e)}
    onkeyup={(e) => console.log("keyup", e)}
    onkeypress={(e) => console.log("keypress", e)}
    onbeforeinput={(e) => {
      const text = getText(e);
      console.log(
        "beforeinput",
        e,
        text,
        e.target.textContent,
        e.getTargetRanges()
      );
      if (!text) {
        console.log("delete");
        // e.preventDefault();
        return;
      }
      // e.preventDefault();
    }}
    oninput={(e) => {
      console.log("input", e);
    }}
  >
    Some <span class="span text-xl">Text</span>
    <span class="px-0.5 py-0.5 bg-blue rounded-sm">@user</span>
    <span
      class="px-0.5 py-0.5 bg-disabled rounded-sm"
      onselectionchange={(e) => console.log("selectionchange", e)}>`test`</span
    >
    <span></span>
  </div>

  <div class="text-base/base text-white cursor-text">
    Some <span class="span text-xl">Text</span>
    <span class="px-0.5 py-0.5 bg-blue rounded-sm">@user</span>
    <span class="px-0.5 py-0.5 bg-disabled rounded-sm">`test`</span>
    <span></span>
  </div>
</div>
