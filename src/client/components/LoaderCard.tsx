import React, { useState, useEffect } from 'react';

interface LoaderCardProps {
	length?: number;
}

const LoaderCard = ({ length }: LoaderCardProps) => {
    const [blankLoader, setBlankLoader] = useState<boolean>(true);

     useEffect(() => {
        const timer = setTimeout(() => setBlankLoader(false), 500);

        return () => {
            clearTimeout(timer);
        }
     }, []);

    if (blankLoader) return <div></div>;

	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-2 lg:px-0">
			{Array(length)
				.fill('')
				.map((_, index) => (
					<div
						key={`loader-card-${index}`}
						className="w-full mb-5 shadow-xl card bg-base-100">
						<div className="card-body">
							<progress className="w-2/3 progress" value="0" max="100"></progress>
							<progress className="w-1/3 progress" value="0" max="100"></progress>
							<progress className="w-full progress" value="0" max="100"></progress>
							<progress className="w-1/2 progress" value="0" max="100"></progress>
							<progress className="w-1/4 progress" value="0" max="100"></progress>
							<progress className="w-2/3 progress" value="0" max="100"></progress>
						</div>
					</div>
				))}
		</div>
	);
};

export default LoaderCard;
