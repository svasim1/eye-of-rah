<div id="background-container" 
  style="position: relative; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column;">
  <div id="background-overlay"
    style="background: rgba(0,0,0,0.4) no-repeat center center; width:100vw; height: 100vh; z-index: 1; position: absolute">
  </div>
  <div id="background-image" 
    class="flex flex-row justify-center items-center" 
    style="background: url({background}) no-repeat center center; background-size: 100vw, 100vh; width: 100vw; height: 100vh; z-index: 0; position: absolute">
  </div>

  <div id="content" style="z-index: 2; display: flex; flex-direction: column; justify-content: space-around; align-items: center; height: 100vh; width: 100vw;" >
    <div id="main-text" class="flex flex-col justify-center items-center self-center size-96 mt-10" style="z-index: 2;">
      <h1 class="text-5xl font-bold text-center text-white mb-2">The Eye Of Rah</h1>    
      <h1 class="text-5xl font-bold text-center text-white">Is All-Seeing</h1>
    </div>

    <div id="input-form"  style="z-index: 2; width: 30rem; border-radius: 0.5rem; height:100vh;
    display: flex; justify-content: center; align-items: center; flex-direction: column">
      <form method="post" class="mb-1" style="width: 25rem; display: flex; justify-content: space-around; align-items: center; flex-direction: row"
        novalidate >

        <input id="input" name="password" type="text" placeholder="Enter password..." 
          style="width: 20rem; padding: 0.3rem 0.5rem; border-radius: 0.5rem; background-color: white; border: solid black 2px;" required>

        <button style="background-color: blue; padding: 0.3rem 0.5rem; border-radius: 0.5rem; border: solid black 2px;" class="text-white font-md">Submit</button>
      </form>
      {#if form?.success === true}
          <p class="text-green-500 self-center font-medium">SUCCESS!</p>
      {:else if form?.success === false}
          <p class="text-red-500 self-start ml-12 font-medium" >WRONG PASSWORD!</p>
      {:else if form?.error}
          <p class="text-red-500 self-start ml-12 font-medium">MUST ENTER A PASSWORD!</p>
      {/if}
    </div>
  </div>
</div>


<script>
  import background from "$lib/assets/eye-of-rah-bg.jpg"
  export let form
</script>
