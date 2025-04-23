const sqlite = require("sqlite3").verbose();

const db = new sqlite.Database("database/gems.sqlite", function (err) {
  if (err) console.log("Failed Connect: Gems SQLite Database");
  else console.log("successful Connect: Gem SQLite Database");
});

async function getAllGemCharacters() {
  return new Promise((resolve, reject) => {
    db.all(`select * from gemCharacters;`, function);
  });
}
