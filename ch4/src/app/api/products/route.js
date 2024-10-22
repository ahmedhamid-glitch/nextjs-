import { cookies } from "next/headers";

const { NextResponse } = require("next/server");

export const GET = async (req) => {
  console.log(req);

  //   Header
  //   const requestHeaders = new Headers(req.headers);
  //   console.log(requestHeaders);

  // URL Query Params

  // const {searchParams} = new URL (req.url)
  //   const searchParams = req.nextUrl.searchParams;
  //   console.log(searchParams);
  //   console.log(searchParams.get("search"));

  //   cookies
  //   const cook1 = req.cookies;
  //   console.log("Cookies1", cook1);
  //   const cook2 = cookies();
  //   console.log("Cookies2", cook2);

  return NextResponse.json({ msg: "Hello NextJS API" });
};

export const POST = async (req) => {
  //   console.log(req);

  //   const res = await req.json();
  //   console.log("ResJSON", res);

  //   const formData = await req.formData();
  //   console.log("Form Data", formData);
  //   console.log("Form Data", formData.get("body"));
  //   console.log("Form Data", formData.get("title"));

  return NextResponse.json({ msg: "Post Success" }, { status: 201 });
};
