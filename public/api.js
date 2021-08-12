const API = {
  async getLastWorkout() {
    let res;
    // console.log(`/public/api.js | WHAT IS res BEFORE FETCH?`, res.json())
    try {
      res = await fetch("/api/workouts");
      // console.log(`/public/api.js | WHAT IS res AFTER FETCH?  `, res.json())
    } catch (err) {
      console.log(err)
    }
    
    const json = await res.json();
    console.log(`getLastWorkout - anything:  `, json)

    // return json[json.length - 1];
    return json[json.length];
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
