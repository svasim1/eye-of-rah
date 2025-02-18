<div id="container" style="position: relative; width: 100vw; height: 100vh; display: flex; user-select: none;">
  <div
    id="background"
    style={backgroundStyle}
  >
  </div>
  <div
    id="background-overlay"
    style={backgroundOverlayStyle}
  >
  </div>
  <div 
    id="text-container"
    class="flex flex-row justify-start items-start size-128 mt-48 ml-42 z-2 absolute"
  >
    <h1 class="text-6xl font-bold" style="color: white;">
      Show your love for LeBron
    </h1>
  </div>
  <div
    id="clicker-container"
    class="flex flex-row justify-center items-center mt-98 ml-424 absolute"
  >
    <div
      id="clicker"
      style="z-index:1; position: absolute;"
      on:click={()=>{updateCounter(1)}}
    >
      <div
        id="clicker-counter"
        class="text-7xl font-bold mt-28"
        style={clickerCounterStyle}
      >
        {counter}
      </div>
    </div>
  </div>

  {#if displayFlag == true}
    <p class="text-xs z-2" style="color: lightgrey;">{flag}</p>
  {/if}
</div>

<script lang="ts">
  import background from "$lib/assets/lebron-bg.jpg";
  import successBackground from "$lib/assets/lebron-success-bg.jpg"

  let backgroundStyle = `background: url(${background}) no-repeat center center; width: 100vw; height: 100vh; background-size: 100vw 100vh; position: absolute;`;
  let backgroundOverlayStyle = "background: rgba(0,0,0,0.15) no-repeat center center; width:100vw; height: 100vh; z-index: 1; position: absolute;";
  let clickerCounterStyle: string = "color: white; position: absolute; z-index: 2; margin-left: 11rem;";

  const goal: number = 10;
  let counter: number = 0;

  let displayFlag: bool = false;


  let flag: string = "CTF220S{Very Secret Flag}";

  function updateCounter(step: number = 1){
    if(counter < goal)
      counter += step;
    ((goal - counter) < 1) ? handleSuccess() : console.log("");
  }

  function handleSuccess(){
    clickerCounterStyle = "color: white; position: absolute; z-index: 2; margin-left: 10rem;";
    backgroundStyle = `background: url(${successBackground}) no-repeat center center; width: 100vw; height: 100vh; background-size: 100vw 100vh; position: absolute;`;
    backgroundOverlayStyle = "background: rgba(0,0,0,0) no-repeat center center; width:100vw; height: 100vh; z-index: 1; position: absolute;"
    
    displayFlag = true;
  }

</script>

<style>
  #clicker {
      position: relative;
      width: 400px;
      height: 400px;
  }

  #clicker::before,
  #clicker::after {
      content: "";
      position: absolute;
      width: 200px;
      height: 320px;
      background: red;
      border: 8px solid black;
      border-radius: 200px 200px 0 0;
  }

  #clicker::before {
      left: 200px;
      transform: rotate(-45deg);
      transform-origin: 0 100%;
  }

  #clicker::after {
      left: 0;
      transform: rotate(45deg);
      transform-origin: 100% 100%;
  }
</style>
