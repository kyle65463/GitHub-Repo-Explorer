import axios from "axios";
import { NextPageContext } from "next";
import { useRouter } from "next/dist/client/router";
import React from "react";

interface RepoProps {
	name: string;
    id: string;
}

interface Props {
	repos: RepoProps[];
}

export default function repos({ repos }: Props) {
	return (
		<div>
			{repos.map((repo) => (
				<p key={repo.id}>{repo.name}</p>
			))}
		</div>
	);
}

export async function getServerSideProps({ query }: NextPageContext) {
	const { username } = query;
	// Fetch data from external API
	const res = await axios.get(`https://api.github.com/users/${username}/repos`);
	const data = res.data;
	console.log(data);

	// Pass data to the page via props
	return { props: { repos: data } };
}
