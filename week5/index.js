function getApiData() {
  console.log("getting API Data");
  const apiFetchResp = await fetch(`https://digimon-api.vercel.app/api/digimon`)
  console.log("API Response", apiFetchResp);
    .then(function (resp) {
      console.log("API Response:", resp);
      return resp.json();
    })
      .then(function (resp) {
        console.log("API JSON", resp);
      })
      .catch(function (err) {
        console.log("API ERROR", err);
      })
      .finally(function () {});
  console.log("API Done");
}

// getApiData();

function getSlowResource() {
  return new Promise(function (resolve, reject) {
    if (timerAmount > 2000) {
      reject("I'm not waiting for that.");
    } else {
      setTimeout(function () {
        resolve("Hurray!");
      }, timerAmount);
    }
  });
}

function run() {
  console.log("Attempt Resource Load");
  getSlowResource(3000)
  .then((resp) => )
}
