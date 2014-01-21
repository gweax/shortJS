function getRandomString(len) {
var t="",p="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",i=0;while(i<len){t+=p.charAt(Math.floor(Math.random()*p.length));i++;}return t;
}
