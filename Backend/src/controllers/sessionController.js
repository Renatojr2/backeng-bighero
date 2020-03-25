const connection = require('../database/conectation');


module.exports = {
    async create(request, response) {
        const {id} = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if(!ong) {
            return response.status(400).json({erro: "no ONG found with this id"})
        }

        return response.json(ong)
    }

}