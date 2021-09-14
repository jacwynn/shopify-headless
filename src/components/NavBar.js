import React, { useContext } from "react";
import { Flex, Icon, Image, Box, Badge } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdMenu, MdShoppingBasket } from "react-icons/md";

import { ShopContext } from "../context/shopContext";

const NavBar = () => {
	//destructing our functions for shop context
	const { openCart, openMenu, checkout } = useContext(ShopContext);

	return (
		<Flex
			backgroundColor="#ffa8e2"
			flexDirection="row"
			justifyContent="space-between"
			alignItems="center"
			p="2rem"
		>
			<Icon
				w={30}
				h={30}
				cursor="pointer"
				fill="white"
				as={MdMenu}
				onClick={() => openMenu()}
			/>
			<Link to="/">
				<Image
					src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540"
					w={100}
					h={100}
				/>
			</Link>
			<Box>
				<Icon
					w={30}
					h={30}
					cursor="pointer"
					fill="white"
					as={MdShoppingBasket}
					onClick={() => openCart()}
				/>
				<Badge backgroundColor="#ff3880" borderRadius="50%">
					{checkout.lineItems?.length}
				</Badge>
			</Box>
		</Flex>
	);
};

export default NavBar;
