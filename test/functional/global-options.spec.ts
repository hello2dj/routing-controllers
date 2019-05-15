import "reflect-metadata";
import {JsonController} from "../../src/decorator/JsonController";
import {Post} from "../../src/decorator/Post";
import {Body} from "../../src/decorator/Body";
import {createExpressServer, createKoaServer, getMetadataArgsStorage} from "../../src/index";
import {assertRequest} from "./test-utils";
const chakram = require("chakram");
const expect = chakram.expect;

export class User {
    firstName: string;
    lastName: string;
    getName(): string {
        return this.firstName + " " + this.lastName;
    }
}

describe("routing-controllers global options", () => {

    let initializedUser: User;

    beforeEach(() => {
        initializedUser = undefined;
    });

    before(() => {

        // reset metadata args storage
        getMetadataArgsStorage().reset();

        @JsonController()
        class TestUserController {

            @Post("/users")
            postUsers(@Body() user: User) {
                initializedUser = user;
                return "";
            }
            
            @Post(new RegExp("/(prefix|regex)/users"))
            postUsersWithRegex(@Body() user: User) {
                initializedUser = user;
                return "";
            }
            
        }
    });

    describe("when routePrefix is used all controller routes should be appended by it", () => {
    
        let apps: any[] = [];
        before(done => apps.push(createExpressServer({ routePrefix: "/api" }).listen(3001, done)));
        before(done => apps.push(createExpressServer({ routePrefix: "api" }).listen(3002, done)));
        before(done => apps.push(createKoaServer({ routePrefix: "/api" }).listen(3003, done)));
        before(done => apps.push(createKoaServer({ routePrefix: "api" }).listen(3004, done)));
        after(done => { apps.forEach(app => app.close()); done(); });
    });

});