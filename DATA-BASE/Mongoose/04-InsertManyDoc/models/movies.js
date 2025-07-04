import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
});

const MovieModel = mongoose.model("Movie", movieSchema);

const insertManyDocs = async () => {
  try {
    // Movie-1
    const m1 = new MovieModel({
      name: "Padakkalam",
      ratings: 4,
      money: 34000,
      genre: ["comedy", "magic", "drama"],
      isActive: true,
      comments: [{ value: "This was super comedian movie 🧙🏻‍♂️🔃🔮" }],
    });

    // Movie-2
    const m2 = new MovieModel({
      name: "GymKhana",
      ratings: 4,
      money: 47000,
      genre: ["comedy", "sports", "drama"],
      isActive: true,
      comments: [{ value: "This was super comedian & entertaining movie 🥊♥❤" }],
    });

    // Movie-3
    const m3 = new MovieModel({
      name: "Tourist Movie",
      ratings: 4,
      money: 67000,
      genre: ["comedy", "emotional", "family drama"],
      isActive: true,
      comments: [
        { value: "This was super comedian & entertaining loving movie 😍" },
      ],
    });

    // Movie-4
    const m4 = new MovieModel({
      name: "Meiyazhagan",
      ratings: 4,
      money: 73000,
      genre: ["comedy", "emotional", "family drama"],
      isActive: true,
      comments: [
        { value: "This was super comedian & entertaining loving movie 💞" },
      ],
    });

    // Movie-5
    const m5 = new MovieModel({
      name: "Kuberaa",
      ratings: 4.1,
      money: 73000,
      genre: ["emotional", "family drama"],
      isActive: true,
      comments: [
        { value: "This was super Inspired & Entertaining loving movie 👁‍🗨💞" },
      ],
    });

    // Movie-5
    const m6 = new MovieModel({
      name: "Dunki",
      ratings: 4.8,
      money: 73000,
      genre: ["emotional", "family drama"],
      isActive: true,
      comments: [
        { value: "This was one of the super Inspired, Emotional - Entertaining loving movie 😍🎬" },
      ],
    });

    const result = await MovieModel.insertMany([m1, m2, m3, m4, m5, m6]);
    console.log(`✅ You got it Successfully: ${result}`);
  } catch (error) {
    console.log("❌ Connection got failed: ", error);
  }
};

export { insertManyDocs };
