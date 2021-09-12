import React, { useContext } from "react";
import { Flex, Icon, Image, Text } from "@chakra-ui/react";
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
			p="2rem"
		>
			<Icon w={30} h={30} cursor="pointer" fill="white" as={MdMenu} />
			<Image
				src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540"
				w={100}
				h={100}
			/>
			<Icon
				w={30}
				h={30}
				cursor="pointer"
				fill="white"
				as={MdShoppingBasket}
				onClick={() => openCart()}
			/>
		</Flex>
	);
};

export default NavBar;
