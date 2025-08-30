import { Navbar } from "./navbar";
import "./header.css";

export const Header = () => {
  return (
    <>
      <div className="grid">
        <div className="row">
          <div className="col">
            <p>Das ist unsera header</p>
          </div>
          <div className="col">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
};
