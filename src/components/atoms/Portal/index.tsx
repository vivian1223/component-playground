import React, { useEffect } from "react";
import ReactDOM  from "react-dom";

interface ProtalProperty {
	children: React.ReactNode;
	customRootId?: string;
	className?: string;
}

const Portal: React.FC<ProtalProperty> = ({ children, customRootId, className = '' }) => {
	const rootId = customRootId || 'portal-root';
	let portalRoot;
	if (document.getElementById(rootId)) {
		portalRoot = document.getElementById(rootId);
	} else {
		const dom = document.createElement('div');
		dom.setAttribute('id', rootId);
		portalRoot = dom;
		document.body.appendChild(portalRoot);
	}
	portalRoot?.classList.add(className || '');
	return ReactDOM.createPortal(children, portalRoot as HTMLElement);
}

export default Portal;
