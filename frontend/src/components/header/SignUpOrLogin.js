import { useNavigate } from "react-router";

export default function SignUpOrLogin() {
  const navigate = useNavigate();

  function navigateToRegister() {
    navigate("/register");
  }

  function navigateToLogin() {
    navigate("/login");
  }

  return (
    <>
      <div className="flex flex-row items-center">
        <button
          className="rounded-full py-1 border border-black/[0.1] flex items-center justify-center w-[100px]"
          onClick={navigateToRegister}
        >
          <span className="text-[18px] font-secondary">Register</span>
        </button>

        <button
          className="rounded-full py-1 border border-black/[0.1] flex items-center justify-center ml-[30px] w-[100px]"
          onClick={navigateToLogin}
        >
          <span className="text-[18px] font-secondary">Login</span>
        </button>
      </div>
    </>
  );
}
