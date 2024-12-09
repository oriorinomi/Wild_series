import { useLoaderData } from "react-router-dom";

type ProgramsData = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

export default function Program() {
  const programsData = useLoaderData() as ProgramsData[];

  return (
    <>
      <h1>Programs</h1>
      <ul>
        {programsData.map((program) => (
          <li key={program.id}>
            <h2>{program.title}</h2>
            <p>{program.synopsis}</p>
            <img src={program.poster} alt={program.title} />
            <p>
              <strong>Country:</strong> {program.country}
            </p>
            <p>
              <strong>Year:</strong> {program.year}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
