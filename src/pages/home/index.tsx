import { useState, useEffect } from "react";
import { HyperionAPI } from "../../hyperionAPI";

import * as Util from "../../util";

export interface IHomePageProps {}

export function HomePage(props: IHomePageProps) {
  const [hyperionURL, setHyperionURL] = useState("");
  const [hyperionAPI, setHyperionAPI] = useState<HyperionAPI | undefined>(
    undefined
  );

  useEffect(() => {
    setupHyperion();
  }, []);

  const setupHyperion = async () => {
    let promises = [];
    for (let localIP = 0; localIP < 255; localIP++) {
      const url = `http://192.168.0.${localIP}:8090/`;
      promises.push(Util.checkHyperionURL(url));
    }
    const url = await Promise.any(promises);

    setHyperionURL(url);
    setHyperionAPI(new HyperionAPI(url));
  };

  return (
    <div>
      <h1>{hyperionURL}</h1>
      <button onClick={() => hyperionAPI?.flashRainbow(10000)}>Rainbow</button>
    </div>
  );
}
