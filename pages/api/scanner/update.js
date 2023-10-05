import moment from 'moment';
import { useRouter } from 'next/router';
import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  const { pid, user } = req.query;

  console.log(pid, user);

  const client = await clientPromise;

  const db = client.db('EchoInventory');

  db.collection('Inventory')
    .updateOne(
      {
        barCode: pid,
      },
      {
        $set: {
          updatedLast: moment.now(),
          updatedBy: user,
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
}
