import { Box, Button, Container, Flex, Heading, Image, Link, List, ListItem, SimpleGrid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react";
import { FaUserCircle, FaRocket, FaHeart } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        {/* Navbar */}
        <Box as="nav" w="full" bg="white" boxShadow="lg" py={2} px={4}>
          <Flex justify="space-between" align="center">
            <Text fontSize="lg" fontWeight="bold">
              HealthFocus
            </Text>
            <Stack direction="row" spacing={4}>
              <Link href="#features">Features</Link>
              <Link href="#pricing">Pricing</Link>
              <Link href="#case-studies">Case Studies</Link>
              <Button leftIcon={<FaUserCircle />} variant="ghost">
                Account
              </Button>
            </Stack>
          </Flex>
        </Box>

        {/* Hero Section */}
        <Flex align="center" justify="center" bg="blue.500" color="white" py={20}>
          <Stack spacing={4} align="center">
            <Heading as="h1" size="2xl">
              Empowering Your Health Journey
            </Heading>
            <Text fontSize="xl">Join us to unlock your personalized health insights.</Text>
            <Button leftIcon={<FaRocket />} size="lg" backgroundColor="primary">
              Get Started
            </Button>
          </Stack>
        </Flex>

        {/* Feature Section */}
        <Box id="features" py={10}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} px={4}>
            <FeatureCard icon={FaHeart} title="Real-Time Health Tracking" description="Monitor your health metrics in real-time with our advanced dashboard." />
            <FeatureCard icon={FaHeart} title="Personalized Insights" description="Receive personalized health insights based on your unique profile." />
            <FeatureCard icon={FaHeart} title="Community Support" description="Connect with a community of health-focused individuals for support and motivation." />
          </SimpleGrid>
        </Box>

        {/* Testimonial Carousel */}
        <Box bg="gray.100" py={10}>
          <Stack spacing={8} maxW="container.md" mx="auto" textAlign="center">
            <Text fontSize="2xl" fontWeight="bold">
              What Our Users Say
            </Text>
            <Box>
              {" "}
              {/* Placeholder for Carousel Component */}
              <Text>Testimonial Carousel here</Text>
            </Box>
          </Stack>
        </Box>

        {/* CTA Section */}
        <Flex bg="teal.500" color="white" py={10} align="center" justify="center">
          <Stack spacing={4}>
            <Heading as="h3" size="lg">
              Ready to Take the Next Step?
            </Heading>
            <Text>Sign up today and start your health transformation!</Text>
            <Button size="lg" colorScheme="red">
              Sign Up Now
            </Button>
          </Stack>
        </Flex>

        {/* Footer */}
        <Box as="footer" bg="white" color="gray.400" py={5}>
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" px={10}>
            <Text>&copy; {new Date().getFullYear()} HealthFocus. All rights reserved.</Text>
            <List spacing={4} direction="row">
              <ListItem>
                <Link href="#">Privacy Policy</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Terms of Service</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Support</Link>
              </ListItem>
            </List>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Stack spacing={4} align="center" p={5} boxShadow="lg" borderRadius="lg">
      <Box as={icon} size="40px" />
      <Text fontWeight="bold">{title}</Text>
      <Text textAlign="center">{description}</Text>
    </Stack>
  );
};

export default Index;
