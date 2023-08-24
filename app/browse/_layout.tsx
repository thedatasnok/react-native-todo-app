import {
  AddIcon,
  Box,
  Button,
  Divider,
  Icon,
  SettingsIcon,
  Text,
} from "@gluestack-ui/themed";
import { Link, Slot } from "expo-router";

const BrowseLayout = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        px="$2"
      >
        <Box flexBasis="$0" flex={1} display="flex" alignItems="flex-start">
          <Button variant="link">
            <Link href="/lists/create">
              <Icon as={AddIcon} color="$primary500" size="lg" />
              <Text fontSize="$md" color="$primary500" fontWeight="$medium">
                Add list
              </Text>
            </Link>
          </Button>
        </Box>

        <Box
          flexBasis="$0"
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            size="xl"
            color="$black"
            fontWeight="$bold"
            flexBasis="$0"
            flex={1}
            mt="$1"
          >
            tudu æp.
          </Text>
        </Box>

        <Box flexBasis="$0" flex={1} display="flex" alignItems="flex-end">
          <Button variant="link">
            <Link href="/settings">
              <Icon as={SettingsIcon} color="$primary500" size="lg" />
            </Link>
          </Button>
        </Box>
      </Box>

      <Divider />

      <Box width="100%" height="100%">
        <Slot />
      </Box>
    </>
  );
};

export default BrowseLayout;
