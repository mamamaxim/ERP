import { initLayout } from "./layout.js";
import { initTheme } from "./theme.js";
import { initRouter } from "./router.js";

initLayout();
initTheme();
await initRouter();
