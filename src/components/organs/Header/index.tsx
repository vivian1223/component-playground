import React from 'react';

import styles from './index.module.css';

export const Header = () => (
	<div className={styles.header}>
		<h1 className={styles.title}>Practice & Patience</h1>
		<p>
			Practice makes perfect, but it's also important to be patient with yourself.<br/> Welcome to Vivian' s component playgroud.
		</p>
	</div>
);
