import { Repo } from "@models/repo";
import React from "react";

interface RepoCardProps {
	repo: Repo;
}

export default function RepoCard({ repo }: RepoCardProps) {
	return (
		<div className='repo-card card shadow-card bg-white'>
			<div className='card-body'>
				<h2 className='card-title'>{repo.name}</h2>
				<p>{repo.description}</p>
				<div className='mt-2'>
					<span className='mr-2'>{repo.language}</span>
					<span className='mr-2'>Stars: {repo.stargazers_count}</span>
					<span className='mr-2'>Forks: {repo.forks_count}</span>
				</div>
			</div>
		</div>
	);
}
