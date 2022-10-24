const Uppy =require('@uppy/core');
const XHRUpload = require('@uppy/xhr-upload');
const Dashboard = require('@uppy/dashboard');

const uppy = new Uppy()
    .use(Dashboard, {
        inline: true,
        target: '#drag-drop_area',
    });
