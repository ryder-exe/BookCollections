import axios from "axios";
import { useEffect, useState } from "react";
import Showbook from "./Showbook";
import Pagination from "@mui/material/Pagination";

const URL = "http://localhost:5000/books";

const fetchData = async () => {
	return await axios.get(URL).then((res) => res.data);
};

export default function Home() {
	const [books, setBooks] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(5);

	useEffect(() => {
		fetchData().then((data) => setBooks(data.books));
	}, []);

	const handleChangePage = (event, newPage) => {
		setCurrentPage(newPage);
	};

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = books.slice(indexOfFirstItem, indexOfLastItem);

	return (
		<div className="w-[100%] h-[100vh] bg-black flex justify-center items-center">
			<div className="w-[50%] h-[50vh] bg-blue-600 xl:blur-[500px] blur-[200px]"></div>
			<div className="w-[100%] h-[100vh] absolute top-0 flex flex-col items-center">
				<div className="w-[100%] xl:h-[82vh] xl:bg-transparent bg-black relative top-[8vh] flex flex-wrap gap-4 justify-center items-center">
					{currentItems.map((book) => (
						<div key={book._id} className="flex flex-col">
							<Showbook book={book} />
						</div>
					))}
				</div>
				<div className="relative xl:bottom[1vh] xl:top-[0vh] xl:bg-transparent top-[7vh] mt-1 w-[100%] h-[5vh] bg-black flex justify-center">
					<Pagination
						count={Math.ceil(books.length / itemsPerPage)}
						page={currentPage}
						onChange={handleChangePage}
						color="primary"
						shape="rounded"
						sx={{
							"& .MuiPaginationItem-root": {
								color: "white",
							},
							"& .Mui-selected": {
								color: "primary",
							},
							"& .MuiSvgIcon-root": {
								fill: "white",
							},
						}}
					/>
				</div>
			</div>
		</div>
	);
}
