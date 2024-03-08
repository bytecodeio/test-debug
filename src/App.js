import React from "react";
import { ExtensionProvider } from "@looker/extension-sdk-react";
import { hot } from "react-hot-loader/root";

import { Main } from "./Main";


export const App = hot(() => {
  return (
    <ExtensionProvider>
      <Main />
    </ExtensionProvider>
  );
});
