import { useEffect } from "react";

const Alert = (props) => {
	const { type, msg, onRemoveAlert } = props;

	useEffect(() => {
		const timeout = setTimeout(() => {
			onRemoveAlert();
		}, 1000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<div className={`alert alert-${type} col-6`} role="alert">
			{msg}
		</div>
	);
};

export default Alert