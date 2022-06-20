import "./App.css";
import Button from "./components/Button";
import Title from "./components/Title";

function App() {
	return (
		<>
			<div>
				<Button name="delete" />
				<Button name="cancel" />
				<Button name="renting" />
				<Button name="buy" />
				<Button name="set auction" />
			</div>
			<div>
				<Title title="hello" />
				<Title title="chao canh" age="18" />
				<Title title="bạn ăn cơm chưa" />
				<Title title="hey do" />
				<Title title="what sub" />
			</div>
		</>
	);
}

export default App;
