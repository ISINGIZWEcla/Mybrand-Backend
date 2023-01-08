import Like from "../models/likes.js" ;

export class LikeServices {
    static async findLikesByBlogId(blogId){
        return Like.findOne({ blogId: blogId });
    }
    static async createLike(data){
        let like = new Like(data)
        await like.save()
        return like
    }
}