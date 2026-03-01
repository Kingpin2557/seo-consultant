import style from "./Button.module.css";
import Zoom from "../Icon/Zoom";

type Button = {
  text: string;
};

function Button({ text }: Button) {
  return (
    <button className={style.button}>
      <Zoom />
      <p>{text}</p>
    </button>
  );
}

export default Button;
