import mongoose from "mongoose"

export default class Connect  {
   constructor(private url: string)  {}

   async connection ()  {
     console.log("url: ", this.url)
     return await mongoose.connect(`${this.url}`, {useNewUrlParser: true})
      .then(() =>  {
        mongoose.Promise = Promise;
        mongoose.set('useCreateIndex', true);
        console.log("conexión a Mongo gut")
       })
       .catch((e:any) =>  {
         console.log("Error en Mongo")
         console.log(e.name)
       })
   }
}
