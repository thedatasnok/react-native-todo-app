import Header from "@/components/layout/Header";
import BackButton from "@/components/navigation/BackButton";
import {
  Box,
  Button,
  CheckIcon,
  ChevronLeftIcon,
  EyeOffIcon,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Icon,
  Input,
  InputField,
  Text,
  Textarea,
  TextareaInput,
  config,
} from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import { useState } from "react";

const listAccentColors = [
  config.theme.tokens.colors.purple500,
  config.theme.tokens.colors.blue500,
  config.theme.tokens.colors.green500,
  config.theme.tokens.colors.yellow500,
  config.theme.tokens.colors.red500,
];

type SelectableColor = (typeof listAccentColors)[number];

const CreateListScreen = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedColor, setSelectedColor] = useState<SelectableColor>();

  return (
    <Box h="$full" w="$full">
      <Header title="New tudu list">
        <BackButton onPress={router.back} />
        {undefined}
      </Header>

      <Box p="$2">
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Name</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              defaultValue={name}
              onChangeText={setName}
              placeholder="School"
            />
          </Input>
        </FormControl>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Description</FormControlLabelText>
          </FormControlLabel>
          <Textarea>
            <TextareaInput
              defaultValue={description}
              onChangeText={setDescription}
              placeholder="Something"
            />
          </Textarea>
        </FormControl>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Color</FormControlLabelText>
          </FormControlLabel>

          <Box display="flex" flexDirection="row" flexWrap="wrap" gap="$2">
            {listAccentColors.map((color) => (
              <Button
                key={color}
                bgColor={color}
                rounded="$md"
                borderColor="$gray300"
                borderWidth="$1"
                aspectRatio={1}
                h="$12"
                onPress={() => setSelectedColor(color)}
              >
                {color === selectedColor && <Icon as={CheckIcon} size="xl" />}
              </Button>
            ))}

            <Button
              bgColor="$gray50"
              rounded="$md"
              borderColor="$gray300"
              borderWidth="$1"
              aspectRatio={1}
              h="$12"
              onPress={() => setSelectedColor(undefined)}
            >
              <Icon as={EyeOffIcon} color="$black" size="xl" />
            </Button>
          </Box>
        </FormControl>

        <Button mt="$2">
          <Text color="$white" fontWeight="$semibold">
            Create list
          </Text>
        </Button>
      </Box>
    </Box>
  );
};

export default CreateListScreen;
