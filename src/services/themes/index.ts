import main from "./main";
import light from "./light";
import { Theme } from "@/types/themes";

const complete = (theme: Theme) => {
  return { ...main, ...theme };
};

const themes = { light: complete(light) };

export default themes;
