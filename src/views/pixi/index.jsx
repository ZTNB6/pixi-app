import { useRef, useEffect, useState } from "react";
import * as PIXI from "pixi.js";

async function pixiInit() {
  const app = new PIXI.Application();
  await app.init({ width: 800, height: 700, background: "#1099bb" });
  return app;
}

function PixiApp() {
  const divRef = useRef(null);
  //   const app = pixiInit();
  //   console.log("PixiApp");
  console.log('23131')
  useEffect(() => {
    pixiInit().then((res) => {
      divRef.current.appendChild(res.canvas);
    });
  }, []);

  return (
    <>
      <div ref={divRef}></div>
    </>
  );
}

export default PixiApp;
