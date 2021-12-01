import Icon from "@component/icon/Icon";
import NextImage from "next/image";
import React from "react";
import styled from "styled-components";
import FlexBox from "../FlexBox";
import Typography from "../Typography";

const StyledImage = styled(NextImage)`
  border-radius: 5px;
`;

export interface MobileCategoryImageBoxProps {
  title: string;
  imgUrl?: string;
  icon?: string;
}

const MobileCategoryImageBox: React.FC<MobileCategoryImageBoxProps> = ({
  title,
  imgUrl,
  icon,
}) => {
  return (
    <FlexBox flexDirection="column" alignItems="center" justifyContent="center">
      {imgUrl ? (
        <StyledImage src={imgUrl} objectFit="cover" />
      ) : (
        icon && <Icon size="48px">{icon}</Icon>
      )}
      <Typography
        className="ellipsis"
        textAlign="center"
        fontSize="11px"
        lineHeight="1"
        mt="0.5rem"
      >
        {title}
      </Typography>
    </FlexBox>
  );
};

export default MobileCategoryImageBox;
