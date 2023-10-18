import React, { useState } from "react";
import {
	BsBookmark,
	BsBookmarkFill,
	BsEmojiSmile,
	BsThreeDots,
} from "react-icons/bs";
import "./PostCard.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import CommentModal from "../Comment/CommentModal";

const PostCard = () => {
	const [showDropDown, setShowDropDown] = useState(false);
	const [isPostLiked, setIsPostLiked] = useState(false);
	const [isSaved, setIsSaved] = useState(false);

	const handleClick = () => {
		setShowDropDown(!showDropDown);
	};
	const handlePostLike = () => {
		setIsPostLiked(!isPostLiked);
	};
	const handleSavePost = () => {
		setIsSaved(!isSaved);
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

				<div className="flex justify-between items-center w-full px-5 py-4">
					{/* like comment and repost */}
					<div className="flex items-center space-x-2">
						{isPostLiked ? (
							<AiFillHeart
								className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
								onClick={handlePostLike}
							/>
						) : (
							<AiOutlineHeart
								className="text-2xl hover:opacity-50 cursor-pointer"
								onClick={handlePostLike}
							/>
						)}

						<FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
						<RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
					</div>
					{/* bookmark */}
					<div className="cursor-pointer">
						{isSaved ? (
							<BsBookmarkFill
								className="text-xl hover:opacity-50 cursor-pointer"
								onClick={handleSavePost}
							/>
						) : (
							<BsBookmark
								className="text-xl hover:opacity-50 cursor-pointer"
								onClick={handleSavePost}
							/>
						)}
					</div>
				</div>

				<div className="w-full py-2 px-5">
					<p>10 likes</p>
					<p className="opacity-50 py-2 cursor-pointer">
						view all 10 comments
					</p>
				</div>

				<div className="border border-t w-full">
					<div className="flex w-full items-center px-5">
						<BsEmojiSmile />
						<input
							className="commentInput"
							type="text"
							placeholder="Add a comment..."
						/>
					</div>
				</div>
			</div>

			<CommentModal />
		</div>
	);
};

export default PostCard;
