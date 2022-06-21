import "./App.css";
import Button from "./components/Button";
import Title from "./components/Title";
import Section from "./components/Section/Section";
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
			<div>
				<Section
					title="tieu de 1"
					text="Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. "
					img="https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg"
				/>
			</div>
		</>
	);
}

export default App;
