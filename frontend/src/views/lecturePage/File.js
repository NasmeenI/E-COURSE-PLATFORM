export default function File({ filePath, fileName }) {
  return (
    <li className="w-full border-[1px] border-black py-[10px] px-[20px] rounded-md mt-[20px] flex flex-row justify-between items-center">
      <span className="font-secondary truncate">{fileName}</span>
      <a href={filePath} download>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          viewBox="0 0 471.2 471.2"
          className="w-[20px] h-[20px]"
        >
          <path d="M457.7 230.15c-7.5 0-13.5 6-13.5 13.5v122.8c0 33.4-27.2 60.5-60.5 60.5H87.5c-33.4 0-60.5-27.2-60.5-60.5v-124.8c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v124.8c0 48.3 39.3 87.5 87.5 87.5h296.2c48.3 0 87.5-39.3 87.5-87.5v-122.8c0-7.4-6-13.5-13.5-13.5z" />
          <path d="M226.1 346.75c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4l85.8-85.8c5.3-5.3 5.3-13.8 0-19.1-5.3-5.3-13.8-5.3-19.1 0l-62.7 62.8V30.75c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v273.9l-62.8-62.8c-5.3-5.3-13.8-5.3-19.1 0-5.3 5.3-5.3 13.8 0 19.1l85.9 85.8z" />
        </svg>
      </a>
    </li>
  );
}
