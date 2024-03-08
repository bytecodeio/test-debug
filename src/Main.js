import React, { useState, useContext, useEffect } from "react";

import { ExtensionContext } from "@looker/extension-sdk-react";

import Template1 from "./pageTemplates/Template1/Template1";

export const Main = () => {

  const { core40SDK: sdk } = useContext(ExtensionContext);


  return (
    <>

      <div style={{marginTop:'4em'}}>
        <Template1/>
      </div>



    </>
  );
};
