<script lang="ts">
  import background from "$lib/assets/eye-of-rah-bg.jpg";
  import { fireRing } from "$lib/transitions/pageTransition.js";
  import { goto } from "$app/navigation";
  import { enhance } from "$app/forms";
  import { sound } from "svelte-sound";
  import { onMount } from "svelte";
  import initSqlJs from 'sql.js';
  export let form;

  let gongAudio;
  let savedPasswords: Array = [];

  if (typeof window !== "undefined") {
    gongAudio = new Audio("/gong.mp3");
  }

  function handleSuccess() {
    submitSavedPasswords()
    setTimeout(() => {
      if (form?.success) {
        if (gongAudio) {
          gongAudio.play();
        }
        goto("/second", { replaceState: true });
      }
    }, 5000);
  }

  onMount(async () => {
      const SQL = await initSqlJs({locateFile: () => `https://sql.js.org/dist/sql-wasm.wasm`});

      const db = new SQL.Database();

      db.run(`CREATE TABLE login (id INTEGER PRIMARY KEY, name TEXT, password TEXT)`);

      db.run(`INSERT INTO login (name, password) VALUES ('user1','eye-of-rah'), ('Admin', 'admin')`);

      const res = db.exec("SELECT * FROM login");

      res[0].values.forEach((user) => {
        savedPasswords.push(user[2]);
      })  

      if(typeof localStorage !== 'undefined'){
        const data = db.export();
        localStorage.setItem('lebonbondb', JSON.stringify(Array.from(data)));
      } else{
        console.warn("localStorage is not available in this environment");
      }
  })

  async function submitSavedPasswords(){
      const formData = new FormData();

      formData.append('savedPasswords', savedPasswords);

      const res = await fetch("/first", {
          method: 'POST',
          body: formData
      });

      const data = await res.json(); 
  }
  
</script>

<div
  id="background-container"
  style="position: relative; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column;"
>
  <div
    id="background-overlay"
    style="background: rgba(0,0,0,0.4) no-repeat center center; width:100vw; height: 100vh; z-index: 1; position: absolute"
  ></div>
  <div
    id="background-image"
    class="flex flex-row justify-center items-center"
    style="background: url({background}) no-repeat center center; background-size: 100vw, 100vh; width: 100vw; height: 100vh; z-index: 0; position: absolute"
  ></div>

  <div
    id="content"
    style="z-index: 2; display: flex; flex-direction: column; justify-content: space-around; align-items: center; height: 100vh; width: 100vw;"
  >
    <div
      id="main-text"
      class="flex flex-col justify-center items-center self-center size-96 mt-10"
      style="z-index: 2;"
    >
      <h1 class="text-5xl font-bold text-center text-white mb-2">
        The Eye Of Rah
      </h1>
      <h1 class="text-5xl font-bold text-center text-white">Is All-Seeing</h1>
    </div>

    <div
      id="input-form"
      style="z-index: 2; width: 30rem; border-radius: 0.5rem; height:100vh;
    display: flex; justify-content: center; align-items: center; flex-direction: column; position: relative"
    >
      <form
        method="post"
        class="mb-1"
        style="width: 25rem; display: flex; justify-content: space-around; align-items: center; flex-direction: row;
      position: absolute"
        novalidate
        use:enhance={() => {
          handleSuccess();
        }}
      >
        <input
          id="input"
          name="password"
          type="text"
          placeholder="Enter password..."
          style="width: 20rem; padding: 0.3rem 0.5rem; border-radius: 0.5rem; background-color: white; border: solid black 2px;"
          required
        />

        <button
          style="background-color: blue; padding: 0.3rem 0.5rem; border-radius: 0.5rem; border: solid black 2px;"
          class="text-white font-md"
        >
          Submit
        </button>
      </form>
      {#if form?.success === true}
        <p class="text-green-500 self-center font-medium absolute top-85">
          SUCCESS!
        </p>
      {:else if form?.success === false}
        <p class="text-red-500 self-start ml-12 font-medium absolute top-85">
          WRONG PASSWORD!
        </p>
      {:else if form?.error}
        <p class="text-red-500 self-start ml-12 font-medium absolute top-85">
          MUST ENTER A PASSWORD!
        </p>
      {/if}
    </div>
  </div>
</div>

{#if form?.success}
  <div transition:fireRing={{ duration: 5000, gifUrl: "/fire.gif" }}></div>
{/if}
