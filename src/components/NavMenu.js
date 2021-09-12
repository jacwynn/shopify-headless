import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Box,
	Button,
	Flex,
	Grid,
	Image,
	Text,
	VStack,
} from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";

const NavMenu = () => {
	const { isMenuOpen, closeMenu } = useContext(ShopContext);

	return (
		<Drawer
			isOpen={isMenuOpen}
			onClose={closeMenu}
			placement="left"
			size="sm"
		>
			<DrawerOverlay>
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Menu</DrawerHeader>
					<DrawerBody>
						<VStack p="2rem">
							<Link to="/">About</Link>
							<Link to="/">Learn More</Link>
							<Link to="/">Sustainability</Link>
						</VStack>
					</DrawerBody>
					<DrawerFooter textAlign="center">
						<Text>Copyright www.wynnsolutions.co</Text>
					</DrawerFooter>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	);
};

export default NavMenu;
