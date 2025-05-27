import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  // If not authenticated and not on login/register
  if (
    !isAuthenticated &&
    !(location.pathname.includes("/login") || location.pathname.includes("/register"))
  ) {
    return <Navigate to="/auth/login" />;
  }

  // If authenticated and trying to access login/register
  if (
    isAuthenticated &&
    (location.pathname.includes("/login") || location.pathname.includes("/register"))
  ) {
    return user?.role === "admin" ? (
      <Navigate to="/admin/dashboard" />
    ) : (
      <Navigate to="/shop/home" />
    );
  }

  // Authenticated user trying to access restricted admin route
  if (isAuthenticated && user?.role !== "admin" && location.pathname.includes("/admin")) {
    return <Navigate to="/unauth-page" />;
  }

  // Admin trying to access shop view
  if (isAuthenticated && user?.role === "admin" && location.pathname.includes("/shop")) {
    return <Navigate to="/admin/dashboard" />;
  }

  // All good
  return <>{children}</>;
}

export default CheckAuth;
