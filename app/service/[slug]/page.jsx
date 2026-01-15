import React from "react";

const page = async ({ params }) => {
  const { slug } = await params;
  return <div>page 1 {slug}</div>;
};

export default page;