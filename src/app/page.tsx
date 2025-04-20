import { getCurrentSession } from "@/actions/auth";

const Home = async () => {
  const { user } = await getCurrentSession();
  return <div className="text-yellow-600">{JSON.stringify(user)}</div>;
};

export default Home;
