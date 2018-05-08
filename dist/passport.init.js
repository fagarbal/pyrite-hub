"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
function initPassport(app) {
    app.use(passport.initialize());
    app.use(passport.session());
    passport.serializeUser(function (user, done) {
        console.log("serializeUser");
        done(null, user);
    });
    passport.deserializeUser(function (user, done) {
        console.log("deserializeUser");
        done(null, user);
    });
}
exports.initPassport = initPassport;
//# sourceMappingURL=passport.init.js.map