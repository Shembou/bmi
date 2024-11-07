import { User } from '@/entities/User'
import { AppDataSource } from './data-source'
import 'reflect-metadata'

export async function initializeDatabase() {
  if (!AppDataSource.isInitialized) {
    AppDataSource.initialize()
      .then(async () => {
        const user = new User()
        user.username = `${process.env.ADMINISTRATOR_USERNAME}`
        user.password = `${process.env.ADMINISTRATOR_PASSWORD}`

        try {
          const userRepository = AppDataSource.getRepository(User)
          const users = await userRepository.find()
          if (users.length == 0) {
            await userRepository.save(user)
          }
        } catch (error) {
          console.log('error while adding user', error)
        }
      })
      .catch(error => console.log(error))
  }
}
