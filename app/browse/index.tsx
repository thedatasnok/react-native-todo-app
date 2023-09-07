import TodoList from '@/components/todo/TodoList';
import { HStack, Heading, VStack } from '@gluestack-ui/themed';
import { ScrollView } from 'react-native-gesture-handler';

const BrowseHomeScreen = () => {
  return (
    <>
      <VStack p='$2'>
        <Heading size='md'>Your tudu lists</Heading>

        <ScrollView horizontal>
          <HStack space='xs'>
            <TodoList name='ddadadasdasddsadas' color='red' todos={5} />
            <TodoList name='das' color='red' todos={5} />
            <TodoList name='das' color='red' todos={5} />
            <TodoList name='das' color='red' todos={5} />
            <TodoList name='das' color='red' todos={5} />
          </HStack>
        </ScrollView>

        <Heading size='md' mt='$2'>
          Your activity
        </Heading>
      </VStack>
    </>
  );
};

export default BrowseHomeScreen;
