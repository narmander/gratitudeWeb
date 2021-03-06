import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navigation } from 'Components/Navigation'; // Server Side Render Nav bar and base container
import { MenuCards } from 'Components/MenuCards';
import { Meditation } from 'Components/Meditation';
import { MainDescription } from 'Components/SharedComponents/shared';
import SplashImage from 'Assets/Red-Lotus';
import { GlobalStyles } from 'Styles/globalStyles';
import { WHITE } from 'Styles/colors';
import { reducer, SET_MEDITATIONS } from 'Utils/reducer';
const defaultTitle = 'Daily Gratitude';
const defaultHeadline = 'Take a minute to meditate and a moment to reflect';
const defaultBlurb =
	'An application with various calming sounds to meditate to and a personal diary of all you are grateful for. Select a meditation theme below when ready.';

export const Home = props => {
	// set default values
	return (
		<HomeStyles>
			<ContentContainer className='container-main'>
				<GreetingStyles>
					<MainDescription
						title={defaultTitle}
						headline={defaultHeadline}
						blurb={defaultBlurb}
					/>
				</GreetingStyles>
				<MenuCards meditations={props.meditations} />
			</ContentContainer>
			<ContainerImage className='container-image' />
		</HomeStyles>
	);
};

export const Welcome = props => {
	const [state, dispatch] = useReducer(reducer, {
		meditations: [],
	});

	useEffect(() => {
		fetch_meditations();
	}, []);

	async function fetch_meditations() {
		let meditationReq = await fetch('/meditations', {
			method: 'GET',
			'Access-Control-Allow-Origin': '*',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		const meditations = await meditationReq.json();
		dispatch({ action: SET_MEDITATIONS, payload: meditations });
	}

	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<Navigation loggedIn={true} />
					<Switch>
						<Route
							path='/meditation/:name'
							children={<Meditation meditations={state.meditations} />}
						/>
						<Route path='/about' children={<></>} />
						<Route path='/downloadApp' children={<></>} />
						<Route path='/gratitudes' children={<></>} />
						<Route path='/loginLogout' children={<></>} />
						<Route exact path='/'>
							<Home meditations={state.meditations} />
						</Route>
					</Switch>
				<FooterStyles>
					<p>An App made by Nar</p>
					<p>Idea from Malika</p>
				</FooterStyles>
			</BrowserRouter>
		</>
	);
};

const HomeStyles = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	min-height: 40rem;
	height: 80vh;
	width: 100%;
	background: ${WHITE};
	border-bottom-left-radius: 1em;
	border-bottom-right-radius: 1em;

	@media (min-width: 952px) {
		flex-direction: row;
		height: 90vh;
	}
`;

export const GreetingStyles = styled.div`
	padding: 2rem;
	margin: 0 1em;
	left: 25px;
`;

const ContentContainer = styled.div`
	align-items: center;
	order: 2;
	justify-content: space-around;
	@media (min-width: 952px) {
		order: 1;
		display: flex;
	}
`;

const ContainerImage = styled.div`
	min-height: 20rem;
	min-width: 20rem;
	border-radius: 1em;
	background: url(${SplashImage}) no-repeat center center / cover;
	order: 1;
	width: 85%;
	margin: 0 auto;
	@media (min-width: 952px) {
		order: 2;
		width: 100%;
		padding-top: 30em;
	}
`;

const FooterStyles = styled.footer`
	display: block;
	text-align: center;
	margin: 1em;
	@media (min-width: 952px) {
		margin: 0.5em;
	}
`;
