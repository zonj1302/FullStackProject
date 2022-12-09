import React from 'react';

const FaceRecognition = () => {
	return ( 
		<div className='center'>
			<img alt='imagefaces' src={'https://clarifai.com/clarifai/main/models/face-detection?utm_source=clarifai&utm_medium=referral&inputId=https%3A%2F%2Fs3.amazonaws.com%2Fsamples.clarifai.com%2Ffeatured-models%2Fface-crowd-at-concert.jpg'} />
	    </div>	
	);	
}

export default FaceRecognition;