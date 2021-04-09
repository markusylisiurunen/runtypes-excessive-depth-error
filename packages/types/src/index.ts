import * as rt from "runtypes";

export const ApiResource = rt.Record({
  id: rt.String,
  type: rt.String,
});

export type ApiResource = rt.Static<typeof ApiResource>;

export const Response = ApiResource.And(
  rt.Record({
    data: ApiResource.And(
      rt.Record({
        relationships: rt.Record({
          customer: rt.Record({
            data: ApiResource.And(
              rt.Record({
                links: rt.Record({
                  updateFirstName: rt.String,
                }),
              })
            ),
          }),
          resource: rt.Record({
            data: ApiResource.And(
              rt.Record({
                category: rt.Union(rt.Literal("one"), rt.Literal("two")),
              })
            ),
          }),
        }),
      })
    ),
    links: rt.Record({
      self: rt.String,
      tasks: rt.String,
    }),
    meta: rt.Record({
      authorization: rt.String,
    }),
  })
);

export type Response = rt.Static<typeof Response>;
