import axios from "axios";

export class HyperionAPI {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  flashRainbow = async (milliseconds: number) => {
    const result = await axios.post(this.url, {
      command: "effect",
      effect: {
        name: "Rainbow swirl",
      },
      duration: 500,
      priority: 100,
      origin: "My Fancy App",
    });
    console.log(result);
  };
}
