import { useLoaderData } from "react-router-dom";

export const loader = ({ params }) => {
  const { slug } = params;
  return { slug };
};
const SingleCeo = () => {
  const { slug } = useLoaderData();
  return <p>Single CEO Page {slug}</p>;
};

export default SingleCeo;
