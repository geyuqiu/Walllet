import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
	const linkClass = "inline-block text-gray-800 hover:text-gray-600 mr-4";

	return (
		<header className="bg-gray-100 p-6">
			<div className="flex items-center justify-between flex-wrap">
				<nav className="block">
					<NavLink to="/">
						<span className={linkClass}>Wallet</span>
					</NavLink>
					<NavLink to="/fee">
						<span className={linkClass}>Fee</span>
					</NavLink>
				</nav>
			</div>
		</header>
	);
};
