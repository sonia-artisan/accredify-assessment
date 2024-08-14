import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import MainLayout from './components/layouts/MainLayout';
import Title from './components/Title';
import Subtitle from './components/Subtitle';

function App() {
	return (
		<MainLayout>
			<Title titleText='Hi, Gerald Goh' />
			<Subtitle subtitleText='Manage your documents issued by SMU Academy or track your career goal.' />
		</MainLayout>
	);
}

export default App;
