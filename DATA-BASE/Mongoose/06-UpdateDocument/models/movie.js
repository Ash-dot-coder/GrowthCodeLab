import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 40000,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
});

const movieModel = mongoose.model("movie", movieSchema);

// Update Document
// updateOne(filter, whatToChange?)
const updateByID = async () => {
  //   try {
  //     const result = await movieModel.findByIdAndUpdate(
  //       "686776b0103905f87eb25569",
  //       {
  //         ratings: 4.78,
  //         genre: ["Sad", "Struggle", "HeartFelt", "Loving"],
  //       }
  //     );
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
};

// Update only one
// updateOne(filter, whatToChange?)
const updateOne = async (id) => {
  // try {
  //   const result = await movieModel.updateOne({ _id: id }, { name: "Kuberaa" });
  //   console.log(result);
  // } catch (error) {
  //   console.log(error);
  // }
};

// Update Many
const updateMany = async () => {
  try {
    const result = await movieModel.updateMany(
      { ratings: 4.8 },
      { comments: [{ value: "most powerful storyline" }] }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { updateByID, updateOne, updateMany };
