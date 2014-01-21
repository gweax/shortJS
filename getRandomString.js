function getRandomString(len) {
var t="",r;while(len--)t+=String.fromCharCode((r=~~(Math.random()*62))+(r>35?61:r>9?55:48));return t;
}
