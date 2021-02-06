// import the Mongoose models:
const { User } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().select("-__v -password");
    },

    user: async (parent, { username }) => {
      return User.findOne({ username }).select("-__v -password");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
    },

    //   login: async (parent, { email, password }) => {
    //     const user = await User.findOne({ email });
    //     if (!user) {
    //       throw new AuthenticationError("Incorrect credentials");
    //     }
    //     const correctPw = await user.isCorrectPassword(password);
    //     if (!correctPw) {
    //       throw new AuthenticationError("Incorrect credentials");
    //     }
    //     // 21.2.4 sign a token and return an object that combines the token with the user's data
    //     const token = signToken(user);
    //     return { token, user };
    //   },

    //   addThought: async (parent, args, context) => {
    //     if (context.user) {
    //       const thought = await Thought.create({
    //         ...args,
    //         username: context.user.username,
    //       });
    //       await User.findByIdAndUpdate(
    //         { _id: context.user._id },
    //         { $push: { thoughts: thought._id } },
    //         // 保存updated document
    //         { new: true }
    //       );
    //       return thought;
    //     }
    //     throw new AuthenticationError("You need to be logged in!");
    //   },
  },
};

module.exports = resolvers;
