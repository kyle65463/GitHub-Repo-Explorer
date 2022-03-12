import RepoPage from "modules/repo/RepoPage";
import { useRouter } from "next/dist/client/router";
import React from "react";

export default function repos() {
	const router = useRouter();
	const { username, reponame } = router.query;
	if (typeof username !== "string" || typeof reponame !== "string") {
		return <></>;
	}
	return <RepoPage username={username} reponame={reponame} />;
}
