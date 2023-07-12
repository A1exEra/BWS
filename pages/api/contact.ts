import { NextApiRequest, NextApiResponse } from 'next';
import { connectDatabase, insertDocument } from '@/helpers/db_utils';
import { MESSAGE } from '@/helpers/types';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Please fill all the fields' });
      return;
    }
    //if validation os OK
    const newMessage: MESSAGE = {
      email,
      name,
      message,
    };
    let client;
    try {
      client = await connectDatabase();
    } catch (err: any) {
      res.status(500).json({
        message: 'Connection to database failed...',
        error: err.message,
      });
      return;
    }
    try {
      const result = await insertDocument(client, 'message', newMessage);
      client.close();
      newMessage._id = result.insertedId;
    } catch (err: any) {
      res.status(500).json({
        message: 'Inserting data failed...',
        error: err.message,
      });
      return;
    }
    res.status(201).json({
      message: 'Message was succsfully stored!',
      newMessage: newMessage,
    });
  }
};
export default handler;
