import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {
	Box,
	Grid,
	Image,
	Text,
	Button,
	Heading,
	Flex,
} from "@chakra-ui/react";

import { ShopContext } from "../context/shopContext";

const ProductPage = () => {
	const { handle } = useParams();

	const { fetchProductWithHandle, addItemToCheckout, product } =
		useContext(ShopContext);

	useEffect(() => {
		fetchProductWithHandle(handle);
	}, [fetchProductWithHandle, handle]);

	if (!product.title) return <div>Loading...</div>;

	return (
		<Box p="2em">
			<Grid
				templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
				m="auto"
			>
				<Flex justifyContent="center" alignItems="center">
					<Image src={product.images[0].src} />
				</Flex>
				<Flex
					flexDirection="column"
					justifyContent="center"
					alignItems="flex-start"
					px="2rem"
				>
					<Heading pb="2rem">{product.title}</Heading>
					<Text pb="2rem" fontWeight="bold">
						{product.variants[0].price}
					</Text>
					<Text pb="2rem" color="gray.500">
						{product.description}
					</Text>
					<Button
						onClick={() =>
							addItemToCheckout(product.variants[0].id, 1)
						}
						_hover={{ opacity: "70%" }}
						width="10rem"
						backgroundColor="#ffa8e2"
						color="white"
					>
						Add to Cart
					</Button>
				</Flex>
			</Grid>
		</Box>
	);
};

export default ProductPage;
