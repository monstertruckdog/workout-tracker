const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  date: {
    type: Date,
    // unique: true
  },
  exercise: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise"
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const workoutSchema = new Schema({
//   day: {
//     type: Date,
//   },
  
//   exercises: [
//     {
//       type: {
//         type: String
//       },
//       name: {
//         type: String
//       },
//       duration: {
//         type: Number
//       },
//       weight: {
//         type: Number
//       },
//       reps: {
//         type: Number
//       },
//       sets: {
//         type: Number
//       },
//       distance: {
//         type: Number
//       }
//     },
//   ],
// });

// const Workout = mongoose.model("Workout", workoutSchema);

// module.exports = Workout;