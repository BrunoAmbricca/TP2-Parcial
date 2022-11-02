import ApiNumeros from '../api/numeros.js'


class ControladorNumeros {

    constructor() {
        this.apiNumeros = new ApiNumeros()
    }

    getNumeros = async (req,res) => {
        res.json( await this.apiNumeros.obtenerNumeros() )
    }

    postNumero = async (req,res) => {
        const numero = req.body
        res.json(await this.apiNumeros.guardarNumero(numero))
    }

    getPromedioNumeros = async (req,res) => {
        res.json( await this.apiNumeros.obtenerPromedioNumeros() )
    }

    getCantidadNumeros = async (req,res) => {
        res.json( await this.apiNumeros.obtenerCantidadNumeros() )
    }

    getMinMaxNumeros = async (req,res) => {
        res.json( await this.apiNumeros.obtenerMinMaxNumeros() )
    }
}

export default ControladorNumeros