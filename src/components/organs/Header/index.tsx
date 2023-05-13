import { Button } from '../../atoms/Button';

import banner from './../../../images/banner.jpg';
import { ReactComponent as GithubIcon } from './../../../images/icons/github.svg';

import styles from './index.module.css';

export const Header = () => (
	<div className={styles.header} style={{ background: `url(${banner})` }}>
		<h1 className={styles.title}>Practice & Patience</h1>
		<p>
			Practice makes perfect, but it's also important to be patient with yourself.<br/> Welcome to Vivian' s component playgroud.
		</p>
		<div className={styles.buttonWrapper}>
			<Button themeColor='white' text="GitHub" variant='outlined' startIcon={<GithubIcon />}/>
		</div>
	</div>
);
