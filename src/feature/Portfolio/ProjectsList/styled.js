import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  margin-top: 24px;
  padding: 0;
  justify-items: center;
  justify-content: center;
  align-items: stretch;
`;

export const Item = styled.li`
background-color: ${({ theme }) => theme.colors.portfolioBackground}
border-radius: 4px;
border: 6px solid ${({ theme }) => theme.colors.portfolioBorder};
box-shadow: 0px 16px 58px 0px #090A3308;
box-shadow: 0px -2px 50px 0px #090A3305;

display: flex;
flex-direction: column;
text-align: left;
max-width: 592px;
gap: 24px;
padding: 56px;
height: 100%;
flex-grow: 1;
`;

export const Header = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.21;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.portfolioHeader};
  margin: 0;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.21;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.portfolioParagraph};
  text-align: justify;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 8px;
`;

export const Paragraph = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.21;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.portfolioParagraph};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.portfolioLink};
  display: inline;
  word-break: break-all;
  text-decoration: none;
  border-bottom: 1px solid ${({theme})=>theme.colors.portfolioLinkBorder}
`;
