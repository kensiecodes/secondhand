import { createRouter } from "next-connect";
import dbConnect from "../../config/mongoose";
import User from "../../models/User";

const router = createRouter();

router.use(async (req, res, next) => {
  await dbConnect();
  next();
});

router.get(async (req, res) => {
  try {
    const users = await User.find({}); /* find all the data in our database */
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

export default router.handler();
