import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { WHITE } from 'Styles/colors';

export const AudioPlayer = ({ duration, media, ...props }) => {
	console.log('at the top', duration);
	const [audio, updateAudio] = useState(new Audio(media));
	const [audioPlaying, updateAudioStatus] = useState(false);
	const [iconClass, toggleIconClass] = useState('play');
	const [timer, updateTimer] = useState('00:00');

	useEffect(() => {
		audio.addEventListener('timeupdate', event => {
			let minutes = Math.floor(audio.currentTime / 60);
			minutes = minutes >= 10 ? minutes : '0' + minutes;
			let seconds = Math.floor(audio.currentTime % 60);
			seconds = seconds >= 10 ? seconds : '0' + seconds;
			console.log(audio.currentTime);

			updateTimer(`${minutes}:${seconds}`);

			if (audio.currentTime >= duration) {
				//duration here never updates -- this is always default
				console.log('duraaation', duration);
				fadeInOut(-0.01);
			}
		});
	},[audio.currentTime]);

	audio.addEventListener('play', e => {
		fadeInOut(0.01);
		toggleIconClass('pause');
		updateAudioStatus(true);
	});
	audio.addEventListener('playing', e => {
		toggleIconClass('pause');
		updateAudioStatus(true);
	});
	audio.addEventListener('pause', e => {
		toggleIconClass('play');
		updateAudioStatus(false);
	});

	function fadeInOut(interval) {
		let newVolume = audio.volume;
		const changeVol = setInterval(() => {
			var my_math = (Math.exp(newVolume) - 1) / (Math.E - 1);
			if (my_math < 0 || my_math > 1) {
				clearInterval(changeVol);
				if (my_math < 0) audio.pause();
			} else {
				audio.volume = my_math;
				newVolume += interval;
			}
		}, 30);
	}

	return (
		<AudioStyles>
			<div className='clock'>
				<h1>{timer}</h1>
			</div>
			<button
				className='audio-button'
				onClick={() => {
					if (audioPlaying) {
						audio.pause();
					} else {
						audio.play();
					}
				}}>
				<div className={`icon ${iconClass}`}></div>
			</button>
		</AudioStyles>
	);
};

const AudioStyles = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	font-size: 5rem;

	.clock {
		background: rgba(255, 255, 255, 0.25) no-repeat fixed center;
		background-size: 1000px;
		border: outset 0.1em rgba(255, 255, 255, 0.25);
		border-radius: 0.15em;
	}

	.audio-button {
		border: none;
		background: transparent;
		padding: 2em;
		cursor: pointer;
	}

	.icon {
		transition: border-style, border-width 100ms ease-in-out;
		box-sizing: border-box;
		height: 15em;
		width: 15em;
		border-color: transparent;
		border-left-color: ${WHITE};
	}

	.icon.play {
		border-style: solid;
		border-width: 7.5em 0 7.5em 15em;
	}

	.icon.pause {
		border-width: 0 0 0 8em;
		border-style: double;
	}
`;
