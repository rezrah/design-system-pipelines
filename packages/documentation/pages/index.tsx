import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Button } from "@rezrah/react";
import buttonData from "@rezrah/design-tokens/dist/colours/components/button/js/light.module";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <h2 className={styles.title}>React</h2>
          <p className={styles.description}>Style encapsulation</p>
          {(
            Object.keys(buttonData.btn) as Array<keyof typeof buttonData.btn>
          ).map((value) => {
            const buttonType = value.toString();
            const capitalizedButtonType =
              buttonType.charAt(0).toUpperCase() + buttonType.slice(1);

            return (
              <Button
                key={buttonType}
                type={value !== "base" ? value : undefined}
                onClick={() => console.log("clicked!")}
              >
                {capitalizedButtonType} Button
              </Button>
            );
          })}
        </div>
        <div>
          <h2 className={styles.title}>HTML + CSS</h2>
          <p className={styles.description}>Global styles</p>
          {(
            Object.keys(buttonData.btn) as Array<keyof typeof buttonData.btn>
          ).map((value) => {
            const buttonType = value.toString();
            const capitalizedButtonType =
              buttonType.charAt(0).toUpperCase() + buttonType.slice(1);

            return (
              <button
                key={buttonType}
                className={value !== "base" ? `btn btn-${buttonType}` : `btn`}
                onClick={() => console.log("clicked!")}
              >
                {capitalizedButtonType} Button
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Home;
