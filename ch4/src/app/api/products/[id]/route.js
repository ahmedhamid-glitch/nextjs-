const { NextResponse } = require("next/server");

export const GET = async (req, context) => {
  console.log(req);
  console.log("Context", context);
  console.log("Context.params", context.params);
  console.log("Context.params.id", context.params.id);

  return NextResponse.json({ msg: "success" }, { status: 201 });
};

// export const GET = async (req, { params }) => {
//   console.log(req);
//   console.log("params.id", params.id);

//   return NextResponse.json({ msg: "success" }, { status: 201 });
// };
