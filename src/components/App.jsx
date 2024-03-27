// import "bootstrap/dist/css/bootstrap.min.css";
// import { Route, Routes, Navigate } from "react-router-dom";

// import Menu1 from "./pages/menu1Page";
// import Menu2 from "./pages/menu2Page";
// import Menu3 from "./pages/menu3Page";
// import NavBar from "./navBar";
// import { Suspense } from "react";

// export const App = () => {
//   return (
//     <>
//       <Suspense fallback={<p>Загружаем...</p>}>
//         <Routes>
//           <Route path="/" element={<NavBar />}>
//             <Route index exact element={<Menu1 />} />
//             <Route path="menu2" element={<Menu2 />} />
//             <Route path="about" element={<Menu3 />} />
//             <Route path="*" element={<Navigate to="/" />} />
//           </Route>
//         </Routes>
//       </Suspense>
//     </>
//   );
// };

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu1 from "./pages/menu1Page";
import Menu2 from "./pages/menu2Page";
import Menu3 from "./pages/menu3Page";
import NavBar from "./navBar";

export const App = () => {
  return (
    <BrowserRouter basename="/testTask">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<p>home</p>} />
        <Route path="/menu1" element={<Menu1 />} />
        <Route path="/menu2" element={<Menu2 />} />
        <Route path="/menu3" element={<Menu3 />} />
      </Routes>
    </BrowserRouter>
  );
};
