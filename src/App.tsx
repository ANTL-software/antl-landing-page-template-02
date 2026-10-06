import { HashRouter, Route, Routes } from "react-router-dom";
import { useRouteScroll } from "./hooks";
import { DanceNotFoundPage, DanceStudioPage } from "./views/layouts/danceStudioPage";
import { MemberAccountPage } from "./views/layouts/memberAccount/MemberAccountPage";

function RoutedApp() {
  useRouteScroll();

  return <Routes><Route path="/" element={<DanceStudioPage />} /><Route path="/account" element={<MemberAccountPage />} /><Route path="*" element={<DanceNotFoundPage />} /></Routes>;
}

export default function App() {
  return <HashRouter><RoutedApp /></HashRouter>;
}
