import * as passport from 'passport';
import { Strategy } from 'passport-github';

export function initPassport(app) {
	app.use(passport.initialize());
	app.use(passport.session());

	passport.serializeUser(function(user, done) {
		done(null, user);
	});
	
	passport.deserializeUser(function(user, done) {
		done(null, user);
	});

	passport.use(new Strategy({
		clientID: "CLIENT_ID",
		clientSecret: "CLIENT_TOKEN",
		callbackURL: "http://localhost:8080/github/callback"
	  }, (accessToken, refreshToken, profile, cb) => {
			console.log("accessToken", accessToken);
			console.log("profile", profile);
			return cb(null, profile);
	  }
	));
}