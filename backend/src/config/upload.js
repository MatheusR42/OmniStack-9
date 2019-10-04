const multer = require('multer');
const path = require('path');

module.export = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            console.log(`>>>>`)
            cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
        }
    })
}