var server = require("./serveur");
var router = require("./routeur");
var requestHandlers = require("./requestHandlers");
var handle = {};

handle["/"] = requestHandlers.start;
handle["/menu"] = requestHandlers.menu;
handle["/img1"] = requestHandlers.martin;
handle["/img2"] = requestHandlers.labbe;
handle["/img3"] = requestHandlers.engoulevent;
handle["/style"] = requestHandlers.style;
handle["/background"] = requestHandlers.background;



server.start(router.route, handle);