import "./App.css";
import Button from "./components/Button";
import Title from "./components/Title";

function App() {
	return (
		<>
			<div>
				<Button type="saving" />
				<Button type="cancel" />
				<Button type="renting" />
				<Button type="buy" />
				<Button type="set auction" />
			</div>
			<div>
				<Title title="hello" />
				<Title title="chao nha" />
				<Title title="bạn ăn cơm chưa" />
				<Title title="hey do" />
				<Title title="what sub" />
			</div>
		</>
	);
}

export default App;
