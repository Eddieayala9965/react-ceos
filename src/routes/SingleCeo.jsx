import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const { slug } = params;
  const url = `http://localhost:8000/ceos/${slug}`;
  const response = await fetch(url);
  const data = await response.json();
  return { data };
};
const SingleCeo = () => {
  const { data } = useLoaderData();

  return (
    <p>
      {data.name} became CEO of apple in {data.year}
    </p>
  );
};

export default SingleCeo;
