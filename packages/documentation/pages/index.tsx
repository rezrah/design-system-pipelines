import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Button } from "@rezrah/figma-to-code-react";
import buttonData from "@rezrah/figma-to-code-design-tokens/dist/colours/components/button/js/light.module";

type Variants = keyof typeof buttonData.btn;

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <h2 className={styles.title}>React buttons</h2>
          <p className={styles.description}>Encapsulated styles</p>
          {(
            Object.keys(buttonData.btn) as Array<keyof typeof buttonData.btn>
          ).map((value) => {
            return (
              <Button
                key={value}
                type={value !== "base" ? value : undefined}
                onClick={() => console.log("wot")}
              >
                Primary Button
              </Button>
            );
          })}
        </div>
        <div>
          <h2 className={styles.title}>CSS buttons</h2>
          <p className={styles.description}>Global styles</p>
          {(
            Object.keys(buttonData.btn) as Array<keyof typeof buttonData.btn>
          ).map((type) => {
            return (
              <button
                key={type}
                className={type !== "base" ? `btn btn-${type}` : `btn`}
                onClick={() => console.log("wot")}
              >
                Primary Button
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Home;
