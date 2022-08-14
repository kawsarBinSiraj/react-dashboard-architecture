import React from 'react';

/**
 * description :- PageTitle Components
 * created_at:- 28/07/2022 12:29:42
 */
const PageTitle = ({ title, children, ...props }) => {
	return (
		<div {...props}>
			<h3 className="mb-0 theme-page-title fw-normal">
				{children} {title}
			</h3>
		</div>
	);
};

/**
 * description :- CardTitle Components
 * created_at:- 28/07/2022 12:29:42
 */
const CardTitle = ({ title, children, ...props }) => {
	return (
		<div {...props}>
			<h5 className="mb-0 theme-card-title d-flex align-items-center gap-2 fw-semi-fold">
				{children} {title}
			</h5>
		</div>
	);
};

export { PageTitle, CardTitle };
