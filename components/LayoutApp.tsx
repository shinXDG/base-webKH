import React from "react";
import MainFooter from "./Screens/MainFooter";
import MenuHeader from "./Screens/MenuHeader";
import styles from "../styles/Home.module.css";

type Props = { children: any };

export default function LayoutApp({ children }: Props) {
  return (
    <>
      <MenuHeader />
      <main className={styles.main}> {children} </main>
      <MainFooter />
    </>
  );
}
