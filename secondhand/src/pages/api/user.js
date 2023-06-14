import { createRouter } from "next-connect";
import dbConnect from "../../config/mongoose";

const router = createRouter();

router.use(async (req, res, next) => {
  await dbConnect();
  // console.log("This is middleware");
  // req.thingIsChanged = true;
  next();
});

router.get(async (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(users);
    }
  });
});

export default router.handler();
