const {User} = require('../models/index');

const resolvers = {
    Query: {
        User: async () =>{
            return User.find({});
        }
    },
    Mutation: {
        createUser: async () => {
            const users = await Matchup.create();
            return matchup;
        },
        createSavedBooks: async () => {
            const savebook = await users.findOneAndUpdate(
                {_id},
                {new:true}
            );
            return savebook
        }
    }
}

module.exports = resolvers;
