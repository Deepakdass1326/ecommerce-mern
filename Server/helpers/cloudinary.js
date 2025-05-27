
const cloudinary = require('cloudinary').v2
const multer = require('multer')


cloudinary.config({
    cloud_name: 'dspsztiai',
    api_key : '726914494719252',
    api_secret: 'vVaAj_dTh0ke6NbPAX15FnvQowk'
})


const storage = new multer.memoryStorage()

async function ImageUploadUtil(file){
    const result = await cloudinary.uploader.upload(file, {
        resource_type: 'auto'
    })
    return result
}

const upload = multer({storage})

module.exports = {
    upload,
    ImageUploadUtil
}