import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import hotelInfoStore from "./app/stores/hotelInfo";

// Pages
import Auth from "./components/Auth/Auth";
import Home from "./pages/Home/Home";
import HotelsIntro from "./pages/Hotel-Intro/HotelsIntro";
import Hotels from "./pages/Hotels/Hotels";
import HotelOverview from "./pages/HotelOverview/HotelOverview";
import HotelReview from "./pages/HotelReview/HotelReview";
import Activities from "./pages/Activity/Activities";
import ActivityOverview from "./pages/ActivityOverview/ActivityOverview";
import ActivityReview from "./pages/ActivityReview/ActivityReview";
import CorporatePackages from "./pages/CorporatePackages/CorporatePackages";
import PackageDetails from "./pages/PackageDetails/PackageDetails";
import ReferEarn from "./pages/Refer&Earn/ReferEarn";
import ReferEarnCard from "./pages/Refer&Earn/ReferEarnCard.jsx";
import Destinations from "./pages/Destinations/Destinations";
import DestinationOverview from "./pages/DestinationOverview/DestinationOverview";
import DestinationDetails from "./pages/DestinationDetails/DestinationDetails";
import ComparePackages from "./components/DestinationOverview/ComparePackages";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

// Admin Pages
import AdminPage from "./pages/HotelAdmin/AdminPage.jsx";
import Contact from "./pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "/hotels-intro", element: <HotelsIntro /> },
      { path: "/hotels/:city", element: <Hotels /> },
      { path: "/hotels/:city/:type", element: <Hotels /> },
      { path: "/hotel-overview", element: <HotelOverview /> },
      { path: "/hotel-review", element: <HotelReview /> },
      { path: "/activities", element: <Activities /> },
      { path: "/activities/:city", element: <ActivityOverview /> },
      { path: "/activities/:city/:slug", element: <ActivityReview /> },
      { path: "/corporatepackages", element: <CorporatePackages /> },
      { path: "/corporatepackages/:slug", element: <PackageDetails /> },
      { path: "/referearn", element: <ReferEarn /> },
      { path: "/referearn/rewards", element: <ReferEarnCard /> },
      { path: "/destinations", element: <Destinations /> },
      { path: "/destinations-overview/:slug", element: <DestinationOverview /> },
      { path: "/destination-details/:packageSlug", element: <DestinationDetails /> },
      { path: "/compare-packages", element: <ComparePackages /> },
      {path:"/contact", element: <Contact />},

      // 🔒 Admin Dashboard (Sidebar with Hotels & Packages)
      {
        path: "/admin/hotels",
        element: (
          <ProtectedRoute adminOnly={true}>
            <AdminPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={hotelInfoStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
