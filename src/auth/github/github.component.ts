import { Component } from '@nestjs/common';
import { Strategy } from 'passport-github';
import * as passport from 'passport';

@Component()
export class GithubStrategy extends Strategy {
  constructor() {
    super({
        clientID: "418982f1c3f826bfeef7",
        clientSecret: "591e3e6f26bc3a6b314c3c1d405d6fe7c7550c5c",
        callbackURL: "http://localhost:8080/auth/github/callback"
    },
      async (accessToken, refreshToken, profile, done) => await this.verify(accessToken, refreshToken, profile, done)
    );

    passport.use(this);
  }

    public async verify(accessToken, refreshToken, profile, done) {
        console.log("accessToken", accessToken);
        console.log("refreshToken", refreshToken);
        console.log("profile", profile);

        done(null, profile);
    }
}
