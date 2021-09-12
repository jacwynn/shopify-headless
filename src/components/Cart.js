import React, { useContext } from "react";
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
	Link,
} from "@chakra-ui/react";

import { CloseIcon } from "@chakra-ui/icons";

import { ShopContext } from "../context/shopContext";

const Cart = () => {
	const { isCartOpen, closeCart, checkout, removeLineItem } =
		useContext(ShopContext);
	return (
		<>
			<Drawer
				isOpen={isCartOpen}
				placement="right"
				onClose={closeCart}
				size="sm"
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Your Shopping Cart</DrawerHeader>

					<DrawerBody>
						{checkout.lineItems?.length ? (
							checkout.lineItems.map(item => {
								return (
									<Grid
										templateColumns="repeat(4, 1fr)"
										gap={1}
										key={item.id}
									>
										<Flex
											alignItems="center"
											justifyContent="center"
										>
											<CloseIcon
												cursor="pointer"
												onClick={() =>
													removeLineItem(item.id)
												}
											/>
										</Flex>
										<Flex
											alignItems="center"
											justifyContent="center"
										>
											<Image
												src={item.variant.image.src}
											/>
										</Flex>
										<Flex
											alignItems="center"
											justifyContent="center"
										>
											<Text>{item.title}</Text>
										</Flex>
										<Flex
											alignItems="center"
											justifyContent="center"
										>
											<Text>{item.variant.price}</Text>
										</Flex>
									</Grid>
								);
							})
						) : (
							<Box h="100%" w="100%" textAlign="center">
								<Text
									h="100%"
									display="flex"
									flexDir="column"
									alignItems="center"
									justifyContent="center"
								>
									Empty Cart. Add something!
								</Text>
							</Box>
						)}
					</DrawerBody>

					{checkout.lineItems?.length ? (
						<DrawerFooter>
							<Button w="100%">
								<Link href={checkout.webUrl}>Checkout</Link>
							</Button>
						</DrawerFooter>
					) : null}
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default Cart;
