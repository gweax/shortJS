function getRandomString(len) {
var M=Math,t="",p="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",i=len;while(i--)t+=p.charAt(M.floor(M.random()*62));return t;
}
