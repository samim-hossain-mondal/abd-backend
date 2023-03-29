# My Agile Dashboard
A Dashboard for management of Agile SDLC.

Steps to set up the project on your local machine:

1. Clone the repository.
    
        git clone https://github.com/tech-university-india/abd-backend <name of directory on your local>
        
        

2. Run `npm install` in the project directory.
        
        npm install
    
    In this step, all dependencies will be installed.
    
    

3. Refer `.env.example` and set up your `.env` file.

    (i)  Create a `.env` file in the project directory.
    
    (ii) Next, set up your environment variables.
    
    * Server Port: This is the port on which the server will run. (Default: 3001, if you dont set this variable)

    * Management DB (PostgreSQL) url: This is the lookup DB for projects and members.

    * Dashboard DB (PostgreSQL) url: This is the data DB for a project dashboard.

    * Okta Client ID 

    * Okta Domain url
    
        

4. Run `npm run migrate` to create the databases.

        npm run migrate
    
    In this step, the databases will be created as per the schema, in the locations specified in your `.env` file and the Prisma clients for the databases will be generated.

5. Run `npm run start` to start the server.

        npm run start

    In this step, the server will start and you can access the dashboard at `http://localhost:3001` or the port you have set in your `.env` file.
