$.getScript("https://www.gstatic.com/firebasejs/5.8.3/firebase.js").done(function() {
    function _0x780dx1(_0x780dx1, _0x780dx2, _0x780dx3, _0x780dx4) {
        var _0x780dx5, _0x780dx6 = _0x780dx4.find(_0x780dx1).eq(0), _0x780dx7 = _0x780dx6.attr(_0x780dx3);
        if (null !== localStorage.getItem(_0x780dx2)) {
            var _0x780dx8 = JSON.parse(localStorage[_0x780dx2]);
            for (i = 0; i < _0x780dx8.length; i++) {
                _0x780dx8[i] === _0x780dx7 && _0x780dx6.addClass(_0x780dx2)
            }
        }
        ;firebase.database().ref(_0x780dx2 + "/" + _0x780dx7 + "/total").on("value", function(_0x780dx1) {
            _0x780dx5 = _0x780dx1.val() || 0,
            _0x780dx6.find(".total").eq(0).html(_0x780dx5)
        }),
        _0x780dx6.on("click", function(_0x780dx1) {
            if (_0x780dx1.preventDefault(),
            $(this).toggleClass(_0x780dx2),
            $(this).hasClass(_0x780dx2)) {
                if (null === localStorage.getItem(_0x780dx2)) {
                    localStorage.setItem(_0x780dx2, JSON.stringify([_0x780dx7]))
                } else {
                    var _0x780dx3 = JSON.parse(localStorage[_0x780dx2]);
                    _0x780dx3.filter(function(_0x780dx1) {
                        return _0x780dx1 == _0x780dx7
                    }).length || (_0x780dx3.push(_0x780dx7),
                    localStorage.setItem(_0x780dx2, JSON.stringify(_0x780dx3)))
                }
                ;_0x780dx5++
            } else {
                for (var _0x780dx4 = JSON.parse(localStorage[_0x780dx2]), _0x780dx9 = 0; _0x780dx9 < _0x780dx4.length; _0x780dx9++) {
                    _0x780dx4[_0x780dx9] === _0x780dx7 && _0x780dx4.splice(_0x780dx9, 1)
                }
                ;localStorage.setItem(_0x780dx2, JSON.stringify(_0x780dx4)),
                _0x780dx5--
            }
            ;firebase.database().ref(_0x780dx2 + "/" + _0x780dx7 + "/total").set(_0x780dx5)
        })
    }
    firebase.initializeApp({
        apiKey: "AIzaSyDeq0c8nXBzkRGtX-oOZebhr80pGnedejc",
        authDomain: "Chubang-blogger.firebaseapp.com",
        databaseURL: "https://chubang-blogger.firebaseio.com",
        projectId: "chubang-blogger",
        storageBucket: "chubang-blogger.appspot.com",
        messagingSenderId: "529800326321"
    }),
    $(".post-reaction").each(function() {
        _0x780dx1(".like-button", "like", "data-post-id", $(this)),
        _0x780dx1(".love-button", "love", "data-post-id", $(this)),
        _0x780dx1(".haha-button", "haha", "data-post-id", $(this)),
        _0x780dx1(".wow-button", "wow", "data-post-id", $(this)),
        _0x780dx1(".sad-button", "sad", "data-post-id", $(this)),
        _0x780dx1(".angry-button", "angry", "data-post-id", $(this))
    }),
    $(".reaction-label").each(function() {
        var _0x780dx1 = $(this)
          , _0x780dx2 = _0x780dx1.attr("data-post-id");
        firebase.database().ref("like/" + _0x780dx2 + "/total").on("value", function(_0x780dx3) {
            var _0x780dx4 = _0x780dx3.val();
            firebase.database().ref("love/" + _0x780dx2 + "/total").on("value", function(_0x780dx3) {
                var _0x780dx5 = _0x780dx3.val();
                firebase.database().ref("haha/" + _0x780dx2 + "/total").on("value", function(_0x780dx3) {
                    var _0x780dx9 = _0x780dx3.val();
                    firebase.database().ref("wow/" + _0x780dx2 + "/total").on("value", function(_0x780dx3) {
                        var _0x780dx6 = _0x780dx3.val();
                        firebase.database().ref("sad/" + _0x780dx2 + "/total").on("value", function(_0x780dx3) {
                            var _0x780dx7 = _0x780dx3.val();
                            firebase.database().ref("angry/" + _0x780dx2 + "/total").on("value", function(_0x780dx2) {
                                var _0x780dx3 = _0x780dx2.val();
                                _0x780dx1.find("#totallike").html(_0x780dx4 + _0x780dx5 + _0x780dx9 + _0x780dx6 + _0x780dx7 + _0x780dx3)
                            })
                        })
                    })
                })
            })
        })
    }),
    $(".comments-content .comment .comment-block").each(function() {
        var _0x780dx2 = $(this)
          , _0x780dx3 = $(".comments-content").attr("data-post-comment");
        _0x780dx2.append(("<div class=\"comment-reaction\"><a class=\"comment-like\" data-comment-id=\"" + _0x780dx3 + "-" + _0x780dx2.parents("li").attr("id") + "\"><svg class=\"svg svg-18\" focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g class=\"style-scope\"><path class=\"style-scope yt-icon\" d=\"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z\"></path></g></svg><span class=\"total\"></span></a><a class=\"comment-dislike\" data-comment-id=\"" + _0x780dx3 + "-" + _0x780dx2.parents("li").attr("id") + "\"><svg class=\"svg svg-18\" focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g class=\"style-scope\"><path class=\"style-scope yt-icon\" d=\"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z\"></path></g></svg><span class=\"total\"></span></a></div>")),
        _0x780dx1(".comment-like", "like-cmt", "data-comment-id", _0x780dx2),
        _0x780dx1(".comment-dislike", "dislike-cmt", "data-comment-id", _0x780dx2)
    })
})
None Eval Array _Number JSFuck JJencode AAencode URLencode Packer Javascript Obfuscator My Obfuscate Unreadable
Beautify Auto
Continue decoding Clear
Copy to clipboard Open in new tab 
$.getScript("https://www.gstatic.com/firebasejs/5.8.3/firebase.js").done(function() {
    function _0x780dx1(_0x780dx1, _0x780dx2, _0x780dx3, _0x780dx4) {
        var _0x780dx5, _0x780dx6 = _0x780dx4.find(_0x780dx1).eq(0), _0x780dx7 = _0x780dx6.attr(_0x780dx3);
        if (null !== localStorage.getItem(_0x780dx2)) {
            var _0x780dx8 = JSON.parse(localStorage[_0x780dx2]);
            for (i = 0; i < _0x780dx8.length; i++) {
                _0x780dx8[i] === _0x780dx7 && _0x780dx6.addClass(_0x780dx2)
            }
        }
        ;firebase.database().ref(_0x780dx2 + "/" + _0x780dx7 + "/total").on("value", function(_0x780dx1) {
            _0x780dx5 = _0x780dx1.val() || 0,
            _0x780dx6.find(".total").eq(0).html(_0x780dx5)
        }),
        _0x780dx6.on("click", function(_0x780dx1) {
            if (_0x780dx1.preventDefault(),
            $(this).toggleClass(_0x780dx2),
            $(this).hasClass(_0x780dx2)) {
                if (null === localStorage.getItem(_0x780dx2)) {
                    localStorage.setItem(_0x780dx2, JSON.stringify([_0x780dx7]))
                } else {
                    var _0x780dx3 = JSON.parse(localStorage[_0x780dx2]);
                    _0x780dx3.filter(function(_0x780dx1) {
                        return _0x780dx1 == _0x780dx7
                    }).length || (_0x780dx3.push(_0x780dx7),
                    localStorage.setItem(_0x780dx2, JSON.stringify(_0x780dx3)))
                }
                ;_0x780dx5++
            } else {
                for (var _0x780dx4 = JSON.parse(localStorage[_0x780dx2]), _0x780dx9 = 0; _0x780dx9 < _0x780dx4.length; _0x780dx9++) {
                    _0x780dx4[_0x780dx9] === _0x780dx7 && _0x780dx4.splice(_0x780dx9, 1)
                }
                ;localStorage.setItem(_0x780dx2, JSON.stringify(_0x780dx4)),
                _0x780dx5--
            }
            ;firebase.database().ref(_0x780dx2 + "/" + _0x780dx7 + "/total").set(_0x780dx5)
        })
    }
    firebase.initializeApp({
        apiKey: "AIzaSyDEb0x2A0lG-wmWWfrmbWAvEpY34vRWI6k",
        authDomain: "nguyen-tinh.firebaseapp.com",
        databaseURL: "https://nguyen-tinh.firebaseio.com",
        projectId: "nguyen-tinh",
        storageBucket: "nguyen-tinh.appspot.com",
        messagingSenderId: "509791360495"
    }),
    $(".post-reaction").each(function() {
        _0x780dx1(".like-button", "like", "data-post-id", $(this)),
        _0x780dx1(".love-button", "love", "data-post-id", $(this)),
        _0x780dx1(".haha-button", "haha", "data-post-id", $(this)),
        _0x780dx1(".wow-button", "wow", "data-post-id", $(this)),
        _0x780dx1(".sad-button", "sad", "data-post-id", $(this)),
        _0x780dx1(".angry-button", "angry", "data-post-id", $(this))
    }),
    $(".reaction-label").each(function() {
        var _0x780dx1 = $(this)
          , _0x780dx2 = _0x780dx1.attr("data-post-id");
        firebase.database().ref("like/" + _0x780dx2 + "/total").on("value", function(_0x780dx3) {
            var _0x780dx4 = _0x780dx3.val();
            firebase.database().ref("love/" + _0x780dx2 + "/total").on("value", function(_0x780dx3) {
                var _0x780dx5 = _0x780dx3.val();
                firebase.database().ref("haha/" + _0x780dx2 + "/total").on("value", function(_0x780dx3) {
                    var _0x780dx9 = _0x780dx3.val();
                    firebase.database().ref("wow/" + _0x780dx2 + "/total").on("value", function(_0x780dx3) {
                        var _0x780dx6 = _0x780dx3.val();
                        firebase.database().ref("sad/" + _0x780dx2 + "/total").on("value", function(_0x780dx3) {
                            var _0x780dx7 = _0x780dx3.val();
                            firebase.database().ref("angry/" + _0x780dx2 + "/total").on("value", function(_0x780dx2) {
                                var _0x780dx3 = _0x780dx2.val();
                                _0x780dx1.find("#totallike").html(_0x780dx4 + _0x780dx5 + _0x780dx9 + _0x780dx6 + _0x780dx7 + _0x780dx3)
                            })
                        })
                    })
                })
            })
        })
    }),
    $(".comments-content .comment .comment-block").each(function() {
        var _0x780dx2 = $(this)
          , _0x780dx3 = $(".comments-content").attr("data-post-comment");
        _0x780dx2.append(("<div class=\"comment-reaction\"><a class=\"comment-like\" data-comment-id=\"" + _0x780dx3 + "-" + _0x780dx2.parents("li").attr("id") + "\"><svg class=\"svg svg-18\" focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g class=\"style-scope\"><path class=\"style-scope yt-icon\" d=\"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z\"></path></g></svg><span class=\"total\"></span></a><a class=\"comment-dislike\" data-comment-id=\"" + _0x780dx3 + "-" + _0x780dx2.parents("li").attr("id") + "\"><svg class=\"svg svg-18\" focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g class=\"style-scope\"><path class=\"style-scope yt-icon\" d=\"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z\"></path></g></svg><span class=\"total\"></span></a></div>")),
        _0x780dx1(".comment-like", "like-cmt", "data-comment-id", _0x780dx2),
        _0x780dx1(".comment-dislike", "dislike-cmt", "data-comment-id", _0x780dx2)
    })
})
