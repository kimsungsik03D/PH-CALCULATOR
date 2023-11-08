import { ButtonProps } from "@/types";
import "./style.css";

const Button = ({
  btnText = "props Button",
  btnColor = "",
  btnWidth = "",
  btnHeigth = "",
  btnSize = "medium",
  btnCustomClass = "",
  ...props
}: ButtonProps) => {
  const pDMg = () => {
    if (btnSize == "mini") {
      return "px-2 py-1";
    } else if (btnSize == "small") {
      return "px-4 py-2";
    } else if (btnSize == "medium") {
      return "px-8 py-3";
    } else if (btnSize == "large") {
      return "px-10 py-4";
    } else if (btnSize == "xLarge") {
      return "px-14 py-5";
    }
  };
  const bgColor = () => {
    if (btnColor == "red") {
      return "bg-red-300 hover:bg-red-400";
    } else {
      return "bg-sky-300 hover:bg-sky-400";
    }
  };
  return (
    <>
      <button
        className={`custom-button boder-focus ${btnWidth} ${btnHeigth} ${bgColor()} ${btnCustomClass} ${pDMg()}`}
        {...props}
      >
        {btnText}
      </button>
    </>
  );
};

export default Button;
