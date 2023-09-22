import clientPromise from "../../../lib/mongodb"

export default async function handler(req, res){
    try {
        const client = await clientPromise;

        const db = client.db('EchoInventory');

        const items = await db.collection('Inventory').find({}).toArray();

        res.json(items);
    } catch (e){
        console.error(e);
    }

}