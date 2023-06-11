import { createRouter } from "next-connect";

const router = createRouter();

router.get(async (req, res) => {
  res.json({ user: req.user?.toObject() || null });
});

export default router.handler();
