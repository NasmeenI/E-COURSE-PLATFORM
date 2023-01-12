import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Error from "../error/Error";

export default function ViewStudent() {
  const {
    data: { user },
  } = useContext(UserContext);
  return user.type === "instructor" ? (
    <div>
      <Header />
      <div className="mt-[60px]"></div>
      <Footer />
    </div>
  ) : (
    <Error />
  );
}
