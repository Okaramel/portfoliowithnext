"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "../header"
import Project from "./main";
import Clouds from "./clouds";


export default function Home() {
  return (
    <>
      <Header />
      <Project />
      <Clouds />
    </>
  );
}

