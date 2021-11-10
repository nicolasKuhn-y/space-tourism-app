import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Loader } from "../components/Loader/Loader";

const DestinationScreen = lazy(() =>
  import("../pages/destination/DestinationScreen")
);

const CrewScreen = lazy(() => import("../pages/crew/CrewScreen"));

const TechnologyScreen = lazy(() =>
  import("../pages/technology/TechnologyScreen")
);

const HomeScreen = lazy(() => import("../pages/home/HomeScreen"));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<HomeScreen />} />

          <Route path="destination" element={<DestinationScreen />} />

          <Route path="crew" element={<CrewScreen />} />

          <Route path="technology" element={<TechnologyScreen />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
