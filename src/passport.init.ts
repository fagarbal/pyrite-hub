import * as passport from 'passport';

export function initPassport(app) {
	app.use(passport.initialize());

	passport.serializeUser(function(user, done) {
		done(null, user);
	});
	
	passport.deserializeUser(function(user, done) {
		done(null, user);
	});

}