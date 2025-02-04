<!-- src/Contact.svelte -->
<script>
    let name = '';
    let email = '';
    let message = '';
  
    function handleSubmit(e) {
      e.preventDefault();
      console.log({ name, email, message });
      alert("Thank you for contacting us!");
      name = '';
      email = '';
      message = '';
    }
  </script>
  
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-8">
    <div class="max-w-xl w-full bg-white p-8 shadow-md rounded">
      <h1 class="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <form on:submit={handleSubmit} class="space-y-4">
        <div>
          <label for="name" class="block text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            bind:value={name}
            class="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label for="email" class="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            bind:value={email}
            class="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label for="message" class="block text-gray-700">Message</label>
          <textarea
            id="message"
            bind:value={message}
            rows="4"
            class="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
  