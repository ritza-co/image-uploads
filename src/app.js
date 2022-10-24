import Uppy from '@uppy/core';
import XHRUpload from '@uppy/xhr-upload';
import Dashboard from '@uppy/dashboard';
const Webcam = require('@uppy/webcam');

const uppy = new Uppy()
.use(Dashboard, {
        inline: true,
        target: '#drag-drop-area',
    })
.use(XHRUpload, {
        endpoint: 'http://localhost:3000/image',
        fieldName: 'photo',
        formData: true,
})
