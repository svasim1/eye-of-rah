<script lang="ts">
    import { Audio } from "svelte-audio";
    import { playlist } from "./playlist";

    let audio: Audio;
</script>
  
<div>
    <Audio bind:this={audio} {playlist} autoplay={true} listFolded={true} mutex={false} loop="all" theme="#FADFA3" preload="auto" order="random" mini={false}> 
        <!-- Loading Slot -->
        <div>Loading ...</div>
    </Audio>
</div>