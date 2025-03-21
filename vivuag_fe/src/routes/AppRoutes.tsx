import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Tours from "../pages/tours/Tours";
import DetailedTour from "../pages/tours/DetailedTour";
import Festivals from "../pages/festivals/Festivals";
import DetailedFestival from "../pages/festivals/DetailedFestival";
import Account from "../pages/account/Account";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/tours" element={<Tours />} />
                <Route path="/festivals" element={<Festivals />} />
                <Route path="/detailed_festival/:id" element={<DetailedFestival />} />
                <Route path="/detailed_tour/:id" element={<DetailedTour />} />
                <Route path="/account" element={<Account />} />
                <Route path="/account" element={<MainLayout />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
