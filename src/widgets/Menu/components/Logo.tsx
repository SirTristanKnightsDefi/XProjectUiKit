import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../../components/Flex/Flex";
import { HamburgerIcon, HamburgerCloseIcon } from "../icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
  banner?: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 32px; // update with new banner
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href, banner }) => {
  const isAbsoluteUrl = href.startsWith("http");
  if(isDark){
    banner = 'https://assets.coingecko.com/coins/images/31144/standard/X.png';
  } else {
    banner = 'https://assets.coingecko.com/coins/images/31144/standard/X.png';
  }

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="X Project">
          <img
            src="https://assets.coingecko.com/coins/images/31144/standard/X.png"
            alt="X Project Logo"
            className="mobile-icon"
          />
          <img
            src={banner}
            alt="X Project Logo"
            className="desktop-icon"
          />
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="X Project">
          <img
            src="https://assets.coingecko.com/coins/images/31144/standard/X.png"
            alt="X Project Logo"
            className="mobile-icon"
          />
          <img
            src={banner}
            alt="CX Project Logo"
            className="desktop-icon"
          />
        </StyledLink>
      )}
    </Flex>
  );
};

export default Logo;
