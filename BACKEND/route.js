const express = require('express');
const router = express.Router(); // Initialize router
const controll = require("./controller");

module.exports = function(upload) {
    router.post("/signup", controll.createUser);
    router.route("/login")
        .get(controll.allUsers)
        .post(controll.loginUser);
    router.get("/login/:name", controll.checkUser);
    router.route("/events")
        .post(upload.single("image"), controll.createEvent)
        .get(controll.Events);
    router.route("/events/:name/:date")
        .get(controll.readEvent);
    router.get("/events/:name", controll.deleteEvent);
    router.get("/tickets/:name", controll.cart);
    router.post("/tickets", controll.bookTicket);
    router.post("/book", controll.update);
    router.get("/deleteticket", controll.deleteTicket);

    return router;
};
