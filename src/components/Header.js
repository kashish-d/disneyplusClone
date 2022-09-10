import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { auth, provider, signInWithPopup } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {
    selectUserName,
    selectUserPhoto,
    setSignOutState,
    setUserLoginDetails,
} from '../features/user/userSlice';

function Header() {
    const dispatch = useDispatch();
    const history = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                history('/home');
            }
        });
        /* eslint-disable react-hooks/exhaustive-deps*/
    }, [userName]);

    const handleAuth = (props) => {
        if (!userName) {
            signInWithPopup(auth, provider)
                .then((result) => {
                    console.log(result);
                    setUser(result.user);
                })
                .catch((error) => alert(error.message));
        } else if (userName) {
            signOut(auth)
                .then(() => {
                    dispatch(setSignOutState());
                    history('/');
                })
                .catch((error) => alert(error.message));
        }
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    return (
        <Nav>
            <Logo>
                <img src='/images/logo.svg' alt='Disney+' />
            </Logo>
            {!userName ? (
                <LoginButton onClick={handleAuth}>Login</LoginButton>
            ) : (
                <>
                    <NavMenu>
                        <a href='/home'>
                            <img src='images/home-icon.svg' alt='home-icon' />
                            <span>HOME</span>
                        </a>
                        <a href='/'>
                            <img src='/images/search-icon.svg' alt='SEARCH' />
                            <span>SEARCH</span>
                        </a>
                        <a href='/'>
                            <img
                                src='/images/watchlist-icon.svg'
                                alt='WATCHLIST'
                            />
                            <span>WATCHLIST</span>
                        </a>
                        <a href='/'>
                            <img
                                src='/images/original-icon.svg'
                                alt='ORIGINALS'
                            />
                            <span>ORIGINALS</span>
                        </a>
                        <a href='/'>
                            <img src='/images/movie-icon.svg' alt='MOVIES' />
                            <span>MOVIES</span>
                        </a>
                        <a href='/'>
                            <img src='/images/series-icon.svg' alt='SERIES' />
                            <span>SERIES</span>
                        </a>
                    </NavMenu>
                    <SignOutButton>
                        <UserImg src={userPhoto} alt={userName} />
                        <DropDown>
                            <span onClick={handleAuth}>Sign Out</span>
                        </DropDown>
                    </SignOutButton>
                </>
            )}
        </Nav>
    );
}

const Nav = styled.nav`
    position: fixed;
    inset: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    z-index: 99;
`;

const Logo = styled.div`
    padding: 0;
    width: 80px;
    max-height: 70px;
    display: inline-block;
    img {
        display: block;
        object-fit: cover;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;

        img {
            height: 20px;
            min-width: 20px;
            width: 20px;
            /* margin: auto 0; */
        }

        span {
            color: rgb(249, 249, 249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            position: relative;
            white-space: nowrap;
            /* margin: auto 0; */

            &::before {
                content: '';
                background-color: rgb(249, 249, 249);
                border-radius: 0px 0px 4px 4px;
                position: absolute;
                bottom: -6px;
                height: 2px;
                opacity: 0;
                right: 0px;
                left: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                width: auto;
                visibility: hidden;
            }
        }

        :hover {
            span::before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1;
            }
        }
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const LoginButton = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    cursor: pointer;

    :hover {
        background-color: #f9f9f9;
        color: rgba(0, 0, 0, 1);
        border-color: transparent;
    }
`;

const UserImg = styled.img`
    border-radius: 50%;
    height: 100%;
    width: 100%;
`;

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    background: rgb(19, 19, 19);
    border: 1px solid rgb(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0, 0, 0, 0.5) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 13px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;
`;

const SignOutButton = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    :hover {
        ${DropDown} {
            opacity: 1;
            transition-duration: 1s;
        }
    }
`;

export default Header;
