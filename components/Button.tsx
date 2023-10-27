import { ButtonProps } from "@/types";
import "./style.css";

const Button = ({
  btnText = "props Button",
  btnColor = "",
  btnWidth = "",
  btnHeigth = "",
  btnCustomClass = "",
  ...props
}: ButtonProps) => {
  return (
    <>
      <button
        className={`custom-button boder-focus ${btnWidth} ${btnHeigth} ${btnColor} ${btnCustomClass}  `}
        {...props}
      >
        {btnText}
      </button>
    </>
  );
};

export default Button;
