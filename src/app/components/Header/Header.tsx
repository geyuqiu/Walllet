import React from "react";
import {NavLink} from "react-router-dom";

export const Header = () => {
	const linkClass = "inline-block text-gray-800 hover:text-gray-600 mr-4";

	return (
		<header className="bg-green-700 p-6 min-h-20vh flex items-center justify-between flex-wrap">
			<nav className="block">
				<NavLink to="/">
					<span className={linkClass} data-testid="link__wallet">
						Wallet
					</span>
				</NavLink>
				<NavLink to="/fee">
					<span className={linkClass} data-testid="link__fee">
						Fee
					</span>
				</NavLink>
			</nav>
		</header>
	);
};
