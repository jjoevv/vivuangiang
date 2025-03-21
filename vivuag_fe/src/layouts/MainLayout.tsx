import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ocean text-white">
      <Navbar />
      <main className="flex-1 p-6">
        <Outlet /> {/* Đây là nơi các trang sẽ được hiển thị */}
      </main>
      <footer className="bg-navy text-center p-4">© 2025 TravelSite</footer>
    </div>
  );
};

export default MainLayout;
