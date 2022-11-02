class NumerosMemDAO {

    constructor() {
        this.numeros = [
            { id: '1', numero: 20 },
            { id: '2', numero: 30 },
            { id: '3', numero: 10 },
        ]
    }

    findNumeros = async ()  => {
        try {
            return this.numeros
        }
        catch {
            return []
        }
    }

    saveNumero = async numero => {
        numero.numero = parseInt(numero.numero)
        
        const id = parseInt(this.numeros[this.numeros.length-1].id) + 1
        numero.id = String(id)

        this.numeros.push(numero)

        return {status: 'OK'}    
    }
}

export default NumerosMemDAO
