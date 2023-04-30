/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import classnames from 'classnames';

import { ReactComponent as CheckboxIcon } from './../../images/icons/checkbox.svg';

import styles from './index.module.css';

interface CheckbooxProperty {
	id: string;
	action: () => void;
	label: string;
	classname: string;
	disabled?: boolean;
}

export const Checkbox: React.FC<CheckbooxProperty> = ({
	id,
	action,
	label,
	classname,
	disabled = false,
}) => {
	const [checkboxValue, setCheckboxValue] = useState(false);
	const onClickFunciton = () => {
		if (!disabled) {
			setCheckboxValue(!checkboxValue);
			action();
		}
	};
	return (
		<>
			<label htmlFor={id} className={classnames(styles.label, classname)}>
				<div
					className={classnames(styles.checkbox, {
						[styles.showIcon]: !checkboxValue,
						[styles.disabled]: disabled,
					})}
				>
					<input type="checkbox" id={id} />
					<CheckboxIcon onClick={onClickFunciton} />
				</div>
				<span className={classnames({ [styles.disabled]: disabled })} onClick={onClickFunciton}>
					{label}
				</span>
			</label>
		</>
	);
};
