import { createRouter } from "next-connect";
import session from "express-session";
import MongoStore from "connect-mongo";
import flash from "express-flash";
import dbConnect from "../../config/mongoose";
import passport from "passport";
import setupPassport from "../../config/passport";
import User from "../../models/User";

const router = createRouter();
const secretKey = process.env.CONNECT_SECRET;

//database connection and passport connection
router.use(async (req, res, next) => {
  await dbConnect();
  setupPassport(passport);
  next();
});

//initializing sessions and connecting sessions to db
router.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongooseUrl: process.env.DB_STRING }),
  })
);

router.use(passport.initialize());
router.use(passport.session());
router.use(flash());

router.get(async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

export default router.handler();
