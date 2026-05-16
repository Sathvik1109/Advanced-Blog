import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button
        className="inline-block px-6 py-2 duration-200 hover:bg-blue-100"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
