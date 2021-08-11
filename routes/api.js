const router = require("express").Router();
const db = require('../models/index')
// const Transaction = require("../models/transaction.js");
// const app = express();

router.get("/api/workouts", (req, res) => {
  db.workouts.findOne({})
    .then(dbWorkoutData => {
      console.log(`get...workouts - all data:  `, dbWorkoutData)
      res.json(dbWorkoutData);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/exercise", (req, res) => {
  db.workouts.find({})
    .then(dbExerciseData => {
      console.log(`get...exercises - all data:  `, JSON.stringify(dbExerciseData))
      for (let i = 0; i < dbExerciseData.length; i++) {
        console.log(`get...exercises - data from loop:  `, dbExerciseData[i])
        
      }
      res.json(dbExerciseData);
    })
    .catch(err => {
      res.json(err);
    });
});
// router.get('/api/workouts')
// router.post("/api/transaction", ({ body }, res) => {
//   Transaction.create(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.get("/api/transaction", (req, res) => {
//   Transaction.find({})
//     .sort({ date: -1 })
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

module.exports = router;
