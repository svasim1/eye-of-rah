<!-- src/AboutUs.svelte -->
<script>
    // No script needed for this static page
  </script>
  
  <section class="bg-gray-50">
    <div class="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="md:flex md:items-end md:justify-between">
        <div class="max-w-xl">
          <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            About Us
          </h2>
          <p class="mt-6 max-w-lg leading-relaxed text-gray-700">
            We are a dedicated team of financial experts and educators committed to helping you unlock your full potential. Our "Become a Millionaire in Two Weeks" course is built on years of real-world experience, innovative strategies, and a passion for success.
          </p>
        </div>
  
        <a
          href="/contact"
          class="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-rose-600 px-5 py-3 text-rose-600 transition hover:bg-rose-600 hover:text-white md:mt-0"
        >
          <span class="font-medium">Get in Touch</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
  
      <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <!-- Our Founders -->
        <blockquote class="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
          <div>
            <div class="flex gap-2">
              <img src="https://via.placeholder.com/40" alt="Founder 1" class="rounded-full" />
              <img src="https://via.placeholder.com/40" alt="Founder 2" class="rounded-full" />
              <img src="https://via.placeholder.com/40" alt="Founder 3" class="rounded-full" />
            </div>
            <div class="mt-4">
              <p class="text-2xl font-bold text-rose-600 sm:text-3xl">
                Our Founders
              </p>
              <p class="mt-4 leading-relaxed text-gray-700">
                Our visionary founders have combined decades of financial expertise with innovative teaching methods. They believe in breaking the mold and delivering results that truly transform lives.
              </p>
            </div>
          </div>
          <footer class="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
            &mdash; The Founding Team
          </footer>
        </blockquote>
  
        <!-- Our Mission -->
        <blockquote class="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
          <div>
            <div class="flex gap-2">
              <svg class="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414L9 14.414l-3.707-3.707a1 1 0 00-1.414 1.414l4.414 4.414a1 1 0 001.414 0l8-8a1 1 0 00-1.414-1.414z" />
              </svg>
              <svg class="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414L9 14.414l-3.707-3.707a1 1 0 00-1.414 1.414l4.414 4.414a1 1 0 001.414 0l8-8a1 1 0 00-1.414-1.414z" />
              </svg>
            </div>
            <div class="mt-4">
              <p class="text-2xl font-bold text-rose-600 sm:text-3xl">
                Our Mission
              </p>
              <p class="mt-4 leading-relaxed text-gray-700">
                We empower you with the tools, knowledge, and mindset to achieve financial independence quickly. Our mission is to redefine success by turning dreams into achievable goals.
              </p>
            </div>
          </div>
          <footer class="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
            &mdash; Our Mission Statement
          </footer>
        </blockquote>
  
        <!-- Success Stories -->
        <blockquote class="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
          <div>
            <div class="flex gap-2">
              <img src="https://via.placeholder.com/40" alt="Student 1" class="rounded-full" />
              <img src="https://via.placeholder.com/40" alt="Student 2" class="rounded-full" />
              <img src="https://via.placeholder.com/40" alt="Student 3" class="rounded-full" />
            </div>
            <div class="mt-4">
              <p class="text-2xl font-bold text-rose-600 sm:text-3xl">
                Success Stories
              </p>
              <p class="mt-4 leading-relaxed text-gray-700">
                Our students’ achievements speak volumes. From skyrocketing their incomes to transforming their lifestyles, their success stories are our proudest accomplishments.
              </p>
            </div>
          </div>
          <footer class="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
            &mdash; Our Community
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
  