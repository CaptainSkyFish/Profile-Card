import { atomFamily } from "recoil";
import { USERS } from "./users";

export const usersAtomFamily = atomFamily({
  key: "usersAtomFamily",
  default: (id) => {
    return USERS.find((user) => user.id === id);
  },
});
