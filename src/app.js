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

uppy.on('complete', (result) => {
        console.log(result);

        for (const file of result.successful) {
                // append link to the image to the page as localhost:3000/uploads/<filename>
                const url = `http://localhost:3000/uploads/${file.response.body.msg}`;
                const link = document.createElement('a');
                link.href = url;
                // link.innerHTML = url;

                // create img element with link as src
                const img = document.createElement('img');
                img.src = url;
                img.style.width = '200px';
                img.style.height = '200px';
                
                // add img to the link
                link.appendChild(img);

                const li = document.createElement('li');
                li.appendChild(link);
                // // add li element to the ul element
                document.getElementById('links').appendChild(li);
        }
});
