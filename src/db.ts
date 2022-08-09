import mysql, { Connection } from "mysql2"

export class Database {
    public connection: Connection;
    public name: string;
    public table: string;

    constructor (conn, database){
        this.connection = conn;
        this.name = database;
        this.HeartBeat()
    }
    public static connect (
        db_host: string,
        db_user: string,
        db_pass: string,
        db_name: string
    ): Promise<Database>{
        return new Promise((
            resolve: (a: Database) => void,
            reject: (a)=> void
        ) => {
            const conn = mysql.createConnection({
                host: db_host,
                user: db_user,
                password: db_pass,
                database: db_name
            })
            conn.connect((err: Error): void => {
                if(err){
                    reject(err)
                    return;
                }
                resolve(new this(conn, db_name))
            })
        })
    }

    /**
     * Run any sql query
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public run(sql: string): Promise<Array<any>>{
        return new Promise((
            resolve: (a) => void,
            reject: (a: Error | string) => void
        ) => {
            if(!sql){ return reject(new Error("No query provided")) }
            this.connection.query(sql, (err: Error, res: Array<object>): void => {
                if(err){
                    return reject(err)
                }
                return resolve(res)
            })
        })
    }

    /**
     * Keeps the connection alive
     */
    private HeartBeat(){
        setInterval(() => {
            try {
                this.run(`SELECT 1`)
            } catch (err) {
                console.log(err)
            }
        }, 20000)
    }
}