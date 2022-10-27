type Pages = "BASE" | "SIGN_UP" | "TODO_LIST" | "NOT_FOUND";

type PATH = Record<Pages, string>;

const ROUTE_PATH: PATH = {
  BASE: process.env.REACT_APP_BASE_URL || "/",
  SIGN_UP: "/signup",
  TODO_LIST: "/todolist",
  NOT_FOUND: "*",
};

export default ROUTE_PATH;
