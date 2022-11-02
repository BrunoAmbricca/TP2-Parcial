import express from 'express'
import ControladorNumeros from '../controller/numeros.js'


export class RouterNumeros {
    constructor() {
        this.router = express.Router()
        this.controladorNotas = new ControladorNumeros()
    }

    start() {
        this.router.post('/', this.controladorNotas.postNumero)
        this.router.get('/promedio', this.controladorNotas.getPromedioNumeros)
        this.router.get('/minmax', this.controladorNotas.getMinMaxNumeros)
        this.router.get('/cantidad', this.controladorNotas.getCantidadNumeros)
        this.router.get('/', this.controladorNotas.getNumeros)
        
        return this.router
    }
}
