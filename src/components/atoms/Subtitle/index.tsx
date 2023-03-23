import React from 'react';

import styles from './index.module.css';

interface SubtitleProps {
	text: string;
}

export const Subtitle: React.FC<SubtitleProps> = ({ text }) => (
	<h2 className={styles.subtitle}>{text}</h2>
);
