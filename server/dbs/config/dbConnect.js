const mongoose = require('mongoose');
const dburl = require('./keys').mongoURL;

mongoose.set('useFindAndModify', false);
mongoose.connect(dburl, { useNewUrlParser: true })
    .then(() => { console.log('数据库testSystem连接成功'); })
    .catch(err => console.log("连接数据库testSystem失败：", err));

module.exports = mongoose;

