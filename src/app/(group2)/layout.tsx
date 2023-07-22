import { ReactNode } from "react";

interface IGroup2LayoutProps {
	children: ReactNode;
}

export default function Group2Layout({ children }: IGroup2LayoutProps) {
	return (
		<main>
			<h1>Group 2 Header</h1>

			{children}

			<footer>Group 2 Footer</footer>
		</main>
	);
}
