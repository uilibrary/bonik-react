import NextImage from "next/image";
import Link from "next/link";
import React from "react";
import Box from "../Box";
import Card from "../Card";
import Typography, { H3, Small, Span } from "../Typography";

export interface FashionCard3Props {}

const FashionCard3: React.FC<FashionCard3Props> = () => {
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
          <Box mb="3.5rem">
            <Typography color="text.muted" mb="0.5rem">
              MEN’S SHOE
            </Typography>

            <H3 mb="0.5rem" fontSize="30px" lineHeight="1.3">
              <Span color="primary.main" fontSize="30px">
                Stylish
              </Span>{" "}
              Genuine Comfy T-shirts
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

          <NextImage
            src="/assets/images/products/t-shirt-1.png"
            width={30}
            height={20}
            layout="responsive"
            objectFit="contain"
            alt="model"
          />
          {/* <Grid
              container
              spacing={0}
              flexWrap="wrap-reverse"
              containerHeight="100%"
            >
              <Grid item sm={6} xs={12}>
                <Box p="1.5rem" height="100%">
                  <Box height="100%" minHeight="190px" position="relative">
                    <NextImage
                      src="/assets/images/products/t-shirt-1.png"
                      width={30}
                      height={20}
                      layout="responsive"
                      objectFit="contain"
                      alt="model"
                    />
                  </Box>
                </Box>
              </Grid>

              <Grid item sm={6} xs={12}>
                
              </Grid>
            </Grid> */}
        </Card>
      </a>
    </Link>
  );
};

export default FashionCard3;
