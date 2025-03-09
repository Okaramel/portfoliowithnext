"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "../header"
import ContactMe from "./main";

export default function Home() {
  return (
     <><Header /><ContactMe /></>
  );
}