<script>
    import { onMount } from 'svelte';
  
    const hiddenPromo = 'promo{secret_discount_code}';
    const inputHiddenPromo = 'promo{hidden_offer_inside}';
  
    function revealPromo() {
      console.log('Exclusive Promo:', hiddenPromo);
    }
  
    const base64Offer = btoa('EnrollNow!');
  
    let showPopup = false;
    let popupMessage = 'Limited time offer!';
    const popupMessages = [
      'Limited time offer!',
      'Enroll now for success!',
      'Don’t miss out!',
      'Special discount expires soon!',
      'Become a millionaire today!'
    ];
  
    function randomPopup() {
      popupMessage = popupMessages[Math.floor(Math.random() * popupMessages.length)];
      showPopup = true;
      setTimeout(() => (showPopup = false), 3000);
    }
  
    let popupInterval;
  
    let buttonTop = 50;
    let buttonLeft = 50;
    function moveButton() {
      buttonTop = Math.floor(Math.random() * 90);
      buttonLeft = Math.floor(Math.random() * 90);
    }
  
    onMount(() => {
      popupInterval = setInterval(randomPopup, 10000);
    });
  </script>
  
  <div class="flex">
    <!-- Sidebar -->
    <aside class="w-72 bg-gray-100 p-4 h-screen left-0 top-0">
      <h2 class="text-xl font-semibold mb-3">About Our Course</h2>
      <p class="mb-2">Learn the secrets to fast wealth and financial freedom.</p>
      <p class="mb-4">Our course is designed to teach you proven strategies to become a millionaire in just two weeks.</p>
      
      <a href="/about">About Us</a><br>
      <a href="/faq">FAQ</a><br>
      <a href="/contact">Contact Us</a><br>
      <a href="/tos">Terms of Service</a><br>

    </aside>
  
    <!-- Main Content -->
    <main class="ml-80 p-8 space-y-6">
      <h1 class="text-4xl font-bold">Become a Millionaire in Two Weeks Course</h1>
      <p class="text-lg">
        Invest in your future with our comprehensive course. Learn, apply, and start your journey towards financial success.
      </p>
  
      <img src="https://via.placeholder.com/150" alt="Course Promo" class="w-32 h-32 animate-spin" />
  
      <!-- Hidden promo details -->
      <div class="hidden" id="hidden-promo">{hiddenPromo}</div>
      <input type="hidden" value={inputHiddenPromo} />
  
      <!-- Purchase Modal -->
      <div id="purchase-modal" class="fixed bottom-5 left-5 bg-gray-200 p-4 border border-gray-400 z-50 rounded">
        <h3 class="text-lg font-semibold mb-2">Buy the Course Now!</h3>
        <input type="email" placeholder="Enter your email" class="mb-2 p-1 border border-gray-300 rounded w-full" />
        <button on:click={() => alert('Purchase process initiated!')} class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Purchase
        </button>
      </div>
  
      <!-- Randomly moving button -->
      <button
        class="absolute px-4 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 focus:outline-none"
        style="top: {buttonTop}%; left: {buttonLeft}%;"
        on:mouseover={moveButton}
        on:focus={moveButton}>
        Buy Now!
      </button>
  
      <!-- Background Music -->
      <audio
        id="jingle"
        src="https://archive.org/download/NeverGonnaGiveYouUp/jocofullinterview41.mp3"
        autoplay
        loop>
        Your browser does not support the audio element.
      </audio>
  
      <p class="text-base">
        Open your browser console and type <code class="bg-gray-100 p-1 rounded">revealPromo()</code> for an exclusive offer.
      </p>
      <button on:click={revealPromo} class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Reveal Promo in Console
      </button>
  
      {#each Array(13) as _, i}
        <p class="text-sm">Feature {i + 1}: Learn industry secrets to boost your income.</p>
      {/each}
  
      <!-- Testimonials (Youtube Videos) -->
      <div class="space-y-8 mt-8">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/L_fcrOyoWZ8"
          title="Course Testimonial 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          class="w-full max-w-3xl mx-auto">
        </iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/REuKymvrrqk"
          title="Course Testimonial 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          class="w-full max-w-3xl mx-auto">
        </iframe>
      </div>
    </main>
  </div>
  
  {#if showPopup}
    <div class="fixed top-2 right-2 bg-white p-4 border border-gray-700 z-50 shadow-lg rounded">
      {popupMessage}
    </div>
  {/if}
  
  <style>

  </style>