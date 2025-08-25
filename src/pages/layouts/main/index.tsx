import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <>
      <p>Authentication with react</p>
      <Outlet />
    </>
  );
};
