import { useState } from "react";
import Search from "../../component/inputs/search/search";
import styles from "./styles.module.css";

export default function Home() {
    const [search, setSearch] = useState("");

  return (
    <main className={styles.mainContainer}>
        <header className={styles.headerContainer}>
          <Search
            name={"search"}
            value={search}
            onChangeCallback={setSearch}
            placeholder={"Procurar por um post"}
            onFilterCallback={() => console.log("pressionou")}
          />
        </header>
    </main>
  )
}
