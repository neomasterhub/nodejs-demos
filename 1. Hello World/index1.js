// Загрузка модуля http.
var http = require("http");

// Создание http-сервера.
http.createServer(function (req, res) {
    // req – http.ServerRequest (запрос).
    // res – http.ServerResponse (ответ).

    // Заголовок контента.
    res.writeHead(200, { "content-type": "text/plain" });
    // 200 – статус. 

    // Запись сообщения в response.
    res.write("Hello\n");
    res.end("World!");

})
    .listen(3000); // Порт.
