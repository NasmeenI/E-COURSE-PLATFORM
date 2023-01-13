export default function Cross({func}) {
  return (
    <button
      className="flex flex-row items-center w-[170px] justify-start border-2 border-black rounded-lg my-[10px]"
      onClick={func}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 503.021 503.021"
        className="w-[20px] h-[20px] mx-[10px] my-[5px]"
      >
        <path d="m491.613 75.643-64.235-64.235c-15.202-15.202-39.854-15.202-55.056 0L251.507 132.222 130.686 11.407c-15.202-15.202-39.853-15.202-55.055 0l-64.23 64.236c-15.202 15.202-15.202 39.854 0 55.056l120.821 120.815L11.401 372.328c-15.202 15.202-15.202 39.854 0 55.056l64.235 64.229c15.202 15.202 39.854 15.202 55.056 0l120.815-120.814 120.822 120.814c15.202 15.202 39.854 15.202 55.056 0l64.235-64.229c15.202-15.202 15.202-39.854 0-55.056L370.793 251.514l120.82-120.815c15.202-15.209 15.202-39.854 0-55.056z" />
      </svg>
      <span className="font-secondary text-[16px]">Cancel</span>
    </button>
  );
}
