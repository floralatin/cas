import * as Koa from 'koa';

import { connectToDatabase } from "./services/database";
import { userRouter } from './api/user';

const app = new Koa();

connectToDatabase().
then(()=> {
    // app.use(KoaBodyParser());
    app.use(userRouter.routes());
    app.proxy = true;

    app.listen(3000, "127.0.0.1", null, ()=> {
        console.log(`The server start on port ${3000}`);
    });
})