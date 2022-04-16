import { useSelector } from 'react-redux'
import './App.css'
import { Header } from './containers/Header'
import { Quiz } from './containers/Quiz'

function App() {
	const state = useSelector(state => state)
	console.log(state);
	return (
		<div className='App'>
			<Header />
			<Quiz />
		</div>
	)
}

export default App
