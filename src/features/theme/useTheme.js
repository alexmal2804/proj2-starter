import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../store/theme/themeActions";


export const useTheme = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const toggleTheme = () =>
    dispatch(setTheme(theme === "light" ? "dark" : "light"));

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, toggleTheme]
};
