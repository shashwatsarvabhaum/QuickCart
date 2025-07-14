import { Inngest } from "inngest";
import dbConnect from "./db";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "QuickCart-next" });

// inngest function to save user data to the database
export const syncUserCreation = inngest.createFunction(
    {id : 'sync-user-from-clerk' },
    { event: "clerk/user.created" },
    async ({ event, step }) => {
        const { id, first_name, last_name,email_addresses, image_url } = event.data;
        const userData = {
            _id: id,
            name: `${first_name} ${last_name}`,
            email: email_addresses[0].email_address,
            imageUrl: image_url,
            cartItems: {}
        };
        await dbConnect();
        await user.create(userData);
    }
)

// inngest function to update user data in the database
export const syncUserUpdate = inngest.createFunction(
    { id: 'update-user-from-clerk' },
    { event: "clerk/user.updated" },
    async ({ event, step }) => {
        const { id, first_name, last_name,email_addresses, image_url } = event.data;
        const userData = {
            _id: id,
            name: `${first_name} ${last_name}`,
            email: email_addresses[0].email_address,
            imageUrl: image_url,
            cartItems: {}
        };
        await dbConnect();
        await User.findByIdAndUpdate(id, userData);     
    }
)   

// inngest function to delete user data from the database
export const syncUserDeletion = inngest.createFunction(
    { id: 'delete-user-from-clerk' },
    { event: "clerk/user.deleted" },
    async ({ event, step }) => {
        const { id } = event.data;
        await dbConnect();
        await User.findByIdAndDelete(id);
    }
);