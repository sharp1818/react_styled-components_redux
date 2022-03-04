import styled from 'styled-components';
import COLORS from '../../styles/colors.jsx' 
//Styles for Nav
export const NavShadow = styled.header`
    box-shadow: 0px 1px 8px 0px rgb(224, 199, 210);
    background-color: ${COLORS.navBar_background_color};
`
export const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 14px 30px;
    max-width: 1220px;
    margin: 0 auto;
`;
export const LogoMenuLayout = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width: 920px){
        flex-direction: row-reverse;
        gap: 16px;
    }
`
export const LogoSvg = styled.div`
    @media screen and (max-width: 920px){
        width: 72px;
        height: 60px;
    }
`
export const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`
export const DeliveryContainer =styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
`
export const Info = styled.div`
    :nth-child(1){
        color: ${COLORS.navBar_letter_color};
    }
    :nth-child(2){
        font-size: 16px;
        font-weight: bold;
        color: ${COLORS.navBar_letter_color};
    }
    @media screen and (max-width: 920px){
        display: none;
    }
`
//Styles for NavMobile
export const ContainerMobileMenu = styled.div`
    background-color: ${COLORS.navBar_background_color};
    position: absolute;
    top: 0px;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 100vh;
    transition: 0.5s all ease;
    padding-top: 140px;
`
export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
export const OptionMenu = styled.div`
    font-size: 20px;
    color: ${COLORS.navBar_letter_color};
    display: flex;
    align-items: center;
    gap: 5px;
`

//Styles for NavDesktop
export const ContainerNavMenu = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    padding-left: 80px;
`
export const OptionNavMenu = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: ${COLORS.navBar_letter_color};
    cursor: pointer;
`