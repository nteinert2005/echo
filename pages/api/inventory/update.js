import clientPromise from "../../../lib/mongodb"

var ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res){
    try {
        const client = await clientPromise;

        const db = client.db('EchoInventory');

        const body = req.body;

        console.log(body);
        
        db.collection('Inventory').updateOne(
            { _id: new ObjectId(body._id) },
            { $set: { type: body.type }},
            { $set: { location: body.location }},
            { $set: { uid: body.uid }},
        )
        .then((obj) => {
            console.log('updated...');
            res.json({
                data: true 
            })
        })
        .catch((err) => {
            res.error('can not update');
        })


    } catch (e){
        console.error(e);
    }

}