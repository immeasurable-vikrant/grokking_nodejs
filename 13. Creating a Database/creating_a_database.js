/**
 * 
 Creating a database & mongodb
    
    MongoDB Setup and Connection Guide
        This guide walks you through the steps to create a MongoDB Atlas cluster, set up a user, retrieve the connection string, and connect the database using MongoDB Compass.

        1. Creating a MongoDB Atlas Account and Setting up a Cluster
            Step 1: Go to MongoDB Website
                - Visit the MongoDB Atlas website.
                - Sign up or log in if you already have an account.
            Step 2: Create a Free M0 Cluster
                - After signing in, go to the Atlas dashboard.
                - Click on the Create a New Cluster button.
                - Choose a free tier by selecting the M0 Sandbox cluster.
                - Choose a cloud provider (AWS, Google Cloud, or Azure) and a region (select a region close to your location for optimal performance).
                - Click Create Cluster.
                - This process may take a few minutes. MongoDB will notify you once the cluster is ready.

        2. Creating a Database User
            Step 3: Set Up a Database User
                - After the cluster is created, you will need to set up a user to access the database.
                - Navigate to the Database Access tab on the left side of the Atlas dashboard.
                - Click Add New Database User.
                - Enter a username and password for the new user. Keep these credentials secure, as you will need them to connect to the database.
                - Choose Read and write to any database as the role.
                - Click Add User.

        3. Setting Network Access
        
            Step 4: Configure Network Access
                - Navigate to the Network Access tab.
                - Click Add IP Address.
                - Select Allow access from anywhere if you want to access your database from any IP address, or add your specific IP address.
                - Click Confirm.

        4. Getting the Connection String
            Step 5: Retrieve the Connection String
                - Go to the Clusters tab on the left side.
                - Click on Connect next to your cluster.
                - Choose Connect your application.
                - Copy the connection string that looks something like this:
                mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
                - Replace <username> and <password> with the credentials of the user you created.
                - Replace <dbname> with the name of the database you want to connect to.
        
        5. Installing and Connecting MongoDB Compass
            Step 6: Install MongoDB Compass
                - Download and install MongoDB Compass.
                - Once installed, open MongoDB Compass.
            Step 7: Connect to Your Cluster
                - In MongoDB Compass, you will be prompted to enter the connection string.
                - Paste the connection string you copied earlier from MongoDB Atlas.
                - Replace <password> with the password of the user you created.
                Click Connect.
                - You should now be successfully connected to your MongoDB cluster and able to manage your database locally using MongoDB Compass.

        6. Verifying Connection
            Step 8: Check Connection in MongoDB Compass
                - Once connected, MongoDB Compass will show a list of your databases in the cluster.
                - Click on your database to manage collections, documents, and perform queries.
                - You can create new databases or collections using the New Database button.
        
        7. Creating and Managing Databases (Optional)
            Step 9: Create a New Database
                - After connecting, click on the Databases tab in MongoDB Compass.
                - Click Create Database.
                - Enter a Database Name and Collection Name for your new collection (table).
                - Click Create Database to create a new database and collection in your MongoDB cluster.
                
            Step 10: Managing Collections
                - Once inside a database, you can add, delete, or update documents (records) inside a collection.
                - To add a document, click Insert Document.
                - Add your data in JSON format and click Insert.
        
        8. Troubleshooting
            Step 11: Handling Connection Issues
                - Whitelist IP Address: Ensure that your current IP address is whitelisted in Network Access settings in MongoDB Atlas.
                - User Authentication: Make sure the correct username and password are used in the connection string.
                - Connection Timeout: Check your internet connection or cluster region if the connection is timing out.
            Step 12: Resetting MongoDB Compass Configuration (if needed)
            - If you face persistent connection issues, try resetting MongoDB Compass settings.
            - Go to Settings → Reset Compass to return to the default configuration.
        
        
        - Conclusion
            By following this guide, you have successfully:

            - Installed MongoDB Compass.
            - Connected it to your MongoDB Atlas cluster.
            - Verified the connection and managed databases.
            - Handled basic troubleshooting issues.
            - Now, you are ready to start working with MongoDB locally or integrate it into your applications.
        
            Database Connection and MongoDB CRUD Operations Overview
                - This document covers how to connect to a MongoDB server and perform CRUD (Create, Read, Update, Delete) operations using the MongoDB Node.js library.

            1. Connecting to the Database Server
                To connect to a MongoDB, first install the MongoDB Node.js driver:

                "npm install mongodb"       
*/
// Database Connection
const { MongoClient } = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'Namaste-Nodejs';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  return 'done.';
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
/**
    2. Introduction to CRUD
        CRUD operations are fundamental to interacting with databases. Each operation corresponds to a specific action that can be performed on data stored in the database. Here’s a brief overview of each operation:

            1.1 Create
                - Definition: The Create operation adds new documents to a MongoDB collection.
                - Purpose: Used to insert new records or entries into a database.
                    Example Use Cases: Adding a new user profile, creating a new product listing, or recording a new transaction.
                    
                    const  data  = {
                        firstname:  "Akshad",
                        lastname:  "Jaiswal",
                        city:  "Pune",
                        phoneNumber:  "88526587",
                    }
                //Create
                    const insertData = await collection.insertMany([data])
                    console.log("data inserted = ", insertData)
            
            
            1.2 Read
                - Definition: The Read operation retrieves documents from a MongoDB collection.
                - Purpose: Used to query and obtain data stored in the database.
                Example Use Cases: Fetching user details, listing products, or generating reports based on stored data.

                //Read
                const  findData  =  await  collection.find({}).toArray();
                console.log("All data :", findData)
            
            
            1.3 Update
                - Definition: The Update operation modifies existing documents in a MongoDB collection.
                - Purpose: Used to change the values of specific fields in existing documents.
                    Example Use Cases: Updating user information (like email or password), changing the status of an order, or modifying product details.

                    // Update
                        const updateData = await collection.updateOne({ _id: new ObjectId('67066d6a3be8f41630d5dae4') }, { $set: { firstname: "Mint" } })
                        console.log("Updated document ", updateData)

            1.4 Delete
                - Definition: The Delete operation removes documents from a MongoDB collection.
                - Purpose: Used to permanently delete records that are no longer needed.
                - Example Use Cases: Deleting a user account, removing a product that is out of stock, or purging outdated transaction records.
                
                //delete
                    const deletedata = await collection.deleteOne({ _id: new ObjectId('670668562c6bd11e25050c13') })
                    console.log("deleted data=>", deletedata)
            
            3. Summary of CRUD Operations
                - Operation	Description	Example Use Case
                    - Create	Adds new documents to a collection	Adding a new user profile
                    - Read	Retrieves documents from a collection	Fetching user details
                    - Update	Modifies existing documents in a collection	Updating user information
                    - Delete	Removes documents from a collection	Deleting a user account
            4. Conclusion
                Understanding CRUD operations is essential for effectively managing data in a MongoDB database. These operations enable users to create, retrieve, modify, and delete records, allowing for comprehensive data manipulation and management. Mastery of these operations forms the foundation for building applications that rely on database interactions.
 */