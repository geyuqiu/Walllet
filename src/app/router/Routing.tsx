import React from "react";
import {Route, Switch} from "react-router-dom";

import {FeeInput} from "../pages/FeeInput/FeeInput";
import {WalletView} from "../pages/Wallet/WalletView";

export const Routing = () => (
	<Switch>
		<Route path="/fee">
			<WalletView />
		</Route>
		<Route path="/">
			<FeeInput />
		</Route>
	</Switch>
);
