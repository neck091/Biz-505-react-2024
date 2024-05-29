import Image from "next/image";
import styles from "./main.css";
import SpellMain from "./comps/SpellMain";
import styles from "@/app/n.module.css"; // CSS Module을 불러옵니다.

export default function Home() {
  return (
    <main>
      <SpellMain />
    </main>
  );
}
