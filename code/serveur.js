var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Requête reçue pour le chemin " + pathname + ".");
        request.setEncoding("utf8");
        request.addListener("data", function(postDataName) {
            postData += postDataName;
            console.log("Paquet POST reçu ' " + postDataName + " '.");
        });
        request.addListener("end", function() {
            route(handle, pathname, response, postData);
        });
    }
    http.createServer(onRequest).listen(10000);
    console.log("Démarrage du serveur.");
}

exports.start = start;