import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import LayoutApp from "../components/LayoutApp";
const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <LayoutApp>
        <h1 className={styles.title}>Trang chủ YOYO xăng dầu </h1>
        <Link href="/login">Go to Login </Link>
        <Link href="/signup">Go to SignUp</Link>
        <Link href="/account">Go to Account</Link>
      </LayoutApp>
    </div>
  );
};

export default Home;
