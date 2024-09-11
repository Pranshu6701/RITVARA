import React from 'react';
import { Box, Stack, styled } from '@mui/material';
import RitvaraLogo from '../assets/RITVARALogo.svg';
import Pattern1 from '../assets/Pattern1.png';
import Pattern2 from '../assets/Pattern2.png';
import { useTheme } from '@mui/material/styles'; // Import useTheme
import { Link } from 'react-router-dom';

const BackgroundContainer = styled(Box)(({ theme }) => ({
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	zIndex: -1,
	overflow: 'hidden',
}));

const Component = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	flexDirection: 'column',
	padding: '40px 20px 0 20px',
	[theme.breakpoints.down('sm')]: {
		padding: '40px 10px 0px 10px',
	},
}));

const Wrapper = styled(Box)`
	/* flex: 1; // Expands the content area to push footer down */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	text-align: center;
`;

const PatternW1 = styled('img')(({ theme }) => ({
	width: '50%',
	position: 'absolute',
	top: '-50px',
	left: '-20px',
	[theme.breakpoints.down('md')]: {
		display: 'none',
	},
}));

const PatternW2 = styled('img')(({ theme }) => ({
	width: '30%',
	position: 'absolute',
	top: '0px',
	right: '0px',
	[theme.breakpoints.down('md')]: {
		display: 'none',
	},
}));

const PatternW3 = styled('img')(({ theme }) => ({
	width: '50%',
	position: 'absolute',
	bottom: '-50px',
	right: '-20px',
	transform: 'rotate(180deg)',
	[theme.breakpoints.down('md')]: {
		display: 'none',
	},
}));

const PatternW4 = styled('img')(({ theme }) => ({
	width: '30%',
	position: 'fixed',
	bottom: '0px',
	left: '0px',
	transform: 'rotate(180deg)',
	[theme.breakpoints.down('md')]: {
		display: 'none',
	},
}));

const Logo = styled('img')(({ theme }) => ({
	width: '260px',
	height: 'auto',
	[theme.breakpoints.down('sm')]: {
		width: '200px',
	},
}));

const Text = styled(Box)(({ theme }) => ({
	color: '#ffffff',
	fontSize: '4.4rem',
	paddingTop: '70px',
	letterSpacing: '7px',
	fontWeight: '700',
	[theme.breakpoints.down('md')]: {
		fontSize: '3.8rem',
		paddingTop: '60px',
	},
	[theme.breakpoints.down('sm')]: {
		fontSize: '2.7rem',
		paddingTop: '60px',
	},
}));

const Text1 = styled(Box)(({ theme }) => ({
	color: '#f5c518',
	fontSize: '1.6rem',
	paddingTop: '10px',
	letterSpacing: '5px',
	fontWeight: 500,

	[theme.breakpoints.down('sm')]: {
		fontSize: '1.05rem',
		letterSpacing: '3px',
	},
}));

const Text2 = styled(Box)(({ theme }) => ({
	color: '#ffffff',
	fontSize: '1.22rem',
	paddingTop: '50px',
	letterSpacing: '3px',
	lineHeight: '1.6',
	fontWeight: '400',
	width: '63%',
	[theme.breakpoints.down('lg')]: {
		width: '90%',
	},
	[theme.breakpoints.down('md')]: {
		width: '100%',
	},
	[theme.breakpoints.down('sm')]: {
		width: '100%',
		fontSize: '0.92rem',
		paddingTop: '30px',
	},
}));

const Text3 = styled(Box)(({ theme }) => ({
	color: '#f5c518',
	fontWeight: '500',
	fontSize: '2rem',
	paddingTop: '30px',
	letterSpacing: '2px',
	maxWidth: '80%',
	[theme.breakpoints.down('lg')]: {},
	[theme.breakpoints.down('md')]: {
		fontSize: '1.6rem',
	},
	[theme.breakpoints.down('sm')]: {
		fontSize: '1.2rem',
		maxWidth: '100%',
		paddingTop: '20px',
	},
}));

const Text4 = styled(Box)(({ theme }) => ({
	color: '#ffffff',
	fontSize: '1.22rem',
	paddingTop: '25px',
	maxWidth: '50%',
	letterSpacing: '3px',
	lineHeight: 1.5,
	fontWeight: 400,
	[theme.breakpoints.down('md')]: {
		maxWidth: '90%',
	},
	[theme.breakpoints.down('sm')]: {
		fontSize: '0.92rem',
		maxWidth: '100%',
		paddingTop: '20px',
	},
}));

const Icons = styled(Box)(({ theme }) => ({
	paddingTop: '15px',
	transition: '0.5s ease',
	cursor: 'pointer',
}));

const IconBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '60px',
	height: '60px',
	borderRadius: '50px',
	backgroundColor: '#ffffff',
	transition: '0.3s ease',
	'&:hover': {
		backgroundColor: '#d3d3d3',
	},
	[theme.breakpoints.down('md')]: {
		width: '50px',
		height: '50px',
	},
	[theme.breakpoints.down('sm')]: {
		width: '47px',
		height: '47px',
	},
}));

const SocialLogo = styled('img')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '40px',
	height: 'auto',
	[theme.breakpoints.down('md')]: {
		width: '35px',
	},
	[theme.breakpoints.down('sm')]: {
		width: '32px',
	},
}));

const Footer = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
	paddingTop: '20px',
	[theme.breakpoints.down('sm')]: {
		paddingTop: '20px',
	},
}));

const FooterText = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '14px',
	padding: '20px',
	color: '#f0f0f0',
	[theme.breakpoints.down('sm')]: {
		fontSize: '12px',
	},
}));

const Home = () => {
	const theme = useTheme(); // Use useTheme to access the theme
	return (
		<>
			<BackgroundContainer>
				<PatternW1 src={Pattern1} alt="" />
				<PatternW2 src={Pattern2} alt="" />
				<PatternW3 src={Pattern1} alt="" />
				<PatternW4 src={Pattern2} alt="" />
			</BackgroundContainer>
			<Component>
				<Wrapper>
					<Logo src={RitvaraLogo} />
					<Text>LAUNCHING SOON</Text>
					<Text1>"A New Era of Elegance Awaits"</Text1>
					<Text2>
						As we prepare to unveil a realm of unparalleled elegance and sophistication, we invite you to explore our
						exclusive collections on social media.
					</Text2>
					<Text3>Discover & Shop Our Exclusive Collections</Text3>
					<Icons>
						<Stack direction="row" spacing={3}>
							<IconBox>
								<Link to="https://www.instagram.com/ritvaraofficial/" target="_blank">
									<SocialLogo src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" />
								</Link>
							</IconBox>
							<IconBox>
								<Link to="https://www.facebook.com/RitvaraOfficial" target="_blank">
									<SocialLogo src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" />
								</Link>
							</IconBox>
							<IconBox>
								<Link to="https://www.youtube.com/@RitvaraOfficial" target="_blank">
									<SocialLogo src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" />
								</Link>
							</IconBox>
						</Stack>
					</Icons>
					<Text4>
						Be among the first to experience unparalleled luxury and sophistication. Stay connected for a glimpse into
						the future of refined elegance.
					</Text4>
				</Wrapper>
				<Footer>
					<FooterText>© 2024 Ritvara. All Rights Reserved.</FooterText>
				</Footer>
			</Component>
		</>
	);
};

export default Home;
