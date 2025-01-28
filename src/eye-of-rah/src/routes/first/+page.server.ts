export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const password = formData.get('password');
    let success

    if (!password) {
      return { error: 'All fields are required.' };
    }

    // Simulate processing (e.g., saving to a database)
    console.log('Form data received:', { password });

    (password === "Eye Of Rah") ? success = true : success = false;

    return {success: success}
  }
};

