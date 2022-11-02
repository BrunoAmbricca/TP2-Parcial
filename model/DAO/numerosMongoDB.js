import CnxMongoDB from '../DB.js'
import { ObjectId } from "mongodb"


class NumerosMongoDAO {

    findNumeros = async ()  => {
        if(!CnxMongoDB.connection) return []
        try {
            let numeros = await CnxMongoDB.db.collection('numeros').find({}).toArray()
            return numeros
        }
        catch {
            return []
        }
    }

    saveNumero = async numero => {
        if(!CnxMongoDB.connection) return {}

        numero.numero = parseInt(numero.numero)
        await CnxMongoDB.db.collection('numeros').insertOne(numero)
        return {status: 'OK'}      
    }
}

export default NumerosMongoDAO
