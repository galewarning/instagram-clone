import React from "react";
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

const CommentModal = ({ onClose, isOpen }) => {
	return (
		<div>
			<Modal size={"4xl"} onClose={onClose} isOpen={true} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalBody>
						<div className="flex h-[75vh]">
							<div className="w-[45%] flex flex-col justify-center">
								<img
									className="max-h-full w-full"
									src="https://cdn.pixabay.com/photo/2023/04/03/17/46/coffee-7897414_1280.jpg"
									alt=""
								/>
							</div>
							<div className="w-[55%] pl-10">
								<div className="flex justify-between items-center py-5">
									<div className="flex items-center">
										<div>
											<img
												className="w-9 h-9 rounded-full"
												src="https://cdn.pixabay.com/photo/2023/09/01/05/12/moon-8226250_1280.jpg"
												alt=""
											/>
										</div>
										<div className="ml-2">
											<p>username</p>
										</div>
									</div>
									<BsThreeDots />
								</div>
							</div>
						</div>
					</ModalBody>
				</ModalContent>
			</Modal>
		</div>
	);
};

export default CommentModal;
