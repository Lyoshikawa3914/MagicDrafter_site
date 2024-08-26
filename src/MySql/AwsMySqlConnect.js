// Import the necessary AWS SDK v3 modules
import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm";
import mysql from 'mysql2/promise';

// Initialize the SSM client
const ssmClient = new SSMClient({ region: 'us-west-1' });

/**
 * Fetches a parameter value from AWS Systems Manager Parameter Store
 * @param {string} parameterName - The name of the parameter to fetch
 * @returns {Promise<string>} - A promise that resolves to the parameter value
 */
const getParameter = async (parameterName) => {
    const command = new GetParameterCommand({
        Name: parameterName,
        WithDecryption: true // Set to true if the parameter is stored as a SecureString
    });

    try {
        const data = await ssmClient.send(command);
        return data.Parameter.Value;
    } catch (error) {
        console.error(`Error retrieving parameter ${parameterName}:`, error);
        throw error;
    }
};

/**
 * Establishes a connection to MySQL database using credentials from AWS Systems Manager Parameter Store
 * @returns {Promise<mysql.Connection>} - A promise that resolves to the MySQL connection
 */
export async function AwsMySqlConnect() {
    try {
        // Fetch credentials and connection details from Parameter Store
        const dbHost = await getParameter('mtgDraftHost');
        const dbUser = await getParameter('mtgDraftUser');
        const dbPassword = await getParameter('mtgDraftPassword');
        const dbDatabase = await getParameter('mtgDraftDb');

        // Create a connection to the MySQL database
        const connection = await mysql.createConnection({
            host: dbHost,
            user: dbUser,
            password: dbPassword,
            database: dbDatabase,
            port: 3306 // Use the appropriate port if different
        });

        console.log('Connected to the database');
        return connection;
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
}

// Call the function to establish the connection
//AwsMySqlConnect();
