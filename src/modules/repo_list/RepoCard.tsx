import { Repo } from "@models/repo";
import { useRouter } from "next/dist/client/router";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ForkIcon from "@mui/icons-material/ForkLeft";
import React, { useCallback } from "react";

interface RepoCardProps {
	username: string;
	repo: Repo;
}

export default function RepoCard({ username, repo }: RepoCardProps) {
	const { name, language, stargazers_count, forks_count, description } = repo;
	const router = useRouter();

	const onTitleClick = useCallback(() => {
		router.push(`/users/${username}/repos/${name}`);
	}, [username, name]);

	return (
		<div className='repo-card card shadow-sm bg-white'>
			<div className='card-body'>
				<h2 className='card-title text-primary' onClick={onTitleClick}>
					<span className='cursor-pointer'>{name}</span>
				</h2>
				<p className='text-content-mid'>{description}</p>
				<div className='info-container mt-2'>
					{language && <span className='info text-teal-500'>{language}</span>}
					{stargazers_count && (
						<span className='info text-amber-500'>
							<StarOutlineIcon sx={{ fontSize: 20 }} />
							{stargazers_count}
						</span>
					)}
					{forks_count && (
						<span className='info '>
							<ForkIcon sx={{ fontSize: 20 }} /> {forks_count}
						</span>
					)}
				</div>
			</div>
		</div>
	);
}
