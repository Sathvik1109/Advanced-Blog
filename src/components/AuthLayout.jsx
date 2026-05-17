import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Protected = ({ children, authentication = true }) => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
  }, [authStatus, navigate, authentication]);

  return <>{children}</>;
};

export default Protected;
