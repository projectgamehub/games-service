import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
    {
        gameName: {
            type: String,
            required: true
        },
        gameSlug: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        gameLink: {
            type: String,
            required: true
        },
        banners: [
            {
                type: String
            }
        ],
        poster: {
            type: String
        },
        isMultiplayer: {
            type: Boolean,
            default: false
        },
        comingSoon: {
            type: Boolean,
            default: false
        },
        maxScoreAddAllowedPerDay: {
            type: Number,
            default: 999
        }
    },
    { timestamps: true }
);

const Game = mongoose.model("Game", gameSchema);

export default Game;
