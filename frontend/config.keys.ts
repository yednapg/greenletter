import {Client,Account, Databases} from "appwrite"
import { PROJECT_ID,API_ENDPOINT } from "./config.env";
const client = new Client();


// Init your Web SDK
client
    .setEndpoint(API_ENDPOINT) // Your API Endpoint
    .setProject(PROJECT_ID) // Your project ID
;


export const database =new Databases(client)
export const account = new Account(client);