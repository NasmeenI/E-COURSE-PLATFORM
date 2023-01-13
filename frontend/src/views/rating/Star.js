export default function Star({color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 260 245"
      className="w-[100px] h-[100px] mr-[5px] my-[20px]"
    >
      <path d="m56,237 74-228 74,228L10,96h240" fill={color} />
    </svg>
  );
}
