import Uppy from '@uppy/core';
import XHRUpload from '@uppy/xhr-upload';
import Dashboard from '@uppy/dashboard';
const Webcam = require('@uppy/webcam');
j/url

const uploadUrl = `${process.env.HOST_URL}/image`;
const uppy = new Uppy()
    .use(Dashboard, {
        inline: true,
        target: '#drag-drop-area',
    })
    .use(XHRUpload, {
        endpoint: uploadUrl,
        fieldName: 'photo',
        formData: true,
})





uppy.on('complete', (result) => {
        console.log(result);

        for (const file of result.successful) {
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
