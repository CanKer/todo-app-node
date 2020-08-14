import mongoose, { Schema, Document } from "mongoose"

const TODOSchema: Schema = new Schema({
  description: {  type: String,
                  required: [true, "description required"],
                  unique: true,
                  lowercase: true,
                  trim: true,
            },
  done:       { type: Boolean,
              default: false
            }
})

const TODO = mongoose.model('TODO', TODOSchema)
export default TODO
