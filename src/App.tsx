import { FC } from "react";
import styles from "./App.module.css";

const App: FC = () => {
  return <div className={`${styles.app} ${styles.white}`}>Hello World!!</div>;
};

export default App;
