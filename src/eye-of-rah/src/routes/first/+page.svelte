<div id="background-container" 
  style="position: relative; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column;">
  <div id="background-overlay"
    style="background: rgba(0,0,0,0.4) no-repeat center center; width:100vw; height: 100vh; z-index: 1; position: absolute">
  </div>
  <div id="background-image" 
    class="flex flex-row justify-center items-center" 
    style="background: url({background}) no-repeat center center; width: 100vw; height: 100vh; z-index: 0; position: absolute">
  </div>

  <div id="content" style="z-index: 2; display: flex; flex-direction: column; justify-content: space-around; align-items: center; height: 40rem" >
    <div id="main-text" class="flex flex-row justify-center items-center self-center size-96" style="z-index: 2;">
      <h1 class="text-5xl font-bold text-center text-white">The Eye Of Rah Is All-Seeing</h1>    
    </div>

    <div id="input-form"  style="z-index: 2; width: 30rem; border-radius: 0.5rem; 
    display: flex; justify-content: center; align-items: center; flex-direction: column">
      <form method="post" style="width: 25rem; display: flex; justify-content: space-around; align-items: center; flex-direction: row">

        <input id="input" name="password" type="text" placeholder="Enter password..."
          style="width: 20rem; padding: 0.3rem 0.5rem; border-radius: 0.5rem; background-color: white; border: solid black 2px;" required>

        <button style="background-color: blue; padding: 0.3rem 0.5rem; border-radius: 0.5rem; border: solid black 2px;" class="text-white font-md">Submit</button>
      </form>
      {#if form?.success === true}
          <p class="text-green-500">SUCCESS!</p>
      {:else if form?.success === false}
          <p class="text-red-500 self-start ml-12 mt-1 font-medium" >WRONG PASSWORD!</p>
      {/if}

    </div>
  </div>
</div>


<script>
import background from "$lib/assets/eye-of-rah-bg.jpg"
export let form
</script>
