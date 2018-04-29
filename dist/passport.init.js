"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
function initPassport(app) {
    app.use(passport.initialize());
    passport.serializeUser(function (user, done) {
        done(null, user);
    });
    passport.deserializeUser(function (user, done) {
        done(null, user);
    });
}
exports.initPassport = initPassport;
//# sourceMappingURL=passport.init.js.map