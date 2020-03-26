const connetion = require('../database/connection');

module.exports = {
    async create(request, response){
        const { id } = request.body;

        const ong = await connetion('ongs')
        .where('id', id)
        .select('nome')
        .first();

        if(!ong){
            return response.status(400).json({error:'No ONG found with this id'});
        }

        return response.json(ong);
    }
}