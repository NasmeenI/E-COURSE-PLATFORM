import cleverse from "../footer/assets/cleverse.png";
import thinc from "../footer/assets/thinc.png";
export default function Footer() {
  return (
    <footer className="w-full flex flex-row items-center justify-center border-t border-[#E0E0E0] pt-2 pb-3">
      <span className="font-secondary text-[#757575] mt-2 font-bold text-sm">
        ©2021 Thinc. x Cleverse. Project for{" "}
        <a
          className="underline"
          href="https://www.facebook.com/photo/?fbid=617409323525248&set=a.530992392166942"
          target="_blank"
          rel="noreferrer"
        >
          hack to school
        </a>
      </span>

      <img
        src={cleverse}
        alt="cleverse"
        className="w-[50px] h-[30px] ml-[40px] mr-[20px]"
      ></img>
      <span className="font-primary">x</span>
      <img
        src={thinc}
        alt="thinc"
        className="w-[50px] h-[30px] ml-[20px] mr-[40px]"
      ></img>
    </footer>
  );
}
