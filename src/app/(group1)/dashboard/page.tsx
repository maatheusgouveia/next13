export default async function Dashboard() {
	const posts = await fetch(
		"https://jsonplaceholder.typicode.com/posts"
	).then((response) => response.json());
	// .then((json) => JSON.stringify(json));

	return (
		<div>
			<h1>Dashboard</h1>

			{posts.map((post) => (
				<section key={post.id}>
					<h2>{post.title}</h2>
					<p>{post.body}</p>
				</section>
			))}
		</div>
	);
}
