const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    Nationality: {
        type: String,
        required: true
    },
    Overall: {
        type: Number,
        required: true
    },
    Potential: {
        type: Number,
        required: true
    },
    Club: String,
    Value: String,
    Wage: String,
    PreferredFoot: String,
    InternationalReputation: Number,
    WeakFoot: Number,
    SkillMoves: Number,
    WorkRate: String,
    BodyType: String,
    Position: String,
    JerseyNumber: Number,
    Joined: String,
    LoanedFrom: String,
    ContractValidUntil: String,
    Height: String,
    Weight: String,
    Crossing: Number,
    Finishing: Number,
    HeadingAccuracy: Number,
    ShortPassing: Number,
    Volleys: Number,
    Dribbling: Number,
    Curve: Number,
    FKAccuracy: Number,
    LongPassing: Number,
    BallControl: Number,
    Acceleration: Number,
    SprintSpeed: Number,
    Agility: Number,
    Reactions: Number,
    Balance: Number,
    ShotPower: Number,
    Jumping: Number,
    Stamina: Number,
    Strength: Number,
    LongShots: Number,
    Aggression: Number,
    Interceptions: Number,
    Positioning: Number,
    Vision: Number,
    Penalties: Number,
    Composure: Number,
    Marking: Number,
    StandingTackle: Number,
    SlidingTackle: Number,
    GKDiving: Number,
    GKHandling: Number,
    GKKicking: Number,
    GKPositioning: Number,
    GKReflexes: Number,
    ReleaseClause: String
});

module.exports = mongoose.model('Player', playerSchema);
