import React, { ReactNode, useRef, useState, useEffect } from "react";

import Portal from "../../../atoms/Portal";


import styles from './index.module.css';

interface DropdownProperty {
	id: string;
	onClick: () => void;
	className?: string;
	disabled?: boolean;
	dropdownButton: ReactNode;
	dropdownOptions: ReactNode
}

const Dropdown: React.FC<DropdownProperty> = ({id, onClick = () => {}, className, disabled, dropdownButton, dropdownOptions }) => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
	const [top, setTop] = useState<number>(0)
	const [left, setLeft] = useState<number>(0)
	const [width, setWidth] = useState<number>(0)
	const [height, setHeight] = useState<number>(0)
	const handleClick = () => {
		setToggleDropdown(!toggleDropdown);
		onClick();
	};
	const handleOnResize = () => {
		if (buttonRef.current) {
			const { offsetHeight } = buttonRef.current;
			const { top, left, width, height,  } = buttonRef.current.getBoundingClientRect();
			setTop(top + offsetHeight);
			setLeft(left);
			setWidth(width);
			setHeight(height);
		}
	};

	useEffect(() => {
		handleOnResize();
		window.addEventListener('resize', handleOnResize);
		return () => {
			window.removeEventListener('resize', handleOnResize);
		}
	}, [])
	return(
		<>
			<button className={styles.dropdown} ref={buttonRef} disabled={disabled} onClick={handleClick}>
				{dropdownButton}
			</button>
			{toggleDropdown && (<Portal className={styles.portal}>
				<div className={styles.dropdownWrapper} style={{ position: 'absolute', top, left, width, height }}>
					<p> Hi </p>
					<p> Hello </p>
				</div>
			</Portal>)}
		</>
	);
};

export default Dropdown;
