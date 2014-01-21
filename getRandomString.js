function getRandomString(len) {
var t="",p="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";while(len--)t+=p[~~(Math.random()*62)];return t;
}
