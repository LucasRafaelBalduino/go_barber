import multer from 'multer';
import crypto from 'crypto';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp'),
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const filename = `${fileHash}-${file.originalname}`;

      return callback(null, filename);
    },
  }),
};
