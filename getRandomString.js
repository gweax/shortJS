function getRandomString(len) {
var t="",p="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",i=len;while(i--)t+=p.charAt(Math.floor(Math.random()*p.length));return t;
}
