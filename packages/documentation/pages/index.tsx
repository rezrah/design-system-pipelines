import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Button } from "@rezrah/react";
import buttonData from "@rezrah/design-tokens/dist/colours/components/button/js/light.module";

const StyledText = ({ children }: { children: any }) => (
  <span className={styles.styledText}>{children}</span>
);

const Home: NextPage = () => {
  const usesFigmaApi = process.env.NEXT_PUBLIC_USE_FIGMA_API === "true";
  return (
    <div className={styles.container}>
      <h2 className={styles.sotTitle}>
        <StyledText>
          {usesFigmaApi ? "Figma" : "Offline design tokens"}
        </StyledText>{" "}
        {usesFigmaApi ? "is " : "are "}
        the current the source of truth
      </h2>
      <p className={styles.sotDesc}>
        Switch to using {usesFigmaApi ? "design tokens" : "Figma"} as the source
        of truth by setting USE_FIGMA_API env variable to{" "}
        {usesFigmaApi ? "false" : "true"} and restart your server.
      </p>
      <main className={styles.main}>
        <div>
          <h2 className={styles.title}>React</h2>
          <p className={styles.description}>CSS Modules</p>
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
        <div className={styles.seperator}>
          <h2 className={styles.title}>React</h2>
          <p className={styles.description}>Global stylesheet</p>
          {(
            Object.keys(buttonData.btn) as Array<keyof typeof buttonData.btn>
          ).map((value) => {
            const buttonType = value.toString();
            const capitalizedButtonType =
              buttonType.charAt(0).toUpperCase() + buttonType.slice(1);

            return (
              <Button
                useGlobalStylesheet
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
          <p className={styles.description}>Global stylesheet</p>
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
