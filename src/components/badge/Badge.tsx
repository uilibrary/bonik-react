import { Span } from "@component/Typography";
import { FC } from "react";
import styled from "styled-components";

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 30px;
  align-items: center;
`;

const StyledBadge = styled.span`
  background: #ffe1e6;
  color: #e94560;
  padding: 1px 5px;
  font-size: 11px;
  border-radius: 6px;
  font-weight: 600;
`;

interface Props {
  title: string | number;
  children: string | number;
  style?: object;
}

const Badge: FC<Props> = ({ title, children, style }) => {
  return (
    <BadgeContainer style={style}>
      {title && (
        <Span style={{ marginRight: "5px" }} className="nav-link">
          {children}
        </Span>
      )}
      <StyledBadge>{title}</StyledBadge>
    </BadgeContainer>
  );
};

export default Badge;
