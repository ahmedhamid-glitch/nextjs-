"use client";

import { useRouter } from "next/navigation";

const LearnUseRouter = () => {
  const router = useRouter();
  console.log("Router", router);

  return (
    <>
      <h1>use Router</h1>
      <button type="button" onClick={() => router.push("/admin/dashboard")}>
        Goto Admin Dashboard
      </button>
    </>
  );
};

export default LearnUseRouter;
