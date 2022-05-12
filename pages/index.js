import Head from "next/head";
import Image from "next/image";
import Post from "./components/post";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Post />
      <Navbar />
    </>
  );
}
