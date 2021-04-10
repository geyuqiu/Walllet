import {render} from '@testing-library/react';
import {createMemoryHistory} from "history";
import React from "react";
import {Router} from "react-router-dom";

const customRender = (component: React.ReactElement, options: any = {}) =>
	render(component, {...options});

export const renderWithRouter = (
	component: React.ReactElement,
	{
		routes = ["/"],
		history = createMemoryHistory({ initialEntries: routes })
	} = {},
) => {
	const RouterWrapper = ({ children }: { children: React.ReactNode }) =>
			<Router history={history}>{children}</Router>;

	return {
		...customRender(component, {wrapper: RouterWrapper}),
		history,
	};
};
