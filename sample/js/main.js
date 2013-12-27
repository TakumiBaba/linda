(function() {
  var print, socket;

  print = function(msg) {
    return $('#log').prepend($('<p>').text(msg));
  };

  socket = io.connect("" + location.protocol + "//" + location.hostname);

  linda.connect(socket);

  socket.on('connect', function() {
    print("connect!!!");
    return linda.tuplespace("test").write(["hello", "world"]);
  });

}).call(this);
