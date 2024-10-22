import { comments } from "./data";
const GET = async () => {
  return new Response.json(comments);
};

export default GET;
