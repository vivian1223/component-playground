import React from 'react';

// import { Header } from './components/organs/Header';
import Dropdown from './components/molecules/CompnentCard/Dropdown';

import styles from './App.module.css';

function App() {
	return (
		<div className={styles.app}>
			<Dropdown id="0" onClick={()=>{}} dropdownButton={<p>Button</p>} dropdownOptions={<><p>Option1</p><p>Option2</p></>}/>
		</div>
	);
}

export default App;
