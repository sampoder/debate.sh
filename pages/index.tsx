import Marquee from "react-marquee-slider";
import { Box, Container, Image, Heading, Button, Flex, Text } from "theme-ui";

export default function Index() {
  return (
    <>
      <Box
        sx={{
          height: "500px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "500px",
            zIndex: "999",
            p: 4,
            width: "100vw",
            background:
              "linear-gradient(90deg, rgba(15,26,53,0.9) 35%, rgba(15,26,53,0.9) 100%)",
          }}
        >
          <Box
            sx={{
              color: "white",
              textAlign: "center",
              maxWidth: "800px",
              margin: "auto",
            }}
          >
            <Heading as="h1" sx={{ fontSize: 7, mt: 3 }}>
              Join a global community of debaters.
            </Heading>
            <Flex sx={{ justifyContent: "center", mt: 3 }}>
              <Button
                mx={2}
                sx={{
                  fontSize: 2,
                  fontWeight: 800,
                  border: "2px solid white",
                }}
              >
                Attend A Tournament
              </Button>
              <Button
                mx={2}
                sx={{
                  fontSize: 2,
                  fontWeight: 800,
                  bg: "green",
                  border: "2px solid white",
                }}
              >
                Organise A Tournament
              </Button>
            </Flex>
          </Box>
        </Box>
        <Box sx={{ position: "absolute", top: 0, left: 0, height: "500px" }}>
          <Box sx={{ height: "250px" }}>
            {/* @ts-ignore */}
            <Marquee velocity={25}>
              <Image
                src="https://i.imgur.com/mQTh5m3.jpg"
                sx={{ height: "250px" }}
              />
              <Image
                src="https://i.imgur.com/mQTh5m3.jpg"
                sx={{ height: "250px" }}
              />
              <Image
                src="https://i.imgur.com/mQTh5m3.jpg"
                sx={{ height: "250px" }}
              />
              <Image
                src="https://i.imgur.com/mQTh5m3.jpg"
                sx={{ height: "250px" }}
              />
              <Image
                src="https://i.imgur.com/mQTh5m3.jpg"
                sx={{ height: "250px" }}
              />
              <Image
                src="https://i.imgur.com/mQTh5m3.jpg"
                sx={{ height: "250px" }}
              />
            </Marquee>
          </Box>
          <Box sx={{ height: "250px" }}>
            {/* @ts-ignore */}
            <Marquee velocity={25}>
              <Image
                src="https://i.imgur.com/mQTh5m3.jpg"
                sx={{ height: "250px" }}
              />
              <Image
                src="https://i.imgur.com/mQTh5m3.jpg"
                sx={{ height: "250px" }}
              />
              <Image
                src="https://i.imgur.com/mQTh5m3.jpg"
                sx={{ height: "250px" }}
              />
              <Image
                src="https://i.imgur.com/mQTh5m3.jpg"
                sx={{ height: "250px" }}
              />
              <Image
                src="https://i.imgur.com/mQTh5m3.jpg"
                sx={{ height: "250px" }}
              />
              <Image
                src="https://i.imgur.com/mQTh5m3.jpg"
                sx={{ height: "250px" }}
              />
            </Marquee>
          </Box>
        </Box>
      </Box>
      <Box>
        <Container>
          <Heading mt={4} mb={3} sx={{ fontSize: 4 }}>
            In-Person Tournaments in Singapore
          </Heading>
          <Flex
            sx={{
              border: "1px solid",
              borderColor: "sunken",
              alignItems: "center",
            }}
          >
            <Image src="/red.png" sx={{ height: "100px", p: 3 }} />
            <Box
              sx={{
                flexGrow: 1,
                borderRight: "1px solid",
                borderColor: "sunken",
                p: 3,
                pl: 0,
              }}
            >
              <Heading>What The Pwaa!</Heading>
              <Box mt={1}>Sunday 13th February | NLCS (Singapore)</Box>
            </Box>
            <Box sx={{ p: 3 }}>
              <Box>
                <Text sx={{ fontWeight: 600 }}>Prizes:</Text> $100
              </Box>
              <Box>
                <Text sx={{ fontWeight: 600 }}>Organised by</Text>: OnePwaa
              </Box>
              <Box>
                <Text sx={{ fontWeight: 600 }}>Format</Text>: WSC
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
