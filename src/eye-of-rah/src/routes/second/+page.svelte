<script>
  import background from "$lib/assets/lebron-bg.jpg";
</script>

<div id="container" style="position: relative; width: 100vw; height: 100vh; display: flex; user-select: none;">
  <div
    id="background"
    style="background: url({background}) no-repeat center center; width: 100vw; height: 100vh; background-size: 100vw 100vh; position: absolute;"
  >
  </div>
  <div
    id="background-overlay"
    style="background: rgba(0,0,0,0.15) no-repeat center center; width:100vw; height: 100vh; z-index: 1; position: absolute"
  >
  </div>
  <div 
    id="text-container"
    class="flex flex-row justify-start items-start size-128 mt-48 ml-42"
    style="position: absolute; z-index: 1;"
  >
    <h1 class="text-6xl font-bold" style="color: white">
      Show your love for LeBron
    </h1>
  </div>
  <div
    id="clicker-container"
    class="flex flex-row justify-center items-center mt-98 ml-424"
    style="position: absolute"
  >
    <div
      id="clicker"
      style=" z-index:1; position: absolute;"
    >
      <div
        id="clicker-counter"
        class="text-7xl font-bold ml-45 mt-28"
        style="color: white; position: absolute; z-index: 2"
      >
        0
      </div>
    </div>
  </div>
</div>


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
