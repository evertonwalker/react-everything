import { useAppSelector } from "@/app/hooks";
import { setRandomMonster, setSelectedMonster } from "@/features/monster/monster.action";
import { Monster } from "@/features/monster/monster.reducer";
import { useDispatch } from "react-redux";

const Monsters = () => {
  const monsters = useAppSelector((state) => state.monster.monsters);
  const selectedMonster = useAppSelector((state) => state.monster.monsterSelected);
  const randomMonster = useAppSelector((state) => state.monster.monsterRandom);

  const dispatch = useDispatch();

  const selectMonster = (m: Monster) => {
    dispatch(setSelectedMonster(m));
    dispatch(setRandomMonster())
  };

  return (
    <>
      <h2>Listagem monstros</h2>
      <ul>
        {monsters.map((m) => {
          return <li key={m.id} onClick={() => selectMonster(m)} > {m.name}</li>;
        })}
      </ul>


      <h2>Monstro selecionado: { selectedMonster?.name } </h2>
      <h2>Monstro random: { randomMonster?.name } </h2>
    </>
  );
};

export default Monsters;
