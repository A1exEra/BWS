import { randomBytes } from 'crypto';

const generateRandomId = (length: number = 8): string => {
  const buffer = randomBytes(length);
  return buffer.toString('hex');
};

export default generateRandomId;
