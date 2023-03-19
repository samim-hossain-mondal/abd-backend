# My Agile Dashboard
A Dashboard for management of Agile SDLC.

1. Run `npm install` in the project directory.

    In this step, all dependencies will be installed.

2. Refer `.env.example` and set up your `.env` file.

    (i)  Create a `.env` file in the project directory.
    (ii) Next, set up your environment variables.
        - Server Port: This is the port on which the server will run. (Default: 3001, if you dont set this variable)
        - Management DB (PostgreSQL) url: This is the lookup DB for projects and members.
        - Dashboard DB (PostgreSQL) url: This is the data DB for a project dashboard.
        - Okta Client ID 
        - Okta Domain url

3. Run `npm run migrate` to create the databases.
    
    In this step, the databases will be created as per the schema, in the locations specified in your `.env` file.

4. Run `npm run generate` to generate clients for databases.

    In this step, the clients for the databases will be generated. This is required for the server to connect to the databases and performm CRUD operations.

5. Run `npm run start` to start the server.

    In this step, the server will start and you can access the dashboard at `http://localhost:3001` or the port you have set in your `.env` file.