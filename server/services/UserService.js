const userModel = require("../models/userModel");

class UserService {
    async getAll() {
        const users = await userModel.find();
        return users;
    }

    async get(id) {
        if(!id) {
            throw new Error("Id не указан");
        }
        const user = await userModel.findById(id);
        return user;
    }

    async create(user) {
        const newUser = await userModel.create(user);
        return newUser;
    }

    async update(user) {
        const updatedUser = await userModel.findByIdAndUpdate(user._id, user, {new: true});
        return updatedUser;
    }

    async delete(id) {
        if(!id) {
            throw new Error("Id не указан");
        }
        const user = userModel.findByIdAndDelete(id);
        return user;
    }
}

module.exports = new UserService();