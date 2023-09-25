import clientPromise from "../../../lib/mongodb"

export default async function handler(req, res){
    try {
        const client = await clientPromise;

        const db = client.db('EchoInventory');

        const body = req.body;
        console.log(body);

        const items = await db.collection('Inventory').insertOne({
            uid: "",
            type: body.type,
            location: "FountainAve",
            exactLocation: {
                x: body.x,
                y: body.y
            }
        })

        res.json(items);
    } catch (e){
        console.error(e);
    }

}