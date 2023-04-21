import {
  RenderToPipeableStreamOptions,
  renderToPipeableStream,
} from "react-dom/server";
import App from "./App";
import { Provider } from "react-redux";
import { setupStore } from "./redux/store";
import { StaticRouter } from "react-router-dom/server";

const store = setupStore();

export const render = (
  url: string | Partial<Location>,
  opts: RenderToPipeableStreamOptions | undefined
) => {
  return renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opts
  );
};
