import { useLoaderData, Link } from "react-router-dom";

export const loader = async () => {
  const url = "http://localhost:8000/ceos";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  return { data };
};
const Ceos = () => {
  const { data } = useLoaderData();

  return (
    <>
      <ul>
        {data.map((ceo, index) => (
          <li key={index}>
            <Link to={ceo.slug}>
              {ceo.name} - {ceo.year}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Ceos;
