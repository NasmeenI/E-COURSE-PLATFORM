import { useMediaQuery } from "usehooks-ts";

export default function HomeBox({
  image,
  title,
  description,
  renderTextFirst = false,
  className = "",
  imageClassName = "",
}) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const renderImage = (
    <img
      src={image}
      alt="pic"
      className={`${
        isMobile ? "w-full mt-6" : "w-[55%]"
      } items-center ${imageClassName}`}
    ></img>
  );

  const renderText = (
    <div className="flex flex-col">
      <span
        className={`${
          isMobile ? "text-[40px] text-center" : "text-[56px] text-start"
        } font-primary text-black`}
      >
        {title}
      </span>
      <span
        className={`text-[18px] ${
          isMobile ? "text-center" : "text-start"
        } font-secondary text-[#757575] mt-[30px] font-bold`}
      >
        {description}
      </span>
    </div>
  );

  return (
    <div
      className={`w-full flex ${
        isMobile ? "flex-col" : "flex-row p-[100px]"
      } justify-between ${className}`}
    >
      {renderTextFirst && !isMobile ? (
        <>
          {renderText} {renderImage}
        </>
      ) : (
        <>
          {renderImage} {renderText}
        </>
      )}
    </div>
  );
}
