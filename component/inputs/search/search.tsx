import React from "react";
import styles from "./search.module.css";

export default function Search({id, name, value, onChangeCallback, onFilterCallback, placeholder}) {
  return (
		<div className={styles.mainContainer}>
			<div className={styles.searchIconContainer}>
				<span className="material-icons">search</span>
			</div>
			<input
				className={styles.input}
				id={id}
				name={name}
				type={"text"}
				value={value}
				onChange={(event) => onChangeCallback(event.target.value)}
				placeholder={placeholder}
			/>
			<button className={styles.filterIconContainer} onClick={onFilterCallback}>
				<span className="material-icons">filter_list</span>
			</button>
		</div>
	)
}