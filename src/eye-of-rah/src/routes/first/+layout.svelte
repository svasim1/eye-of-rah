<script>
  import { onMount } from 'svelte';
  import '../../app.css';
  import AudioPlayer from '$lib/components/AudioPlayer/AudioPlayer.svelte';
  import { draggable } from 'svelte-drag';

  let positions = [];

  function getRandomPosition() {
    const top = Math.floor(Math.random() * (window.innerHeight - 100)); // Adjust 100 to the height of the player
    const left = Math.floor(Math.random() * (window.innerWidth - 100)); // Adjust 100 to the width of the player
    return { top, left };
  }

  onMount(() => {
    positions = Array.from({ length: 5 }, getRandomPosition);
  });
</script>

{#if positions.length > 0}
  {#each positions as pos}
    <div use:draggable style="z-index: 3; position: absolute; top: {pos.top}px; left: {pos.left}px;">
      <AudioPlayer />
    </div>
  {/each}
{/if}

<slot></slot>