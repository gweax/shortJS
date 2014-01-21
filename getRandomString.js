function getRandomString(len) {
var t="",p="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",i=len;while(i--)t+=p[~~(Math.random()*62)];return t;
}
