function getRandomString(len) {
    var text = "",
        possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        i = 0;

    while (i < len) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        i++;
    }

    return text;
}
