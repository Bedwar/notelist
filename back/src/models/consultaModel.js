const connection = require('./connection')

const getPosto = async () => {
    const [consulta] = await connection.execute('SELECT * FROM consulta')
    //array destructuring
    return consulta
}

const createPosto = async(posto) => {
    const { nome } = posto
    const dataUTC = new Date(Date.now()).toUTCString()

    const query = 'INSERT INTO consulta(ibm, nome, status, criadoem) VALUES (?, ?, ?, ?)'
    const [createdPosto] = await connection.execute(query, ['0111', nome, 'ATIVO', dataUTC])
    // nao insere o mesmo IBM duas vezes validar iteração

    return {insertId: createdPosto.insertId}
}

const deletePosto = async (ibm)=>{

    const removedPosto = await connection.execute('DELETE FROM consulta WHERE ibm = ?',[ibm])
    return removedPosto

}

const updatePosto = async (ibm, posto)=>{

    const {nome, status} = posto
    const [updatedPosto] = await connection.execute('UPDATE consulta SET nome = ?, status = ? WHERE ibm = ?',[nome, status, ibm])
    return updatedPosto

}

module.exports = {
    getPosto,
    createPosto,
    deletePosto,
    updatePosto
}