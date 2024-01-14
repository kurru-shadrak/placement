import { Navigate, Route, Routes, useRoutes } from "react-router-dom";
import Layouts from "./Layouts";
import ViewCourses from "./ViewCourses";
import Home from "./Home";
import Dashboard from "./Navbar/Dashboard";
import MyCourses from "./Navbar/MyCourses";
import MyProfile from "./Navbar/MyProfile";
import OrderHistory from "./Navbar/OrderHistory";
import  Settings  from "./Navbar/Settings"
import MyCertificates from "./Navbar/MyCertificates";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import Statistics from "./Navbar/Statistics";
import Python from "./AllCoureses/Python";
import ForgotPage from "./pages/ForgotPage";
import Rewards from "./Navbar/Rewards";
import RecordingClasses from "./Navbar/RecordingClasses";
import LiveClasses from "./Navbar/LiveClasses";
import Reports from "./Navbar/Reports";
import WishList from "./Navbar/WishList";
import DegitalLibrary from "./Navbar/DegitalLibrary";

export default function Router() {

// return (
//   <div>
//     <Layouts/>
//     <Routes>
//       <Route path ='/' element={<Home/>}/>
//       <Route path ='/dashboard' element={<Dashboard/>}/>
//       <Route path ='/mycourse' element={<MyCourses/>}/>
//       <Route path ='/course-details' element={<ViewCourses/>}/>
     
//     </Routes>
//   </div>
// )
// }



   const routes = useRoutes([
     {

       path: "/home",
       element: <Layouts />,
       children: [
          { element: <Navigate to="app" />, index: true },
         { path: "app", element: <Home /> },
         { path: "app/course-details/:courseid", element: <ViewCourses /> },
         {path:"dashboard",element:<Dashboard/>},
         {path:"mycourses",element:<MyCourses/>},
         {path:"app/mycourses",element:<MyCourses/>},
         {path:"mycourses/python",element:<Python/>},
         { path: "mycourses/course-details/:courseid", element: <ViewCourses /> },
         {path:"statistics/",element:<Statistics/>},
         {path:"myprofile",element:<MyProfile/>},
         {path:"orderhistory",element:<OrderHistory/>},
         {path:"setting",element:<Settings/>},
         {path:"mycertificates",element:<MyCertificates/>},
         {path:"rewards",element:<Rewards/>},
         {path:"recording",element:<RecordingClasses/>},
         {path:"live",element:<LiveClasses/>},
         {path:"reports",element:<Reports/>},
         {path:"wishlist",element:<WishList/>},
         {path:"degital",element:<DegitalLibrary/>},
        

       ],
    },
    {
      path: "/",
       element: <Signin />,
     },
     {
       path: "/signup",
       element: <SignUp />,
     },
     {
      path: "/forgot",
      element: <ForgotPage />,
    },
    // {
    //   element: <SimpleLayout />,
    //   children: [
    //     { element: <Navigate to="/login" />, index: true },
    //     { path: "404", element: <Page404 /> },
    //     { path: "*", element: <Navigate to="/404" /> },
    //   ],
    // },
    // {
    //   path: "*",
    //   element: <Navigate to="/404" replace />,
    // },
  ]);

   return routes;
 }
