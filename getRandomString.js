function getRandomString(len) {
    var t = "", r;
    while (len--) {
        r = Math.random() * 62;
        r+= r > 35 ? 61 : r > 9 ? 55 : 48;
        t += String.fromCharCode(r)
    }
    return t;
}
