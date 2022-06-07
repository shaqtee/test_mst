import { useSelector, useDispatch } from "react-redux";
import { actions } from "./reducers";

export const Authentication = () => {
  const login = useSelector((state) => state.middleware.isLogin);
  const dispatch = useDispatch();

  const getLogin = () => {
    dispatch(actions.loginRed({ username: "admin", password: "admin" }));
  };

  return { login, getLogin };
};
