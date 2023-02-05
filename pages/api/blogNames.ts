import type { NextApiResponse } from "next";
import { readdirSync } from "fs";

const blogNames = async (res: NextApiResponse) => {
  const dir = readdirSync("blogs/")
  res.statusCode = 200
  res.end(JSON.stringify(dir))
};
export default blogNames;
