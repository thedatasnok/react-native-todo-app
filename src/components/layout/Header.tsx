import { Box, Divider, Text } from '@gluestack-ui/themed';

export interface HeaderProps {
  title: string;
  /**
   * Children slot elements.
   * The first element is placed to the left of the title, the second to the right.
   */
  children?: [React.ReactNode | undefined, React.ReactNode | undefined];
}

const Header: React.FC<HeaderProps> = ({ title, children }) => {
  return (
    <>
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
        bgColor='$gray100'
        h='$10'
        px='$2'
      >
        <Box flexBasis='$0' flex={1} display='flex' alignItems='flex-start'>
          {children?.[0]}
        </Box>

        <Box
          flexBasis='$0'
          flex={1}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Text
            size='xl'
            color='$black'
            fontWeight='$bold'
            flexBasis='$0'
            flex={1}
            mt='$1'
          >
            {title}
          </Text>
        </Box>

        <Box flexBasis='$0' flex={1} display='flex' alignItems='flex-end'>
          {children?.[1]}
        </Box>
      </Box>

      <Divider />
    </>
  );
};

export default Header;
