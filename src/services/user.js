import User from "../models/user.model.js" ;

export class UserServices {
    static async findUserId(userId){
        return User.findOne({ _id: userId });
    }
    static async createUser(userInfo){
        let user = new User(userInfo);
        await user.save()

        return user
    }
}