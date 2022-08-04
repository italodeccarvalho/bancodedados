const mongoose = require('mongoose') //require pro mongoose, que faz conexão do mongodb com o servidor.

const MONGODB_URI = process.env.MONGODB_URI //URI é uma String que identifica o recurso localizando-o na internet.

const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("MONGODB conectado! (:")//se conectar com sucesso
    } catch (error) {
        console.error("Erro: ", error.message) //se retornar erro ao rodar npm run dev
    }
}

module.exports = {
    connect
}
