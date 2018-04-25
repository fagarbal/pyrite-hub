import { Component } from '@nestjs/common';
import * as passport from 'passport';
import { Strategy } from 'passport-bitbucket-oauth2';

@Component()
export class BitbucketStrategy extends Strategy {
  constructor() {
    super({
        clientID: "zaVwAMnfEAaDTkSA9d",
        clientSecret: "9D3QQXMhgt2jqEKNym2KEvEj9aNBSyBC",
        callbackURL: "http://localhost:8080/auth/bitbucket/callback"
    },
      async (accessToken, refreshToken, profile, done) => await this.verify(accessToken, refreshToken, profile, done)
    );

    passport.use(this as any);
  }

    public async verify(accessToken, refreshToken, profile, done) {
        console.log("accessToken", accessToken);
        console.log("refreshToken", refreshToken);
        console.log("profile", profile);

        done(null, profile);
    }
}