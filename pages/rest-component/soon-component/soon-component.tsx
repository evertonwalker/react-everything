export default function SoonComponent({
  name,
  surName,
  ...rest
}: {
  name: string;
  surName: string;
}) {

  // rest são propriedades que podem ser passadas por uma tagHtml
  return (
    <>
      <label>Name: {name}</label><br></br>
      <label>SurName: {surName}</label>
      <label>rest: {JSON.stringify(rest)}</label>
    </>
  );
}
