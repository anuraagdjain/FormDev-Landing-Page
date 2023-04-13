import {
  Flex,
  Box,
  Text,
  Container,
  IconButton,
  Menu,
  MenuList,
  MenuItem,
  Link,
  Divider,
  Button,
  MenuButton,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Image,
  SimpleGrid,
  Heading
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Navbar = () => {
  const [isV1MenuOpen, setIsV1MenuOpen] = useState(false);
  const [v1MenuTimeout, setV1MenuTimeout] = useState<
    NodeJS.Timeout | undefined
  >(undefined);
  const handleV1MenuMouseEnter = () => {
    clearTimeout(v1MenuTimeout);
    setIsV1MenuOpen(true);
  };

  const handleV1MenuMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsV1MenuOpen(false);
    }, 300);
    setV1MenuTimeout(timeout);
  };

  return (
    <Container maxW="container.xl">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="0.75rem"
        bg="transparent"
        color="white"
      >
        {/* Desktop Navbar left content */}
        <Flex align="center" mr={5}>
          <Link
            href="#"
            textDecoration={"none"}
            _hover={{ textDecoration: "none", color: "blue.200" }}
          >
            <Text fontSize="md" fontWeight="bold">
              FormDev
            </Text>
          </Link>
          <Box display={{ base: "none", md: "flex" }} ml={3}>
            <InputGroup
              size="sm"
              variant="outline"
              width="140px"
              css={{
                "&:hover": {
                  borderColor: "blue.200"
                }
              }}
            >
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.600" />}
              />
              <Input
                placeholder="Search"
                bg="gray.900"
                color="gray.600"
                border="transparent"
                borderRadius="10px"
              />
              <InputRightElement width="30px" bg="transparent" mr={1}>
                <Button
                  variant="ghost"
                  size="sm"
                  fontWeight="normal"
                  color="gray.600"
                  px={2}
                  py={1}
                  pointerEvents="none"
                  fontSize="sm"
                >
                  ⌘K
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Flex>
        {/* End Desktop Navbar left content */}

        {/* Desktop Navbar right content */}
        <Box
          display={{ base: "none", md: "flex" }}
          alignItems="center"
          justifyContent="flex-end"
          flexGrow={1}
        >
          <Box mr={2}>
            <Button
              colorScheme="white"
              fontSize="sm"
              variant="ghost"
              _hover={{ color: "blue.200", bg: "transparent" }}
            >
              Introduction
            </Button>
          </Box>
          <Box mr={2}>
            <Button
              colorScheme="white"
              fontSize="sm"
              variant="ghost"
              _hover={{ color: "blue.200", bg: "transparent" }}
            >
              Guides
            </Button>
          </Box>
          <Box mr={2}>
            <Button
              colorScheme="white"
              fontSize="sm"
              variant="ghost"
              _hover={{ color: "blue.200", bg: "transparent" }}
            >
              References
            </Button>
          </Box>
          <Box mr={2}>
            <Menu isOpen={isV1MenuOpen}>
              <MenuButton
                as={Button}
                fontSize="sm"
                variant="ghost"
                _hover={{ color: "gray.400", bg: "transparent" }}
                rightIcon={<ChevronDownIcon />}
                onMouseEnter={handleV1MenuMouseEnter}
                onMouseLeave={handleV1MenuMouseLeave}
              >
                v1
              </MenuButton>
              <MenuList
                onMouseEnter={handleV1MenuMouseEnter}
                onMouseLeave={handleV1MenuMouseLeave}
                bg="gray.800"
                borderColor="gray.800"
              >
                <MenuItem
                  bg="gray.800"
                  as="button"
                  _hover={{ color: "blue.200", bg: "transparent" }}
                >
                  Action 1
                </MenuItem>
                <MenuItem
                  bg="gray.800"
                  as="button"
                  _hover={{ color: "blue.200", bg: "transparent" }}
                >
                  Action 2
                </MenuItem>
                <MenuItem
                  bg="gray.800"
                  as="button"
                  _hover={{ color: "blue.200", bg: "transparent" }}
                >
                  Action 3
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
        {/* End of Desktop Navbar right content */}

        {/* Mobile menu navbar */}
        <Box display={{ base: "block", md: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              border="none"
              _hover={{ bg: "gray.700" }}
            />
            <MenuList bg="gray.700" color="white" border="none">
              <MenuItem
                bg="gray.700"
                color="white"
                _hover={{ color: "blue.200" }}
              >
                <Link href="/">Home</Link>
              </MenuItem>
              <MenuItem
                bg="gray.700"
                color="white"
                _hover={{ color: "blue.200" }}
              >
                <Link href="/">Introduction</Link>
              </MenuItem>
              <MenuItem
                bg="gray.700"
                color="white"
                _hover={{ color: "blue.200" }}
              >
                <Link href="/">Guides</Link>
              </MenuItem>
              <MenuItem
                bg="gray.700"
                color="white"
                _hover={{ color: "blue.200" }}
              >
                <Link href="/">References</Link>
              </MenuItem>
              <Divider borderColor="gray.600" />
              <MenuItem
                bg="gray.700"
                color="white"
                _hover={{ color: "blue.200" }}
              >
                <Link href="/">V1</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        {/* End of mobile menu navbar */}
      </Flex>
    </Container>
  );
};

const HeroSection = () => {
  return (
    <Container maxW="container.xl">
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        py={20}
        alignItems="center"
        justifyContent="center"
      >
        <Flex direction="column" maxW="500px">
          <Text fontSize="6xl" fontWeight="bold">
            <Box
              as="span"
              bgGradient="linear(to-r, cyan.200, blue.600)"
              bgClip="text"
              whiteSpace="pre-line"
            >
              FormDev <br />{" "}
            </Box>
            <Text color="gray.100">Field-First React</Text>
            <Text color="gray.100">Form Validation</Text>
          </Text>

          <Text fontSize="lg" mt={6} color="gray.500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            risus porta, tincidunt turpis sed, accumsan odio. Donec auctor ante
            eget ligula egestas lobortis.
          </Text>
          <Text fontSize="lg" mt={4} color="gray.500">
            Nunc laoreet, odio at auctor tincidunt, magna ipsum ultricies dolor,
            ut rutrum ipsum lacus non lectus.
          </Text>
          <Flex direction={{ base: "column", md: "row" }} mt={6}>
            <Button
              colorScheme="blue"
              bgGradient="linear(to-r, cyan.200, blue.600)"
              borderRadius="14px"
              mr={{ base: 0, md: 4 }}
              mb={{ base: 4, md: 0 }}
            >
              Get started
            </Button>
            <Button
              colorScheme="whiteAlpha"
              variant="outline"
              borderRadius="14px"
              mr={{ base: 0, md: 4 }}
              mb={{ base: 4, md: 0 }}
            >
              Comparison
            </Button>
            <Button
              colorScheme="whiteAlpha"
              variant="outline"
              borderRadius="14px"
              mr={{ base: 0, md: 4 }}
              mb={{ base: 4, md: 0 }}
            >
              View on ProductHunt
            </Button>
          </Flex>
        </Flex>

        <Flex
          flex="1"
          alignItems={{ base: "initial", md: "center" }}
          justifyContent="center"
          p={20}
        >
          <Box
            backgroundImage="linear-gradient( -45deg, cyan.300 30%, blue.600)"
            boxSize="320px"
            position="absolute"
            borderRadius="50%"
            zIndex="1"
            filter="blur(30px)"
          />
          <Image
            zIndex="2"
            src="https://img.logoipsum.com/293.svg"
            loading="lazy"
            alt="Hero image"
            boxSize={{ base: "320px", md: "320px" }}
            mt={{ base: "auto", md: "initial" }}
          />
        </Flex>
      </Flex>
    </Container>
  );
};

const FeatureSection = () => {
  return (
    <Container maxW="container.xl" py={20}>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={10}
        alignItems="center"
        justifyItems="center"
      >
        <Box maxW="sm" bg="gray.800" overflow="hidden" textAlign="center" p={6}>
          <Box fontSize="6xl" mb={2}>
            🚀
          </Box>
          <Heading
            as="h2"
            fontSize="2xl"
            fontWeight="bold"
            mb={4}
            color="gray.100"
          >
            Launch your project
          </Heading>
          <Text fontSize="lg" color="gray.100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            risus porta, tincidunt turpis sed, accumsan odio. Donec auctor ante
            eget ligula egestas lobortis.
          </Text>
        </Box>
        <Box maxW="sm" bg="gray.800" overflow="hidden" textAlign="center" p={6}>
          <Box fontSize="6xl" mb={2}>
            🎨
          </Box>
          <Heading
            as="h2"
            fontSize="2xl"
            fontWeight="bold"
            mb={4}
            color="gray.100"
          >
            Design your brand
          </Heading>
          <Text fontSize="lg" color="gray.100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            risus porta, tincidunt turpis sed, accumsan odio. Donec auctor ante
            eget ligula egestas lobortis.
          </Text>
        </Box>
        <Box maxW="sm" bg="gray.800" overflow="hidden" textAlign="center" p={6}>
          <Box fontSize="6xl" mb={2}>
            🌟
          </Box>
          <Heading
            as="h2"
            fontSize="2xl"
            fontWeight="bold"
            mb={4}
            color="gray.100"
          >
            Shine like a star
          </Heading>
          <Text fontSize="lg" color="gray.100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            risus porta, tincidunt turpis sed, accumsan odio. Donec auctor ante
            eget ligula egestas lobortis.
          </Text>
        </Box>
      </SimpleGrid>
      <Divider mt={10} width="20%" mx="auto" borderColor="gray.600" />
    </Container>
  );
};

const PhotoSection = () => {
  const photos = [
    "https://randomuser.me/api/portraits/lego/0.jpg",
    "https://randomuser.me/api/portraits/lego/1.jpg",
    "https://randomuser.me/api/portraits/lego/2.jpg",
    "https://randomuser.me/api/portraits/lego/3.jpg",
    "https://randomuser.me/api/portraits/lego/4.jpg"
  ];

  return (
    <Box flexDirection="column" justifyContent="center">
      <Text color="gray.200" textAlign="center" fontSize="lg" fontWeight="bold">
        Contributors
      </Text>
      <Box display="flex" justifyContent="center" mt={4} mb={10}>
        {photos.map((photo, index) => (
          <Box
            key={index}
            rounded="full"
            overflow="hidden"
            mx={1}
            _hover={{ boxShadow: "0 0 5px #999" }}
          >
            <Image src={photo} alt="User photo" key={index} boxSize="60px" />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <PhotoSection />
    </>
  );
};
