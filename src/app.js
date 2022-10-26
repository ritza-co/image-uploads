import Uppy from '@uppy/core';
import XHRUpload from '@uppy/xhr-upload';
import Dashboard from '@uppy/dashboard';
const Webcam = require('@uppy/webcam');
j/url

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

uppy.on('complete', (result) => {
        console.log(result);

        for (const file of result.successful) {
                // append link to the image to the page as localhost:3000/uploads/<filename>
                const url = `${process.env.HOST_URL}/uploads/${file.response.body.msg}`;
                const link = document.createElement('a');
                link.href = url;
                link.innerHTML = url;

                const li = document.createElement('li');
                li.appendChild(link);
                // // add li element to the ul element
                document.getElementById('links').appendChild(li);
        }
});
