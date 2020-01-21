dbPassword = 'mongodb+srv://USERNAME_HERE:'+ encodeURIComponent('PASSWORD_HERE') + '@CLUSTER_NAME_HERE.mongodb.net/test?retryWrites=true';

module.exports = {
    MongoURI: dbPassword
};
