const config = {
  mysql: {
    host     : 'host',
    user     : 'username',
    password : 'password',
    port     : 3306,
    database : 'dbname',
    connectionLimit : 10
  },
  jwt: {
    secret : "secret",
    expire : "30m" // 30분
  },
  file: {
    rootPath : '/',
    uploadPath : 'path'
  },
  s3: {
    accessKeyId: 'accesskeyid',
    secretAccessKey: 'secretkey',
    region: 'ap-northeast-2',
    bucketName: 'bucketname'
  }
};

module.exports = config;