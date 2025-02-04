import initSqlJs from 'sql.js';

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
    return {success: success};
  }
};

async function runSQLite(){
  const SQL = await initSqlJs({locateFile: file => `https://sql.js.org/dist/${file}`});

  const db = new SQL.Database();

  db.run(`CREATE TABLE login (id INTEGER PRIMARY KEY, name TEXT, password TEXT)`);

  db.run(`INSERT INTO login (name, password) VALUES ('user1','eye-of-rah'), ('Admin', 'admin')`);

  const res = db.exec("SELECT * FROM login");
  console.log(res);

  const data = db.export();
  localStorage.setItem('lebonbondb', JSON.stringify(Array.from(data)));
}

runSQLite();
