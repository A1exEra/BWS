import { NextApiRequest, NextApiResponse } from 'next';
import { setDoc, addDoc, collection } from '@firebase/firestore';
import { firestore, database } from '@/helpers/firebase';
import { ref, push, set } from 'firebase/database';
import { doc } from 'firebase/firestore';
import { MESSAGE } from '@/helpers/types';
import generateRandomId from '@/helpers/cryptoId';

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
    const newMessage: MESSAGE = {
      email,
      name,
      message,
    };
    try {
      const _id = generateRandomId();
      const feedbackRef = ref(database, 'feedback');
      const newFeedbackRef = push(feedbackRef);
      await set(newFeedbackRef, { ...newMessage, _id });
      console.log('Feedback added successfully!');
      res.status(201).json({ message: 'Feedback added successfully' });
    } catch (error) {
      console.error('Error adding feedback:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === 'POST') {
//     const { email, name, message } = req.body;
//     if (
//       !email ||
//       !email.includes('@') ||
//       !name ||
//       name.trim() === '' ||
//       !message ||
//       message.trim() === ''
//     ) {
//       res.status(422).json({ message: 'Please fill all the fields' });
//       return;
//     }
//     const newMessage: MESSAGE = {
//       email,
//       name,
//       message,
//     };
//     try {
//       const docRef = await addDoc(
//         collection(firestore, 'feedback'),
//         newMessage
//       );
//       console.log('Document written with ID:', docRef.id);
//       res.status(201).json({ message: 'Feedback added successfully' });
//     } catch (error) {
//       console.error('Error adding document:', error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// };
// export default handler;
