import React from 'react';

import { Header } from './components/organs/Header';
import { CheckboxField } from './components/organs/CheckboxField';

import styles from './App.module.css';

function App() {
	return (
		<div className={styles.app}>
			<Header />
			<CheckboxField />
		</div>
	);
}

export default App;
