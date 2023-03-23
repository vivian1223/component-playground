import React from 'react';

import { Subtitle } from '../../atoms/Subtitle';

import styles from './index.module.css';

interface ComponentCardProperty {
	title: string;
	intro: string;
	content: React.ReactNode;
}

export const ComponentCard: React.FC<ComponentCardProperty> = ({ title, intro, content }) => {
	return (
		<div className={styles.card}>
			<Subtitle text={title} />
			<p>{intro}</p>
			{content}
		</div>
	);
};
