import * as passport from 'passport';

export function initPassport(app) {
	app.use(passport.initialize());
	app.use(passport.session());

	passport.serializeUser(function(user, done) {
		console.log("serializeUser")

		done(null, user);
	});

	passport.deserializeUser(function(user, done) {
		console.log("deserializeUser")

		done(null, user);
	});

}
