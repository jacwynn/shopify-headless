import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image } from "@chakra-ui/react";

import { ShopContext } from "../context/shopContext";
import ImageWithText from "../components/ImageWithText";
import RichText from "../components/RichText";

const Home = () => {
	const { fetchAllProducts, products } = useContext(ShopContext);

	useEffect(() => {
		fetchAllProducts();
	}, [fetchAllProducts]);

	if (!products) return <div>Loading...</div>;

	return (
		<Box>
			<RichText
				heading="Relaxation you've been waiting on..."
				text="Our Bath Bombs guarantee a fun, relaxing, and colorful night"
			/>
			<Grid templateColumns="repeat(3, 1fr)">
				{products.map(product => {
					return (
						<Link
							to={`/products/${product.handle}`}
							key={product.id}
						>
							<Box
								_hover={{ opacity: "80%" }}
								textAlign="center"
								position="relative"
							>
								<Image src={product.images[0].src} />
								<Text
									position="absolute"
									bottom="15%"
									w="100%"
									fontWeight="bold"
								>
									{product.title}
								</Text>
								<Text
									position="absolute"
									bottom="5%"
									w="100%"
									color="gray.500"
								>
									${product.variants[0].price}
								</Text>
							</Box>
						</Link>
					);
				})}
			</Grid>
			<RichText heading="Treat Yourself!" />
			<ImageWithText
				reverse
				image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758"
				heading="Example 1"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at eleifend nisi. Aliquam posuere lorem ac ex suscipit mattis. Sed pharetra, sem vel efficitur pretium, urna urna gravida augue, at bibendum ante sapien eu orci."
			/>
			<ImageWithText
				image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758"
				heading="Example 2"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at eleifend nisi. Aliquam posuere lorem ac ex suscipit mattis. Sed pharetra, sem vel efficitur pretium, urna urna gravida augue, at bibendum ante sapien eu orci."
			/>
			<ImageWithText
				reverse
				image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758"
				heading="Example 3"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at eleifend nisi. Aliquam posuere lorem ac ex suscipit mattis. Sed pharetra, sem vel efficitur pretium, urna urna gravida augue, at bibendum ante sapien eu orci."
			/>
		</Box>
	);
};

export default Home;
