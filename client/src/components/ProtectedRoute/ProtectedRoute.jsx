// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children, user }) {
//   // user: object from your auth state or Redux store
//   if (!user) {
//     // Not logged in → redirect to login
//     return <Navigate to="/auth" replace />;
//   }

//   if (user.type !== "ADMIN") {
//     // Logged in but not admin → redirect to home
//     return <Navigate to="/" replace />;
//   }

//   return children; // Admin user → show page
// }




import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ children, adminOnly = false }) {
  // read user from Redux store (keeps routing consistent after login)
  const user = useSelector((state) => state.user?.user);

  if (!user) {
    // Not logged in → redirect to login
    return <Navigate to="/auth" replace />;
  }

  if (adminOnly && user.type !== "ADMIN") {
    // Logged in but not admin → redirect to home
    return <Navigate to="/" replace />;
  }

  return children; // Authorized → show page
}
