import {
  SIDE_NAV_LIGHT,
  NAV_TYPE_SIDE,
  DIR_LTR,
} from "constants/ThemeConstant";
import { env } from "./EnvironmentConfig";

export const APP_NAME = "DiseasePred";
export const API_BASE_URL = env.API_ENDPOINT_URL;
export const client_id = env.client_id;
export const client_secret = env.client_secret;
export const APP_PREFIX_PATH = "/app";
export const AUTH_PREFIX_PATH = "/auth";

export const THEME_CONFIG = {
  navCollapsed: false,
  sideNavTheme: SIDE_NAV_LIGHT,
  locale: "fr",
  navType: NAV_TYPE_SIDE,
  topNavColor: "#E56337",
  headerNavColor: "#FFFFFF",
  mobileNav: false,
  currentTheme: "light",
  direction: DIR_LTR,
};
