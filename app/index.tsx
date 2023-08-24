import { Box, Button, Icon, LockIcon, Text } from "@gluestack-ui/themed";
import { Link } from "expo-router";

const HomeScreen = () => {
  const AUTH_PROVIDERS = [
    {
      name: "Apple",
    },
    {
      name: "Twitter",
    },
    {
      name: "Google",
    },
  ];

  return (
    <Box h="$full" w="$full" alignItems="center" justifyContent="center">
      <Text fontWeight="$bold" fontSize="$2xl" color="$black">
        tudu æp.
      </Text>

      <Text textAlign="center">
        Sign in to save data to the cloud, or continue as a guest.
      </Text>

      <Box display="flex" flexDirection="column" mt="$1">
        {AUTH_PROVIDERS.map((provider) => (
          <Button gap="$2" size="sm" mt="$1" key={provider.name}>
            <Icon as={LockIcon} size="md" />
            <Text fontWeight="$semibold" color="$white" fontSize="$sm">
              Sign in using {provider.name}
            </Text>
          </Button>
        ))}
      </Box>

      <Button variant="link" mt="$2">
        <Link href="/browse">
          <Text fontWeight="$medium" fontSize="$sm" color="$gray500">
            Continue as guest
          </Text>
        </Link>
      </Button>
    </Box>
  );
};

export default HomeScreen;
