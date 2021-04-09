import React from "react";

type LinkProps = {
	href: string;
	className: string;
	children: React.ReactNode
};

export const Link = ({ href, className, children }: LinkProps) => (
		<a href={href}
		   className={className} >
			{children}
		</a>
	);
