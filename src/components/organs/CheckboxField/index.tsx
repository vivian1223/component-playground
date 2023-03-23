import React from 'react';

import { ComponentCard } from '../../molecules/CompnentCard';
import { Checkbox } from '../../atoms/Checkboox';

import styles from './index.module.css';

const CheckboxContent = () => (
	<>
		<div className={styles.contentList}>
			<p>1. Toggle:</p>
			<Checkbox
				classname={styles.checkbox}
				id="1"
				label="Toggle checkbox example"
				action={() => {}}
			/>
		</div>
		<div className={styles.contentList}>
			<p>2. Disabled:</p>
			<Checkbox
				disabled
				classname={styles.checkbox}
				id="1"
				label="Disabled checkbox example"
				action={() => {}}
			/>
		</div>
	</>
);

export const CheckboxField = () => (
	<>
		<ComponentCard
			title="Custom Checkbox"
			intro="This custom checkbox is builded by replacing the real input DOM with custom check icon and manipulating toggling state with react useState hook."
			content={<CheckboxContent />}
		/>
	</>
);
