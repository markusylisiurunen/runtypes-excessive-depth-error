import * as rt from "runtypes";

export const Response = rt.Record({
  data: rt.Record({
    id: rt.String,
    type: rt.String,
    relationships: rt.Record({
      customer: rt.Record({
        data: rt.Record({
          id: rt.String,
          type: rt.String,
        }),
      }),
      resource: rt.Record({
        data: rt.Record({
          id: rt.String,
          type: rt.String,
          category: rt.Union(rt.Literal("one"), rt.Literal("two")),
        }),
      }),
    }),
  }),
});

export type Response = rt.Static<typeof Response>;
