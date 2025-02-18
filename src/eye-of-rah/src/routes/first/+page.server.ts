let savedPasswordsCache: string;
let correctPassword: string;

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const password = formData.get('password');
    const savedPasswordsString = formData.get("savedPasswords");

    if(savedPasswordsString != null){
      savedPasswordsCache = savedPasswordsString;
    }

    const savedPasswordsArr = savedPasswordsCache.split(",");
    
    if (!password) {
      return { error: 'All fields are required.' };
    }

    if (savedPasswordsArr == null){
      return { error: 'Passwords not defined in SQL'};
    }

    correctPassword = savedPasswordsArr[1];

    let success;
    (password === correctPassword) ? success = true : success = false;

    return {success: success};
  }
};

