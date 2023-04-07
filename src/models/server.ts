import express, { Application } from 'express'
import cors from 'cors'
import { dbConnection } from '../db/connectionDB'
import usersRoutes from '../routes/user'

export class Server {


    private port: string | undefined
    private app : Application
	private path = {
		users: '/api/user',
        animalShelter: '/api/animalshelter'

	}


	constructor(){
		this.app = express()
		this.port = process.env.NODE_ENV === 'dev' ? process.env.PORT_DEVELOPMENT : process.env.PORT
		this.connectionDB()
		this.middlewares()
		this.routes()
	}


	middlewares() {
		this.app.use(cors())
		this.app.use(express.json())
	}


	async connectionDB() {
		await dbConnection()
	}


	routes() {
		this.app.use(this.path.users, usersRoutes)
		// this.app.use(this.path.animalShelter, animalShelterRoutes)
	}
    
	listen(){
		this.app.listen(this.port, () => {
			console.log(`Server run in ${this.port}`)
		})
	}



}