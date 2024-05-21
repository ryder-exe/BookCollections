import { Tab } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import logo from "../assets/logo.jpeg";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Navbar() {
	const [value, setvalue] = useState(0);
	return (
		<>
			<div className="w-[100%] h-[8vh] bg-white/10 absolute top-0 flex justify-between items-center z-20">
				<div className="flex justify-center items-center pl-5">
					<Avatar
						alt="Remy Sharp"
						src={logo}
						sx={{ width: 40, height: 40 }}
					/>
					<div className="pl-5 text-xl xl:block hidden uppercase text-white">
						Claw Enterprises
					</div>
				</div>
				<div className="">
					<Tabs
						value={value}
						textColor="primary"
						indicatorColor="primary"
						sx={{ ml: "auto" }}
						onChange={(e, val) => setvalue(val)}
					>
						<Tab
							label="Book List"
							sx={{ color: "white" }}
							LinkComponent={Link}
							to="/"
						></Tab>
						<Tab
							label="Add Book"
							sx={{ color: "white" }}
							LinkComponent={Link}
							to="/add"
						></Tab>
					</Tabs>
				</div>
			</div>
		</>
	);
}
