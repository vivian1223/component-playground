import classnames from "classnames";

import { ReactComponent as InstagramIcon } from './../../../images/icons/instagram.svg'

import styles from './index.module.css';

export const StyleGuide = () => (
	<div className={styles.styleGuide}>
		<div className={styles.wrapper}>
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
		</div>
		<div className={styles.wrapper}>
			<h2>Icons</h2>
			<div className={styles.icons}>
				<InstagramIcon />
			</div>
		</div>
	</div>);
