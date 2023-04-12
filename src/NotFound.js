import { Link } from "react-router-dom";

const NotFOund = () => {
  return (
    <div className="not-found">
      <Link to={"/"}>
        <img
          style={{ width: "1200px", position: "relative", left: "-20%" }}
          src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif"
          alt=""
        />
      </Link>
    </div>
  );
};

export default NotFOund;
