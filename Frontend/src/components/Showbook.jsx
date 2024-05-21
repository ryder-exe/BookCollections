import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";

export default function Showbook(props) {
	const { name, author, genre, year, image } = props.book;

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
					<Button variant="text" color="primary" className="m-2">
						Update
					</Button>
					<Button variant="text" color="warning" className="m-2">
						Delete
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
