import NextImage from "next/image";
import Link from "next/link";
import React from "react";
import Box from "../Box";
import Card from "../Card";
import Typography, { H3, Small, Span } from "../Typography";

export interface FashionCard2Props {}

const FashionCard2: React.FC<FashionCard2Props> = () => {
  return (
    <Link href="/">
      <a>
        <Card
          p="2.5rem"
          boxShadow="border"
          height="100%"
          borderRadius={4}
          hoverEffect
        >
          <NextImage
            width={30}
            height={20}
            layout="responsive"
            objectFit="contain"
            src="/assets/images/products/jacket.png"
            alt="shoes"
          />

          <Box mt="3.5rem">
            <Typography color="text.muted" mb="0.5rem">
              WOMEN'S HANDBAG
            </Typography>

            <H3 mb="0.5rem" fontSize="30px" lineHeight="1.3">
              <Span color="primary.main" fontSize="30px">
                Minimalist
              </Span>{" "}
              Genuine Cotton Jacket
            </H3>
            <Typography color="text.muted" mb="1rem">
              Handcrafted from genuine Italian leather. One inner compartment
              with black satin lining
            </Typography>

            <Small
              fontWeight="700"
              borderBottom="2px solid"
              borderColor="primary.main"
            >
              SHOP NOW
            </Small>
          </Box>
        </Card>
      </a>
    </Link>
  );
};

export default FashionCard2;
