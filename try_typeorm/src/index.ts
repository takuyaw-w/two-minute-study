import "reflect-metadata";
import {createConnection, getRepository, Repository} from "typeorm";
import {User} from "./entity/User";

const createUser = async (userRepository: Repository<User>) => {
    console.log("create")

    await userRepository.insert({
        firstName: "taro",
        lastName: "yamada",
        age: 22
    });

    await userRepository.save({
        firstName: "Saki",
        lastName: "Suzuki",
        age: 22
    })
}

const readUser = async (userRepository: Repository<User>) => {
    const users = await userRepository.find()
    console.log(users)
    const user = await userRepository.findOne({firstName: "taro"})
    console.log(user);
}

const updateUser = async (userRepository: Repository<User>) => {
    await userRepository.update({lastName: "Suzuki"}, {age: 25})

    const userTaro = await userRepository.findOne({firstName: "taro"})
    userTaro.age = 30
    await userRepository.save(userTaro)

    const users = await userRepository.find()
    console.log(users)
}

const deleteUser = async (userRepository: Repository<User>) => {
    const userTaro = await userRepository.findOne({firstName: "taro"})
    await userRepository.remove(userTaro)

    const users = await userRepository.find()
    console.log(users)
}

(async () => {
    const connection = await createConnection()

    const userRepository = getRepository(User)
    await createUser(userRepository)
    await readUser(userRepository)
    await updateUser(userRepository)
    await deleteUser(userRepository)

    await connection.close()
})()
