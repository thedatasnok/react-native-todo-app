import Header from "@/components/layout/Header";
import BackButton from "@/components/navigation/BackButton";
import { Box } from "@gluestack-ui/themed";
import { useRouter } from "expo-router";

const SettingsScreen = () => {
  const router = useRouter();

  return (
    <Box w="$full" h="$full" display="flex">
      <Header title="Settings">
        <BackButton onPress={() => router.back()} />
        {undefined}
      </Header>
    </Box>
  );
};

export default SettingsScreen;
