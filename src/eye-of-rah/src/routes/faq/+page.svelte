<script>
    import { onMount } from 'svelte';

    let faqs = [
      {
        question: 'What is the course about?',
        answer: 'Our course provides proven strategies to become a millionaire in two weeks by teaching you advanced financial techniques and mindset shifts.'
      },
      {
        question: 'How long is the course?',
        answer: 'The course is designed to be completed in just two weeks, with daily lessons and actionable steps.'
      },
      {
        question: 'What payment options are available?',
        answer: 'We offer multiple payment options including credit card, PayPal, and installment plans for your convenience.'
      },
      {
        question: 'Is there a refund policy?',
        answer: 'No, lol.'
      },
      {
        question: 'How do I access the course?',
        answer: 'Once enrolled, you will receive immediate access to our online portal with all course materials and resources.'
      }
    ];

    let active = -1;
    function toggle(index) {
      active = active === index ? -1 : index;
    }
</script>

<div class="min-h-screen bg-gray-100 p-8">
  <div class="max-w-3xl mx-auto bg-white shadow-md rounded p-8">
    <h1 class="text-4xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
    <div class="divide-y divide-gray-300">
      {#each faqs as faq, index}
        <div class="py-4">
          <h2 class="text-xl font-semibold cursor-pointer" on:click={() => toggle(index)}>
            {faq.question}
          </h2>
          {#if active === index}
            <p class="mt-2">{faq.answer}</p>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>