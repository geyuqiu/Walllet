import React from "react";
import {Route, Switch} from "react-router-dom";

import {FeeInput} from "../components/FeeInput/FeeInput";
import {WalletView} from "../components/Wallet/WalletView";

export const Routing = () => (
	<Switch>
		<Route path="/fee">
			<FeeInput />
		</Route>
		<Route path="/">
			<WalletView />
		</Route>
	</Switch>
);
