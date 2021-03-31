import { Response } from "@my/types";

const body: Response = {
  data: {
    type: "events",
    id: "uuid",
    relationships: {
      customer: {
        data: {
          type: "customers",
          id: "uuid",
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
};

function main(_r: Response): void {
  return;
}

main(body);
