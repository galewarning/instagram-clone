import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import "./PostCard.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";

const PostCard = () => {
	const [showDropDown, setShowDropDown] = useState(false);
	const [isPostLiked, setIsPostLiked] = useState(false);

	const handleClick = () => {
		setShowDropDown(!showDropDown);
	};
	const handlePostLike = () => {
		setIsPostLiked(!isPostLiked);
	};

	return (
		<div>
			<div className="border rounded-md w-full">
				<div className="flex justify-between items-center w-full py-4 px-5">
					{/* user metadata */}
					<div className="flex items-center">
						<img
							className="h-12 w-12 rounded-full"
							src="https://cdn.pixabay.com/photo/2023/08/05/15/42/panda-8171354_1280.jpg"
							alt=""
						/>
						<div className="pl-2">
							<p className="font-semibold text-sm">username</p>
							<p className="font-thin text-sm">location</p>
						</div>
					</div>

					{/* dropdown dots and delete button */}
					<div className="dropdown">
						<BsThreeDots className="dots" onClick={handleClick} />
						<div className="dropdown-content">
							{showDropDown && (
								<p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">
									Delete
								</p>
							)}
						</div>
					</div>
				</div>

				{/* image part for posts */}
				<div className="w-full">
					<img
						className="w-full"
						src="https://cdn.pixabay.com/photo/2023/08/07/21/37/mountains-8175997_1280.png"
						alt=""
					/>
				</div>

				<div>
					<div>
						{/* like comment and repost */}
						{isPostLiked ? (
							<AiFillHeart
								className="text=xl hover:opacity-50 cursor-pointer"
								onClick={handlePostLike}
							/>
						) : (
							<AiOutlineHeart
								className="text=xl hover:opacity-50 cursor-pointer"
								onClick={handlePostLike}
							/>
						)}

						<FaRegComment className="text=xl hover:opacity-50 cursor-pointer" />
						<RiSendPlaneLine className="text=xl hover:opacity-50 cursor-pointer" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
