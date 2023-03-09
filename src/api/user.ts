import * as Router from "koa-router";
import { collections } from "../services/database";
import User from "../models/user";
import { ObjectId } from 'mongodb';

export const userRouter = new Router({
    prefix: '/user'
});

userRouter.get("/", async (ctx) => {

    const param = ctx.request.req;
    console.log('param', ctx);
    try {
       const users = await collections.user.find({}).toArray();
       ctx.body = users;
    } catch (error) {
        console.log('error');
    }
});

userRouter.get("/:id", async (ctx) => {
    const params: any = ctx.params;
    console.log('param/:id', params);
    try {
    //    const user = await collections.user.findOne({ _id: new ObjectId(params.id) });
       console.log('user', []);
       ctx.body = { 12: 4};
    } catch (error) {
        console.log('error');
    }
});