init();

async function init() {
  console.log(`location.search results:  `, location.search)
  console.log(`locationl.search results with split:  `, location.search.split("=")[1])
  if (location.search.split("=")[1] === undefined) {
    console.log(`location.search.split... branch fired`)
    const workout = await API.getLastWorkout();
    if (workout) {
      console.log(`location.search.split... branch, if workout branch fired`)
      location.search = "?id=" + workout._id;
    } else {
      console.log(`location.search.split... branch, else workout branch fired`)
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

