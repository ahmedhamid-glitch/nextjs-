import { NextResponse } from "next/server";

export const GET = async (req) => {
  console.log("ReqJSON", req);

  const res = await fetch("https://fakestoreapi.com/products", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const posts = await res.json();

  return NextResponse.json({ data: posts });
};
