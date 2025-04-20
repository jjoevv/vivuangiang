import Banner from "../../components/Banner/Banner";
const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      
      
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Welcome to Our Home Page</h2>
        <p className="text-lg">This is the home page content. Add your content here.</p>
      </div>
    </div>
  );
};

export default Home;