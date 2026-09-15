import { defineType } from "sanity";

export const postedBy = defineType({
  name: "postedBy",
  title: "Posted By",
  type: "reference",
  to: [{ type: "user" }],
});
