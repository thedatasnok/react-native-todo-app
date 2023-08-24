import {
  AddIcon,
  Box,
  Button,
  Divider,
  GluestackUIProvider,
  Icon,
  SettingsIcon,
  Text,
  config,
} from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Link, Slot } from "expo-router";

export type Todo = {
  name: string;
  notes: string;
  createdAt: Date;
  completedAt: Date | null;
};

export type TodoList = {
  name: string;
  todos: Todo[];
};

export default function App() {
  const [_todoLists, _setTodoLists] = useState<TodoList[]>([]);

  return (
    <GluestackUIProvider config={config.theme}>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        px="$2"
      >
        <Box flexBasis="$0" flex={1} display="flex" alignItems="flex-start">
          <Button variant="link">
            <Icon as={AddIcon} color="$primary500" size="lg" />
            <Text fontSize="$md" color="$primary500" fontWeight="$medium">
              Add list
            </Text>
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

      <StatusBar />
    </GluestackUIProvider>
  );
}
