import { Box, ChevronRightIcon, Icon, Text } from '@gluestack-ui/themed';

export interface TodoListProps {
  name: string;
  color: string;
  todos: number;
}

const TodoList: React.FC<TodoListProps> = ({ name, color, todos }) => {
  return (
    <Box
      bgColor='$gray50'
      borderLeftColor={color}
      borderRightColor='$gray200'
      borderTopColor='$gray200'
      borderBottomColor='$gray200'
      borderWidth='$1'
      borderLeftWidth={6}
      rounded='$md'
      p='$1'
      display='flex'
      flexDirection='row'
      alignItems='center'
      width='$40'
      justifyContent='space-between'
    >
      <Box flex={1}>
        <Text fontWeight='$bold' fontSize='$lg' color='$black' isTruncated>
          {name}
        </Text>
        <Text fontSize='$sm'>{todos} todos</Text>
      </Box>
      <Icon as={ChevronRightIcon} color='$gray400' size='md' flexShrink={0} />
    </Box>
  );
};

export default TodoList;
