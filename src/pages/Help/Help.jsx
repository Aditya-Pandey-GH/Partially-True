import { replace, useNavigate } from "react-router-dom";

const Help = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="flex flex-col justify-center items-center p-4 space-y-8 md:space-y-12">Help</div>
		</>
	);
};

export default Help;
