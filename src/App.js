import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Spacer,
  Text,
  VStack,
  useMediaQuery,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Stack,
} from "@chakra-ui/react";
import heroBackground from "./assets/hero-background.png";
import heroRectangle from "./assets/hero-rectangle.png";
import footerRectangle from "./assets/footer-rectangle.png";
import accesories from "./assets/accesories.png";
import logoFooter from "./assets/logo-footer.png";
import speed from "./assets/speed.png";
import exhaust from "./assets/exhaust.png";
import rectangle from "./assets/rectangle.png";
import coreValues from "./assets/core-values.png";
import ChakraCarousel from "./components/carousel/Carousel";
import { capsFirst } from "./components/carousel/utils";
import Navbar from "./components/Navbar";

function App() {
  const [isLargerThanSm] = useMediaQuery("(min-width: 500px)");
  const data = [
    {
      title: "Who we are",
      subtitle: "Technology Company",
      body: "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
      title: "What we do",
      subtitle: "Professional Brand Management",
      body: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      title: "How we do",
      subtitle: "Strategize, Design, Collaborate",
      body: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.",
    },
  ];
  const coreValueData = [
    {
      title: "Dedication",
      subtitle:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    },
    {
      title: "Intellectual Honesty",
      subtitle:
        "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.",
    },
    {
      title: "Curiosity",
      subtitle:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
    },
  ];
  const specialityData = [
    {
      title: "Accesories",
      src: accesories,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
    },
    {
      title: "Speed Improvement",
      src: speed,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
    },
    {
      title: "Exhaust",
      src: exhaust,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <main>
        <VStack width={"100vw"} height={"600px"} position={"relative"}>
          {isLargerThanSm ? (
            <Box
              height={"100%"}
              width={"100%"}
              backgroundImage={`url(${heroBackground})`}
              backgroundPosition={"center"}
              backgroundSize={"cover"}
            />
          ) : (
            <Image src={heroBackground} height={"50%"} />
          )}

          <Box
            position={"absolute"}
            bottom={"0"}
            height={"65%"}
            width={"100%"}
            backgroundImage={`url(${heroRectangle})`}
            backgroundPosition={"top"}
            backgroundSize={"cover"}
            color={"white"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"start"}
            padding={"40px"}
          >
            <Container>
              <VStack
                alignItems={"normal"}
                width={isLargerThanSm ? "60%" : "100%"}
              >
                <Text as={"b"} fontSize={"36px"}>
                  Discover Your Wonder
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </Text>
              </VStack>
            </Container>
          </Box>
        </VStack>
        <Container
          width={"100%"}
          marginInline={"auto"}
          maxWidth={isLargerThanSm ? "90vw" : "100vw"}
          py={{ base: 8, lg: 10 }}
          px={{ base: 5, lg: 10 }}
        >
          <Stack
            gap={5}
            direction={{
              base: "column-reverse",
              md: "row",
            }}
          >
            <VStack alignItems={"normal"} width={{ base: "100%", lg: "55%" }}>
              <Heading
                color={"rgba(2, 159, 228, 1)"}
                fontWeight={"bold"}
                fontSize={"36px"}
                pt={5}
              >
                Our Core Values
              </Heading>
              <Text color={"rgba(119, 119, 119, 1)"}>
                Ridiculus laoreet libero pretium et, sit vel elementum convallis
                fames. Sit suspendisse etiam eget egestas. Aliquet odio et
                lectus etiam sit.
              </Text>
              <Text color={"rgba(119, 119, 119, 1)"}>
                In mauris rutrum ac ut volutpat, ornare nibh diam. Montes,
                vitae, nec amet enim.
              </Text>
              <br />
              <VStack gap={5}>
                {coreValueData.map((item, key) => (
                  <VStack alignItems={"normal"} key={key}>
                    <HStack>
                      <Image src={rectangle} />
                      <Text
                        fontWeight={"bold"}
                        fontSize={"24px"}
                        color={"black"}
                      >
                        {item.title}
                      </Text>
                    </HStack>
                    <Text paddingLeft={"34px"} color={"rgba(119, 119, 119, 1)"}>
                      {item.subtitle}
                    </Text>
                  </VStack>
                ))}
              </VStack>
            </VStack>
            <Spacer />
            <Container
              width={{ base: "100%", lg: "45%" }}
              display={"flex"}
              flexDirection={"column"}
              justifyItems={"end"}
            >
              <ChakraCarousel gap={isLargerThanSm ? 32 : 20}>
                {data.map((post, index) => (
                  <Flex
                    key={index}
                    justifyContent="space-between"
                    flexDirection="column"
                    overflow="hidden"
                    color="gray.300"
                    bg="white"
                    rounded={5}
                    flex={1}
                  >
                    <VStack p={6} alignItems={"normal"}>
                      <Heading
                        fontSize={"36px"}
                        fontWeight={"bold"}
                        color={"rgba(2, 159, 228, 1)"}
                        textAlign="left"
                        w="full"
                        mb={2}
                      >
                        {capsFirst(post.title)}
                      </Heading>
                      <Text w="full" fontSize={"18px"}>
                        {capsFirst(post.subtitle)}
                      </Text>
                      <Text w="full" color={"rgba(119, 119, 119, 1)"}>
                        {capsFirst(post.body)}
                      </Text>
                    </VStack>
                  </Flex>
                ))}
              </ChakraCarousel>
              {isLargerThanSm && (
                <>
                  <br />
                  <Image src={coreValues} />
                </>
              )}
            </Container>
          </Stack>
        </Container>
        {!isLargerThanSm && (
          <>
            <br />
            <Image src={coreValues} />
          </>
        )}
        <Box backgroundColor={"rgba(80, 159, 221, 1)"}>
          <Container
            width={"100%"}
            marginInline={"auto"}
            maxWidth={isLargerThanSm ? "90vw" : "100vw"}
            py={{ base: 8, lg: 10 }}
            px={{ base: 5, lg: 10 }}
          >
            <Flex
              flexDirection={isLargerThanSm ? "row" : "column"}
              backgroundColor={"white"}
              alignItems={"normal"}
              paddingY={isLargerThanSm ? "10px" : "30px"}
              paddingX={"30px"}
            >
              <Center>
                <VStack>
                  <Heading
                    fontSize={"24px"}
                    fontWeight={"bold"}
                    color={"rgba(2, 159, 228, 1)"}
                    textAlign="left"
                    w="full"
                    mb={2}
                  >
                    OUR SPECIALITY
                  </Heading>
                  <Text color={"black"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis euismod libero vel leo auctor, in venenatis nulla
                    consequat. Sed commodo nunc sit amet congue aliquam.
                  </Text>
                </VStack>
              </Center>
              <Container
                py={{ base: 4, lg: 10 }}
                px={{ base: 4, lg: 10 }}
                width={{ base: "100%", lg: "45%" }}
                display={"flex"}
                flexDirection={"column"}
                justifyItems={"end"}
              >
                <ChakraCarousel
                  gap={isLargerThanSm ? 32 : 20}
                  type={"outlined"}
                >
                  {specialityData.map((post, index) => (
                    <Flex
                      key={index}
                      justifyContent="space-between"
                      flexDirection="column"
                      overflow="hidden"
                      color="gray.300"
                      bg="white"
                      rounded={5}
                      flex={1}
                    >
                      <VStack p={6}>
                        <Image src={post.src} width={"150px"} />
                        <Text fontSize={"18px"}>{capsFirst(post.title)}</Text>
                        <Text
                          textAlign={"center"}
                          color={"rgba(167, 167, 167, 1)"}
                        >
                          {capsFirst(post.desc)}
                        </Text>
                      </VStack>
                    </Flex>
                  ))}
                </ChakraCarousel>
              </Container>
            </Flex>
          </Container>
        </Box>
        <Box
          backgroundColor={"rgba(61, 70, 162, 1)"}
          width={"100%"}
          position={"relative"}
        >
          <Container
            width={"100%"}
            marginInline={"auto"}
            maxWidth={isLargerThanSm ? "90vw" : "100vw"}
            py={{ base: 8, lg: 10 }}
            px={{ base: 5, lg: 10 }}
          >
            <VStack width={"full"} gap={8}>
              <Image src={logoFooter} />
              <Stack
                direction={{
                  base: "column",
                  md: "row",
                }}
                width={"full"}
                alignItems={"center"}
                gap={5}
              >
                <Box
                  backgroundColor={"white"}
                  padding={8}
                  color={"black"}
                  width={{ base: "100%", md: "50%" }}
                  zIndex={10}
                >
                  <Accordion index={[0]}>
                    <AccordionItem>
                      <h2>
                        <AccordionButton
                          border={"1px solid rgba(0, 0, 0, 0.3)"}
                          padding={2}
                          borderRadius={"4px"}
                        >
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            color={"rgba(0, 83, 124, 1)"}
                          >
                            TECHNOLOGY DEPARTMENT
                          </Box>
                          <AccordionIcon fontSize={25} />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel py={4} color={"rgba(37, 160, 216, 1)"}>
                        Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota
                        Bandung, Jawa Barat
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
                <VStack
                  fontWeight={"bold"}
                  zIndex={10}
                  width={{ base: "100%", md: "50%" }}
                >
                  <Text>Who we Are</Text>
                  <Text>Our Values</Text>
                  <Text>The Perks</Text>
                </VStack>
              </Stack>
            </VStack>
          </Container>
          <Box
            zIndex={0}
            backgroundImage={`url(${footerRectangle})`}
            backgroundPosition={"top"}
            backgroundSize={"cover"}
            position={"absolute"}
            bottom={0}
            height={"60%"}
            width={"full"}
          />
        </Box>
      </main>
    </div>
  );
}

export default App;
