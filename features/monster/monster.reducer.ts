import { createReducer, createSlice } from "@reduxjs/toolkit";
import { setRandomMonster, setSelectedMonster } from "./monster.action";

type Monster = {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  type: string;
  imageUrl: string;
};

type MonsterState = {
  monsters: Array<Monster>;
  monsterSelected: Monster | null;
  monsterRandom: Monster | null;
};

const monsterInitialState: MonsterState = {
  monsters: [
    {
      id: "monster-1",
      name: "Dead Unicorn",
      attack: 60,
      defense: 40,
      hp: 10,
      speed: 80,
      type: "Type",
      imageUrl:
        "https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/dead-unicorn.png",
    },
    {
      id: "monster-2",
      name: "Old Shark",
      attack: 50,
      defense: 20,
      hp: 80,
      speed: 90,
      type: "Type",
      imageUrl:
        "https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/old-shark.png",
    },
    {
      id: "monster-3",
      name: "Red Dragon",
      attack: 90,
      defense: 80,
      hp: 90,
      speed: 70,
      type: "Type",
      imageUrl:
        "https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/red-dragon.png",
    },
    {
      id: "monster-4",
      name: "Robot Bear",
      attack: 50,
      defense: 40,
      hp: 80,
      speed: 60,
      type: "Type",
      imageUrl:
        "https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/robot-bear.png",
    },
    {
      id: "monster-5",
      name: "Angry Snake",
      attack: 80,
      defense: 20,
      hp: 70,
      speed: 80,
      type: "Type",
      imageUrl:
        "https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/angry-snake.png",
    },
  ],
  monsterSelected: null,
  monsterRandom: null,
};

const monsterReducer = createReducer(monsterInitialState, (builder) => {
  builder.addCase(setSelectedMonster, (state, action) => {
    state.monsterSelected = action.payload;
    setRandomMonster
  })

  builder.addCase(setRandomMonster, (state) => {
    const arrayFilter = state.monsters.filter(
      (it) => it.id !== state.monsterSelected?.id
    );
    const randomIndex = parseInt(Math.random() * arrayFilter.length as any);
    const randomMonster = arrayFilter[randomIndex];
    state.monsterRandom = randomMonster;
  });
});

export { monsterReducer };
export type { Monster };
