    import mongoose from "mongoose";

    const connectDB = async (DATABASE_URL) => {
    try {
        await mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log("✅ Database Connected ..");
    } catch (error) {
        console.log("❌ Database Connection Error:", error);
    }
    };

    export default connectDB;
