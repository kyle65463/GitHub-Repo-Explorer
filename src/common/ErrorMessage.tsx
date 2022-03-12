import { useRouter } from "next/dist/client/router";
import React, { useCallback } from "react";

interface ErrorMessageProps {
  error: string;
}

export default function ErrorMessage({error}: ErrorMessageProps) {
	const router = useRouter();

	const onBack = useCallback(() => {
		router.replace('/');
	}, []);

	return (
		<div className='error-message'>
			<h2>{error}</h2>
			<button className='btn btn-primary mt-6' onClick={onBack}>
				Back
			</button>
		</div>
	);
}
