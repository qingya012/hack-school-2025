const Poll = require("../models/Poll");

// TODO
// ACTIVITY 2a - Implement getPolls function (return all polls)
const getPolls = async () => {
    try{
        const polls =  await Poll.find();

        console.log("Polls retrieved successfully:", polls);

        return polls;
    } catch (error) {
        console.error("Error retrieving polls:", error);
        throw error;
    }
}

module.exports = { getPolls };

// ACTIVITY 2b - Implement getPoll function (get one poll by id)
const getPoll = async (pollId) => {
    try{
        const { id } = pollId.params;
        const poll = await Poll.findById(id);

        console.log("Poll retrieved successfully:", poll);

        return poll;
    } catch (error) {
        console.error("Error retrieving poll:", error);
        throw error;
    }
}

module.exports = { getPoll };

// END ACTIVITY 2

// TODO
// ACTIVITY 3a - Implement postPoll function to create a new poll

// ACTIVITY 3b - Implement postVote function to cast a vote

// ACTIVITY 3c - Implement module exports

// END ACTIVITY 3
