import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Showbook(props) {
	const { _id, name, author, genre, year, image } = props.book;
	const navigate = useNavigate();
	const deleteHandler = () => {
		axios
			.delete(`http://localhost:5000/books/${_id}`)
			.then((res) => res.data)
			.then(() => navigate("/"))
			.then(() => location.reload());
	};
	return (
		<Card className="w-full md:w-1/2 xl:w-1/4 mt-1" sx={{ width: "100%" }}>
			<CardMedia
				component="img"
				image={image}
				alt={name}
				className="h-60"
			/>
			<CardContent>
				<Typography variant="h6" component="div">
					{name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					By {author}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{genre}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{year}
				</Typography>
				<div className="mt-3">
					<Button
						variant="text"
						color="primary"
						className="m-2"
						LinkComponent={Link}
						to={`/${_id}`}
					>
						Update
					</Button>
					<Button
						variant="text"
						color="warning"
						className="m-2"
						onClick={deleteHandler}
					>
						Delete
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
