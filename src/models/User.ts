import mongoose, { Schema, Document} from "mongoose"


interface UserI extends Document {
  usernname?: string,
  password?: string
}


const UserSchema: Schema = new Schema({
  email: {  type: String,
                  required: [true, "description required"],
                  unique: true,
                  lowercase: true,
                  trim: true,
                  index:{unique: true}
            },
  password: { type: String,
              default: false,
              required: [true, "password required"],
              trim: true,
            }
})


const User = mongoose.model('User', UserSchema)
export default User
