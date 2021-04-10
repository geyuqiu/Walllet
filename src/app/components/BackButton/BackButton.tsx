import React from "react";
import {useHistory} from "react-router-dom";
import {styled} from "twin.macro";

import {Icon} from "../Icon/Icon";
import {getStyles} from "./BackButton.styles";

type BackButtonProps = {
	backToUrl?: string;
	className?: string;
	disabled?: boolean;
};

const StyledBackButton = styled.button<BackButtonProps>(getStyles);

export const BackButton = ({ backToUrl, className, disabled }: BackButtonProps) => {
	const history = useHistory();

	const handleOnClick = () => {
		if (backToUrl) {
			return history.push(backToUrl);
		}

		history.go(-1);
	};

	return (
		<StyledBackButton onClick={handleOnClick} disabled={disabled} className={className}>
			<Icon name="ArrowLeft" className="mx-auto" width={20} height={20} />
		</StyledBackButton>
	);
};
