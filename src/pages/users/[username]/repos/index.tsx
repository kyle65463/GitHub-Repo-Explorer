import { Repo } from "@models/repo";
import axios from "axios";
import { NextPageContext } from "next";
import React from "react";
import { fetchUserRepoList } from "service/github";

interface Props {
	repos: Repo[];
}

export default function repos({ repos }: Props) {
	return (
		<div>
			{repos.map((repo) => (
				<p key={repo.node_id}>{repo.name}</p>
			))}
		</div>
	);
}

export async function getServerSideProps({ query }: NextPageContext) {
	const { username } = query;
	if (typeof username !== "string") {
		return { redirect: { destination: "/" } };
	}
	const repos = await fetchUserRepoList(username);
	return { props: { repos } };
}
