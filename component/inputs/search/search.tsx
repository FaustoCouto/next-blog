import React from "react";
import styles from "./search.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Search({id, name, value, callback, placeholder}) {
  return (
		<div className={styles.mainContainer}>
			<div className={styles.iconContainer}>
				<FontAwesomeIcon icon={faSearch} />
			</div>
			<input
				className={styles.input}
				id={id}
				name={name}
				type={"text"}
				value={value}
				onChange={(event) => callback(event.target.value)}
				placeholder={placeholder}
			/>
		</div>
	)
}