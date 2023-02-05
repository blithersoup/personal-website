import type { NextApiRequest, NextApiResponse } from "next";

const getBlog = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name } = req.query

  let b = await import(`blogs/${name}`)

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(b))
};
export default getBlog;

