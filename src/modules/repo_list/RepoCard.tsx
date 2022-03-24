import { Repo } from "@models/repo";
import ForkIcon from "@mui/icons-material/ForkLeft";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useRouter } from "next/dist/client/router";
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
				{/* Name */}
				<h3 className='card-title text-primary' onClick={onTitleClick}>
					<span className='cursor-pointer'>{name}</span>
				</h3>

				{/* Description */}
				<p className='text-content-mid'>{description}</p>

				{/* Details */}
				<div className='info-container'>
					{/* Language */}
					{language && <span className='info info-language'>{language}</span>}

					{/* Forks count */}
					{forks_count !== undefined && (
						<span className='info'>
							<ForkIcon sx={{ fontSize: 20 }} /> {forks_count}
						</span>
					)}

					{/* Stargazers count */}
					{stargazers_count !== undefined && (
						<span className='info text-amber-500'>
							<StarOutlineIcon sx={{ fontSize: 20 }} />
							{stargazers_count}
						</span>
					)}
				</div>
			</div>
		</div>
	);
}
