import React from "react";
import classnames from "classnames";

import styles from './index.module.css';

export const StyleGuide = () => (
	<div className={styles.styleGuide}>
		<h2>Colors</h2>
		<div className={classnames(styles.color, styles.primary)}>
			<div />
			<div />
			<div />
		</div>
		<div className={classnames(styles.color, styles.secondary)}>
			<div/>
			<div/>
			<div/>
		</div>
		<div className={classnames(styles.color, styles.common)}>
			<div/>
			<div/>
			<div/>
			<div/>
		</div>
	</div>);
