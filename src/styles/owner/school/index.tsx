import { styled } from "@mui/system";
import { Drawer } from "@mui/material";

export const Main = styled("div")`
	height: 100vh;
	min-width: calc(100vw - 220px);
	padding: 4rem;

	.title {
		font-weight: bold;
		user-select: none;
	}

	.clickable-text {
		color: #e7a0a2;
		cursor: pointer;
	}
`;

export const Greetings = styled("div")`
	height: 4rem;
	font-weight: bold;
	font-size: 1.5rem;
	line-height: 0.8;
	user-select: none;

	span {
		color: #a4a9b6;
	}
`;

export const Grades = styled("div")`
	height: 16rem;
	width: 70%;
	background: #ffffff;
	border-radius: 1rem;
	line-height: 0.8;

	span {
		font-size: 0.8rem;
		color: #a4a9b6;
	}
`;
