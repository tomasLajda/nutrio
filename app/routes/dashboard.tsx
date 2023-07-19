import { json, type LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async () => {
  const res = await fetch(
    `https://api.api-ninjas.com/v1/nutrition?query=${'potato'}`,
    { headers: { 'X-Api-Key': 'gVeTxM4/7Hhpy491qUQstA==3ZVcwMUfigR7NhnM' } }
  );
  return json(await res.json());
};

const Dashboard = () => {
  const food = useLoaderData();
  console.log(food);

  return (
    <>
      <h1>{JSON.stringify(food)}</h1>
    </>
  );
};
export default Dashboard;
