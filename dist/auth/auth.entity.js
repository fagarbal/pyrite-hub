"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let User = class User {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.OneToMany(type => UserSocial, social => social),
    __metadata("design:type", Array)
], User.prototype, "socialAccounts", void 0);
__decorate([
    typeorm_1.OneToMany(type => Component, component => component.user),
    __metadata("design:type", Array)
], User.prototype, "components", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], User.prototype, "createdOn", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], User.prototype, "updatedOn", void 0);
User = __decorate([
    typeorm_1.Entity()
], User);
exports.User = User;
let UserSocial = class UserSocial {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserSocial.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        enum: [
            'github',
            'gitlab',
            'bitbucket'
        ]
    }),
    __metadata("design:type", String)
], UserSocial.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSocial.prototype, "socialId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSocial.prototype, "socialToken", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], UserSocial.prototype, "createdOn", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], UserSocial.prototype, "updatedOn", void 0);
UserSocial = __decorate([
    typeorm_1.Entity()
], UserSocial);
exports.UserSocial = UserSocial;
let Component = class Component {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Component.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Component.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Component.prototype, "version", void 0);
__decorate([
    typeorm_1.ManyToOne(type => User, user => user.components),
    __metadata("design:type", User)
], Component.prototype, "user", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Component.prototype, "createdOn", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Component.prototype, "updatedOn", void 0);
Component = __decorate([
    typeorm_1.Entity()
], Component);
exports.Component = Component;
//# sourceMappingURL=auth.entity.js.map