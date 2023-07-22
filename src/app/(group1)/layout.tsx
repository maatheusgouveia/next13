import { ReactNode } from "react";

interface IGroup1LayoutProps {
	children: ReactNode;
}

export default function Group1Layout({ children }: IGroup1LayoutProps) {
	return (
		<main>
			<h1>Group 1 Header</h1>

			{children}

			<footer>Group 1 Footer</footer>
		</main>
	);
}
