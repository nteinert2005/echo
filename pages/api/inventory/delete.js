import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;

    const db = client.db("EchoInventory");

    const items = await db
      .collection("Inventory")
      .deleteOne({ _id: new ObjectId(req.body._id) });

    res.json({
      data: "testing",
    });
  } catch (e) {
    console.error(e);
  }
}
