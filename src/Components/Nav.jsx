import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import styles from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Image,
  Grid,
  Text,
  GridItem,
  UnorderedList,
  ListItem,
  Spacer,
  Button,
  useDisclosure,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FcLike, FcMenu } from "react-icons/fc";
import Cart from "./Cart";
import MenuDrower from "./MenuDrower";
import { useDispatch } from "react-redux";
import { ADD_USER_LOGIN } from "../Redux/actionType";
function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
    useAuth0();
  const [cartClick, setCartClick] = useState(false);
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const displayMenu = useBreakpointValue({ md: "block", lg: "none" });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: ADD_USER_LOGIN,
      payload: isAuthenticated,
    });
  }, [isAuthenticated]);
  return (
    <>
      <nav className="main_nav">
        <Box w="80%" m="0 auto">
          <Grid
            templateColumns="200px 1fr"
            justifyContent="space-around"
            alignItems="center"
          >
            <GridItem>
              <Image
                w="100px"
                h="100px"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/99/62/cc/caption.jpg?w=1200&h=-1&s=1"
                alt="Logo"
              />
            </GridItem>
            {displayMenu ? (
              <GridItem>
                <Flex justifyContent="flex-end" gap="30px" alignItems="center">
                  <Link to="/">Home</Link>
                  <Link to="">About</Link>
                  <Link to="/products">Products</Link>
                  <Link>Contact</Link>

                  <Box>
                    <Flex alignItems="center" gap="10px">
                      {isAuthenticated && user && <Button>{user.name}</Button>}

                      {isAuthenticated ? (
                        <Button
                          colorScheme="blue"
                          onClick={() =>
                            logout({ returnTo: window.location.origin })
                          }
                        >
                          Log Out
                        </Button>
                      ) : (
                        <Button
                          colorScheme="blue"
                          onClick={() => loginWithRedirect()}
                        >
                          Log In
                        </Button>
                      )}
                    </Flex>
                  </Box>
                  <FcLike size="30px" onClick={onOpen} />
                </Flex>
              </GridItem>
            ) : (
              <Flex justifyContent="flex-end" gap="20px">
                <Flex alignContent="center" gap="10px">
                  {isAuthenticated && user && (
                    <Button size="xs">{user.name}</Button>
                  )}

                  {isAuthenticated ? (
                    <Button
                      size="xs"
                      colorScheme="blue"
                      onClick={() =>
                        logout({ returnTo: window.location.origin })
                      }
                    >
                      Log Out
                    </Button>
                  ) : (
                    <Button
                      size="xs"
                      colorScheme="blue"
                      onClick={() => loginWithRedirect()}
                    >
                      Log In
                    </Button>
                  )}
                </Flex>

                <Flex gap="10px">
                  <FcLike
                    size="24px"
                    onMouseEnter={() => {
                      setCartClick(true);
                    }}
                    onClick={onOpen}
                  />

                  <FcMenu
                    size="24px"
                    onMouseEnter={() => {
                      setCartClick(false);
                    }}
                    onClick={onOpen}
                  />
                </Flex>
              </Flex>
            )}
          </Grid>
        </Box>
        <Divider marginTop="0px" />
      </nav>
      {displayMenu || cartClick ? (
        <Cart isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      ) : (
        <MenuDrower isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      )}
    </>
  );
}

export default Navbar;
