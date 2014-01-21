function getRandomString(len) {
var t="",r;while(len--)t+=String.fromCharCode((r=Math.random()*62)+(r>=36?61:r>=10?55:48));return t;
}
console.log(getRandomString(50));
