import { Response } from "@my/types";

const body: Response = {
  id: "uuid",
  type: "root",
  data: {
    id: "uuid",
    type: "events",
    relationships: {
      customer: {
        data: {
          id: "uuid",
          type: "customers",
          links: {
            updateFirstName: "unknown",
          },
        },
      },
      resource: {
        data: {
          id: "uuid",
          type: "resource",
          category: "one",
        },
      },
    },
  },
  links: {
    self: "/me",
    tasks: "/tasks",
  },
  meta: {
    authorization: "jwt",
  },
};

function main(_r: Response): void {
  return;
}

main(body);
