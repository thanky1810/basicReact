import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Hello() {
  const theme = useContext(ThemeContext);
  return <div className={theme.theme}>hello Iam Ky</div>;
}

export default Hello;
