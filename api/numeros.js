import config from '../config.js'
import NumerosFactoryDAO from '../model/DAO/numerosFactory.js'


class ApiNumeros {
    constructor() {
        this.numerosModel = NumerosFactoryDAO.get(config.MODO_PERSISTENCIA)
    }

    obtenerNumeros = async id => {
        let numeros = await this.numerosModel.findNumeros()

        return this.convertJsonToArrayNumeros(numeros)
    }

    guardarNumero = async numero => {
        return await this.numerosModel.saveNumero(numero)
    }

    obtenerPromedioNumeros = async _ => {
        let numeros = await this.numerosModel.findNumeros()

        var totalNumeros = 0

        numeros.forEach(numero => {
            totalNumeros += numero.numero
        })

        return {
            promedio: totalNumeros / Object.keys(numeros).length
        }

    }

    obtenerCantidadNumeros = async _ => {
        let numeros = await this.numerosModel.findNumeros()

        return {
            cantidadNumeros: Object.keys(numeros).length
        }

    }

    obtenerMinMaxNumeros = async _ => {
        let numeros = await this.numerosModel.findNumeros()
        let arrayNumeros = this.convertJsonToArrayNumeros(numeros)

        return {
            min: Math.min(...arrayNumeros),
            max: Math.max(...arrayNumeros)
        }

    }

    convertJsonToArrayNumeros = (json) => {
        var arrayNumeros = []

        json.forEach(numero => {
            arrayNumeros.push(numero.numero)
        })

        return arrayNumeros
    }
}

export default ApiNumeros