var querystring = require("querystring");
var fs = require("fs");
var swig = require("swig");
formidable = require("formidable");

function start(response, postData) {
    console.log("Le gestionnaire 'menu' est appelé.");
    fs.readFile('./html/menu.html', 'utf-8', (error) => {
        if (error) {
            response.writeHead(500, {
                "Content-Type": "text/plain"
            });
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            response.write(swig.renderFile('./html/menu.html', {
                name: querystring.parse(postData).text
            }));
            response.end();
        }
    })
}

function menu(response, postData) {
    console.log("Le gestionnaire 'menu' est appelé.");
    fs.readFile('./html/index.html', 'utf-8', (error) => {
        if (error) {
            response.writeHead(500, {
                "Content-Type": "text/plain"
            });
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            response.write(swig.renderFile('./html/index.html', {
                name: querystring.parse(postData).text
            }));
            response.end();
        }
    })
}

function background(response) {
  console.log("Le gestionnaire 'background' est appelé.");
  fs.readFile("./img/piaf rose.jpg", "binary", function(error, file) {
      if (error) {
          response.writeHead(500, {
              "Content-Type": "text/plain"
          });
          response.write(error + "\n");
          response.end();
      } else {
          response.writeHead(200, {
              "Content-Type": "image/jpg"
          });
          response.write(file, "binary");
          response.end();
      }
  });
}


function style(response) {
    console.log("Le gestionnaire 'style' est appelé.");
    fs.readFile("./css/style.css", "binary", function(error, file) {
        if (error) {
            response.writeHead(500, {
                "Content-Type": "text/plain"
            });
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {
                "Content-Type": "text/css"
            });
            response.write(file, "binary");
            response.end();
        }
    });
}


function martin(response) {
    console.log("Le gestionnaire 'martin' est appelé.");
    fs.readFile("./img/martin.png", "binary", function(error, file) {
        if (error) {
            response.writeHead(500, {
                "Content-Type": "text/plain"
            });
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {
                "Content-Type": "image/png"
            });
            response.write(file, "binary");
            response.end();
        }
    });
}

function labbe(response) {
    console.log("Le gestionnaire 'labbe' est appelé.");
    fs.readFile("./img/labbe.png", "binary", function(error, file) {
        if (error) {
            response.writeHead(500, {
                "Content-Type": "text/plain"
            });
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {
                "Content-Type": "image/png"
            });
            response.write(file, "binary");
            response.end();
        }
    });
}


function engoulevent(response) {
    console.log("Le gestionnaire 'engoulevent' est appelé.");
    fs.readFile("./img/engoulevent.png", "binary", function(error, file) {
        if (error) {
            response.writeHead(500, {
                "Content-Type": "text/plain"
            });
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {
                "Content-Type": "image/png"
            });
            response.write(file, "binary");
            response.end();
        }
    });
}



exports.start = start;
exports.menu = menu;
exports.martin = martin;
exports.labbe = labbe;
exports.engoulevent = engoulevent;
exports.style = style;
exports.background = background;