import { Component } from '@nestjs/common';

import { Strategy } from 'passport-gitlab2';
import * as passport from 'passport';

@Component()
export class GitlabStrategy extends Strategy {
  constructor() {
    super({
        clientID: "0539ea83941acaeaa91855482f03c7c105ded2539b6063ae9bf1ec3c4d87744f",
        clientSecret: "71c758b29177ad83339ec5b420b837f29d8342ba434847ce1de731030b0cb5cf",
        callbackURL: "http://localhost:8080/auth/gitlab/callback"
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
