import moment from 'moment';
import clientPromise from '../../../lib/mongodb';

var ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  try {
    const client = await clientPromise;

    const db = client.db('EchoInventory');

    const body = req.body.data;

    db.collection('Inventory')
      .updateOne(
        {
          _id: new ObjectId(body._id),
        },
        {
          $set: {
            type: body.type,
            location: body.location,
            uid: body.uid,
            ipAddress: body.ipAddress,
            ipAddressCheck: moment.now(),
            barCode: body.barCode,
          },
        }
      )
      .then((obj) => {
        console.log(obj);
        console.log('updated...');
        res.json({
          data: true,
        });
      })
      .catch((err) => {
        res.error('can not update');
      });
  } catch (e) {
    console.error(e);
  }
}
