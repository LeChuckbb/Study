import { atom, selector, useRecoilValue } from "recoil";
import axios from "axios";

export const todoIdState = atom({
  key: "todoIdState",
  default: 1,
});

export const todoItemQuery = selector({
  key: "todoItemQuery",
  get: async ({ get }) => {
    const id = get(todoIdState);

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    return response.data;
  },
});
