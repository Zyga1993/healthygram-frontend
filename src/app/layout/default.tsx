import { Outlet } from "react-router";
import { Header } from "../../widgets/header";
import { Footer } from "../../widgets/footer";

export const DefaultLayout = () => {
  return  <>
    <Header />
    <Outlet />
    <Footer></Footer>
  </>;
};
