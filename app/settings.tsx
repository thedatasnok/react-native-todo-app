import {
  Button,
  ChevronLeftIcon,
  Icon,
  Text,
  VStack
} from "@gluestack-ui/themed";
import { useRouter } from "expo-router";

const SettingsScreen = () => {
  const router = useRouter();

  const onBack = () => {
    router.back();
  };

  return (
    <VStack alignItems="baseline">
      <Button variant="link" onPress={onBack}>
        <Icon as={ChevronLeftIcon} color="$primary500" size="lg" mt="$px" />
        <Text color="$primary500" fontWeight="$medium">
          Back
        </Text>
      </Button>

      <VStack p="$1">
        <Text fontSize="$xl" fontWeight="$bold" color="$black">
          Settings
        </Text>
      </VStack>
    </VStack>
  );
};

export default SettingsScreen;
