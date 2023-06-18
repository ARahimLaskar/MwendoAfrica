import { Box, Divider, Text, Link, HStack, Stack } from "@chakra-ui/react";
import MwendoLogo from "../Images/logo.jpeg";

import MwendoLogo2 from "../Images/logo2.png";
function Footer() {
  const links = {
    quickLinks: [
      { text: "Features", href: "#" },
      {
        text: "Pricing",
        href: "#",
      },
      { text: "Case Studies", href: "#" },
      {
        text: "Reviews",
        href: "#",
      },
      { text: "Updates", href: "#" },
    ],
    supportLinks: [
      { text: "Getting Started", href: "#" },
      {
        text: "Help Center",
        href: "#",
      },
      {
        text: "Server status",
        href: "#",
      },
      {
        text: "Report a bug",
        href: "#",
      },
      {
        text: "Chat Support",
        href: "#",
      },
    ],
    companyLinks: [
      { text: "About", href: "#" },
      {
        text: "Contact Us",
        href: "#",
      },
      { text: "Careers", href: "#" },
      {
        text: "Culture",
        href: "#",
      },
      { text: "Blog", href: "#" },
    ],
    socialLinks: [
      { text: "Facebook", href: "#" },
      {
        text: "Twitter",
        href: "#",
      },
      { text: "Instagram", href: "#" },
      {
        text: "Linkedin",
        href: "#",
      },
      { text: "Youtube", href: "#" },
    ],
  };
  return (
    <>
      <Stack marginTop="100px">
        <HStack
          flexDirection={["column", "row"]}
          justifyContent={["center", "space-around"]}
          bg="#FFFFFF"
          py="90px"
          textColor="white"
          mb="-20px"
        >
          <Box
            flexDirection="column"
            display="flex"
            justifyContent="space-between"
            alignItems={{ base: "center", lg: "start" }}
            mb="1rem"
            order={[2, 1]}
          >
            <Box display="flex" mb="1.5rem" mt="-60px">
              <Link href="#" display="inline-flex" fontSize="2rem">
                <Box
                  as="img"
                  w={50}
                  h={50}
                  mt="20px"
                  src={MwendoLogo}
                  alt="Koo"
                />
                <Box as="img" w={200} h={70} src={MwendoLogo2} alt="Koo" />
              </Link>
            </Box>
          </Box>

          <Box
            display="flex"
            gap="50px"
            textAlign="left"
            order={[1, 2]}
            mb={["20px", null]}
            pl={"-90px"}
          >
            <Box ml={-210} mr={30}>
              <Text
                fontSize="18px"
                fontWeight="bold"
                mb={2}
                color="rgb(24,20,116)"
              >
                Products
              </Text>
              <Divider mb={2} />
              {links.quickLinks.map((link) => (
                <Link href={link.href} key={link.text}>
                  <Text fontSize="14px" color="gray">
                    {link.text}
                  </Text>
                </Link>
              ))}
            </Box>
            <Box mr={30}>
              <Text fontSize="18px" fontWeight="bold" mb={2} color="gray">
                Company
              </Text>
              <Divider mb={2} />
              {links.companyLinks.map((link) => (
                <Link href={link.href} key={link.text}>
                  <Text fontSize="14px" color="gray">
                    {link.text}
                  </Text>
                </Link>
              ))}
            </Box>
            <Box mr={30}>
              <Text fontSize="18px" fontWeight="bold" mb={2} color="gray">
                Support
              </Text>
              <Divider mb={2} />
              {links.supportLinks.map((link) => (
                <Link href={link.href} key={link.text}>
                  <Text fontSize="14px" color="gray">
                    {link.text}
                  </Text>
                </Link>
              ))}
            </Box>
            <Box mr={30}>
              <Text
                fontSize="18px"
                fontWeight="bold"
                mb={2}
                color="rgb(24,20,116)"
              >
                Follow Us
              </Text>
              <Divider mb={2} />
              {links.socialLinks.map((link) => (
                <Link href={link.href} key={link.text}>
                  <Text fontSize="14px" color="gray">
                    {link.text}
                  </Text>
                </Link>
              ))}
            </Box>
          </Box>
        </HStack>

        <HStack
          pb="1rem"
          justifyContent="space-around"
          flexDirection={["column", "row"]}
        >
          <Box
            flexDirection="column"
            justifyContent="space-between"
            textAlign={["center", "left"]}
            py="0.5rem"
          ></Box>
        </HStack>
      </Stack>
    </>
  );
}

export default Footer;
