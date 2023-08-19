import { createAction } from "@reduxjs/toolkit";
import { Monster } from "./monster.reducer";

export const setSelectedMonster = createAction<Monster | null>(
  "monsters/setSelectedMonster"
);

export const setRandomMonster = createAction("monsters/setRandomMonster");
