import { useRouter } from "next/dist/client/router";
import React from "react";

export default function repos() {
	const router = useRouter();
	const { username, reponame } = router.query;
	return (
		<div>
			{username} {reponame}
		</div>
	);
}
