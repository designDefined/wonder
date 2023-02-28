import { rest } from "msw";

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: "준영" }));
  }),
  rest.post("/wonder", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ isSuccess: false }));
  }),
];
