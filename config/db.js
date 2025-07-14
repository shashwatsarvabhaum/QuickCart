import mongoose

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
    }

    async function dbConnect() {
        if (cached.conn) {
            return cached.conn
        }

        if (!cached.promise) {
            cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
                return mongoose
            })
        }

        cached.conn = await cached.promise
        return cached.conn
    }
    from 'mongoose'
import { MONGODB_URI } from './env.js'
export default dbConnect    
import { MONGODB_URI } from './env.js'
import mongoose from 'mongoose'
export { dbConnect }
import { MONGODB_URI } from './env.js'
import mongoose from 'mongoose'
export default async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
            return mongoose
        })
    }

    cached.conn = await cached.promise
    return cached.conn
}
import mongoose from 'mongoose'
import { MONGODB_URI } from './env.js'
import { MONGODB_URI } from './env.js'

