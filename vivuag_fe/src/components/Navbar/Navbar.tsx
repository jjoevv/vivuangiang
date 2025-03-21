import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { logout } from "../../store/slices/authSlice";

const Navbar = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <nav className="bg-navy text-sun p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">TravelSite</h1>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-gold">Home</Link></li>
        <li><Link to="/tours" className="hover:text-gold">Tours</Link></li>
        <li><Link to="/festivals" className="hover:text-gold">Festivals</Link></li>
        {isAuthenticated ? (
          <>
            <li><Link to="/account" className="hover:text-gold">Account</Link></li>
            <li>
              <button
                onClick={() => dispatch(logout())}
                className="bg-gold text-navy px-3 py-1 rounded hover:bg-sun"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/account" className="bg-sun text-navy px-3 py-1 rounded hover:bg-gold">
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
