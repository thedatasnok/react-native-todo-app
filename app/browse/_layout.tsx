import Header from '@/components/layout/Header';
import {
  AddIcon,
  Box,
  Button,
  Icon,
  SettingsIcon,
  Text,
} from '@gluestack-ui/themed';
import { Link, Slot } from 'expo-router';

const BrowseLayout = () => {
  return (
    <>
      <Header title='tudu æp.'>
        <Link href='/lists/create' asChild>
          <Button variant='link'>
            <Icon as={AddIcon} color='$primary500' size='lg' />
            <Text fontSize='$md' color='$primary500' fontWeight='$medium'>
              Add list
            </Text>
          </Button>
        </Link>

        <Link href='/settings' asChild>
          <Button variant='link'>
            <Icon as={SettingsIcon} color='$primary500' size='lg' />
          </Button>
        </Link>
      </Header>

      <Box width='100%' height='100%'>
        <Slot />
      </Box>
    </>
  );
};

export default BrowseLayout;
