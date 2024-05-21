import { Button, FormLabel, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Updatebook() {
	const navigate = useNavigate();
	const id = useParams().id;
	const [input, setinput] = useState({});
	useEffect(() => {
		const fetchHandler = async () => {
			await axios
				.get(`http://localhost:5000/books/${id}`)
				.then((res) => res.data)
				.then((data) => setinput(data.x));
		};
		fetchHandler();
	}, [id]);
	const sendRequest = async () => {
		await axios
			.put(`http://localhost:5000/books/${id}`, {
				name: String(input.name),
				author: String(input.author),
				genre: String(input.genre),
				year: Number(input.year),
				image: String(input.image),
			})
			.then((res) => res.data);
	};
	const handlesubmit = (e) => {
		e.preventDefault();
		sendRequest().then(() => navigate("/"));
	};
	const handlechange = (e) => {
		setinput((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};
	console.log(input);
	return (
		<>
			<div className="w-[100%] h-[100vh] bg-black flex justify-center items-center">
				<div className="w-[50%] h-[50vh] bg-blue-600 xl:blur-[500px] blur-[200px]"></div>
				<div className="w-[100%] h-[100vh] absolute top-0 flex justify-center">
					{input && (
						<form className="xl:w-[50%] w-[80%] mt-[10vh]">
							<FormLabel sx={{ color: "white" }}>
								Name of the Book
							</FormLabel>
							<TextField
								value={input.name}
								onChange={handlechange}
								margin="normal"
								fullWidth
								variant="outlined"
								name="name"
								sx={{
									"& .MuiOutlinedInput-root": {
										"& fieldset": {
											borderColor: "white",
										},
										"&:hover fieldset": {
											borderColor: "white",
										},
										"&.Mui-focused fieldset": {
											borderColor: "white",
										},
									},
									"& .MuiInputBase-input": {
										color: "white",
									},
								}}
							/>
							<FormLabel sx={{ color: "white" }}>
								Author of the Book
							</FormLabel>
							<TextField
								value={input.author}
								onChange={handlechange}
								margin="normal"
								fullWidth
								variant="outlined"
								name="author"
								sx={{
									"& .MuiOutlinedInput-root": {
										"& fieldset": {
											borderColor: "white",
										},
										"&:hover fieldset": {
											borderColor: "white",
										},
										"&.Mui-focused fieldset": {
											borderColor: "white",
										},
									},
									"& .MuiInputBase-input": {
										color: "white",
									},
								}}
							/>
							<FormLabel sx={{ color: "white" }}>
								Genre of the Book
							</FormLabel>
							<TextField
								value={input.genre}
								onChange={handlechange}
								margin="normal"
								fullWidth
								variant="outlined"
								name="genre"
								sx={{
									"& .MuiOutlinedInput-root": {
										"& fieldset": {
											borderColor: "white",
										},
										"&:hover fieldset": {
											borderColor: "white",
										},
										"&.Mui-focused fieldset": {
											borderColor: "white",
										},
									},
									"& .MuiInputBase-input": {
										color: "white",
									},
								}}
							/>
							<FormLabel sx={{ color: "white" }}>
								Year of Publish
							</FormLabel>
							<TextField
								value={input.year}
								onChange={handlechange}
								margin="normal"
								fullWidth
								variant="outlined"
								name="year"
								sx={{
									"& .MuiOutlinedInput-root": {
										"& fieldset": {
											borderColor: "white",
										},
										"&:hover fieldset": {
											borderColor: "white",
										},
										"&.Mui-focused fieldset": {
											borderColor: "white",
										},
									},
									"& .MuiInputBase-input": {
										color: "white",
									},
								}}
							/>
							<FormLabel sx={{ color: "white" }}>
								Cover Image of the book
							</FormLabel>
							<TextField
								value={input.image}
								onChange={handlechange}
								margin="normal"
								fullWidth
								variant="outlined"
								name="image"
								sx={{
									"& .MuiOutlinedInput-root": {
										"& fieldset": {
											borderColor: "white",
										},
										"&:hover fieldset": {
											borderColor: "white",
										},
										"&.Mui-focused fieldset": {
											borderColor: "white",
										},
									},
									"& .MuiInputBase-input": {
										color: "white",
									},
								}}
							/>
							<Button
								type="submit"
								margin="normal"
								fullWidth
								variant="contained"
								onClick={handlesubmit}
							>
								Update the book
							</Button>
						</form>
					)}
				</div>
			</div>
		</>
	);
}
