import { useTheme } from '@/theme';
import { Box, GluestackUIProvider, config } from '@gluestack-ui/themed';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const theme = useTheme();

  return (
    <GluestackUIProvider config={config.theme} colorMode={theme}>
      <Box
        h='$full'
        w='$full'
        sx={{
          _dark: {
            bgColor: '$gray900',
          },
        }}
      >
        <Slot />
      </Box>

      <StatusBar />
    </GluestackUIProvider>
  );
}
