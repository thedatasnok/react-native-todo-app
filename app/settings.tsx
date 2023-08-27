import RadioInput, { RadioInputOption } from '@/components/input/RadioInput';
import Header from '@/components/layout/Header';
import BackButton from '@/components/navigation/BackButton';
import { ConfigurableTheme, useThemeStore } from '@/theme';
import {
  Box,
  Button,
  ButtonText,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';
import {
  BellIcon,
  BellOffIcon,
  MoonIcon,
  SmartphoneIcon,
  SunIcon,
} from 'lucide-react-native';

const NOTIFICATION_OPTIONS: RadioInputOption<string>[] = [
  {
    icon: BellIcon,
    label: 'On',
    value: 'on',
    description: 'Turns on all notifications',
  },
  {
    icon: BellOffIcon,
    label: 'Off',
    value: 'off',
    description: 'We will not disturb you',
  },
];

const THEME_OPTIONS: RadioInputOption<ConfigurableTheme>[] = [
  {
    icon: SmartphoneIcon,
    label: 'System',
    value: 'system',
  },
  {
    icon: SunIcon,
    label: 'Light',
    value: 'light',
  },
  {
    icon: MoonIcon,
    label: 'Dark',
    value: 'dark',
  },
];

const SettingsScreen = () => {
  const router = useRouter();
  const { preferredTheme, setPreferredTheme } = useThemeStore();

  return (
    <Box w='$full' h='$full' display='flex'>
      <Header title='Settings'>
        <BackButton onPress={() => router.back()} />
        {undefined}
      </Header>

      <Box flex={1} p='$2'>
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Notifcations</FormControlLabelText>
          </FormControlLabel>
          <RadioInput options={NOTIFICATION_OPTIONS} />
        </FormControl>

        <FormControl mt='$2'>
          <FormControlLabel>
            <FormControlLabelText>Theme</FormControlLabelText>
          </FormControlLabel>
          <RadioInput
            options={THEME_OPTIONS}
            value={preferredTheme}
            onChange={(theme) => setPreferredTheme(theme)}
          />
        </FormControl>
      </Box>

      <Button action='negative' variant='link'>
        <ButtonText>Sign out</ButtonText>
      </Button>
    </Box>
  );
};

export default SettingsScreen;
