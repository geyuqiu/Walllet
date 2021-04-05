import React from "react";
import { Route, Switch } from "react-router-dom";

import { FeeInput } from "../components/FeeInput/FeeInput";
import { Wallet } from "../components/Wallet/Wallet";

export const Routing = () => (
	<Switch>
		<Route path="/fee">
			<FeeInput />
		</Route>
		<Route path="/">
			<Wallet />
		</Route>
	</Switch>
);
