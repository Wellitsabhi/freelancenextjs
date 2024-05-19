import mongoose, {Schema, Document } from "mongoose";    


// For Message Schema
// Message interface (from TS)
// extends , as it will go in mongoose Documents
export interface Message extends Document{
    content :string;
    createdAt : Date
}

//TS, type 'Schema' custom schema 'Message' 
const MessageSchema: Schema<Message> = new Schema({ 
    content:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    },
})

// For User Schema
export interface User extends Document{
    username :string;
    email : string;
    password : string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    message: Message[];
}
// User Schema
const UserSchema: Schema<User> = new Schema({ 
    username:{
        type: String,
        required: [true,"Usernaame required"],
        trim: true,
        unique: true
    },
    email:{
        type: String,
        required: [true,"Email required"],
        unique: true,
        matched: [/.+\@.+\..+/,'please use valid email address']
    },
    password:{
        type: String,
        required:  [true,"Password required"],
    },
    verifyCode:{
        type: String,
        required:  [true,"Verify code required"],
    },
    verifyCodeExpiry:{
        type: Date,
        required:  [true,"Verify code expiry  required"],
        default: Date.now
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    isAcceptingMessage:{
        type: Boolean,
        default: true
    },
    message:[MessageSchema],
})


const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema)

export default UserModel;