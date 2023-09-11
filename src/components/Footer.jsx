import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faTwitter,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<footer className="w-full h-fit bg-white flex flex-col justify-center items-center text-gray-900 gap-7">
			<div className="flex justify-evenly items-center w-1/2 md:w-[30%] mt-40 text-2xl">
				<FontAwesomeIcon icon={faFacebook} />
				<FontAwesomeIcon icon={faInstagram} />
				<FontAwesomeIcon icon={faTwitter} />
				<FontAwesomeIcon icon={faYoutube} />
			</div>
			<div className="w-full md:w-3/5 flex justify-evenly items-center">
				<Link>Conditions of Use</Link>
				<Link>Privacys & Policies</Link>
				<Link>Press Room</Link>
			</div>
			<div className="pb-40">
				&copy; 2021 MovieBox by Andriana Eka Prayudha
			</div>
		</footer>
	);
};

export default Footer;
