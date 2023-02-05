import { readdirSync } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

const getMember = async (req: NextApiRequest, res: NextApiResponse) => {
  const dir = readdirSync("blogs/")
  let blogs: any = []
  
  for (const name of dir) {
    let x = await import(`blogs/${name}`)
    blogs.push(x);
  }

  blogs.sort((a: any, b: any) => { a.number - b.number })

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(blogs))
};
export default getMember;

