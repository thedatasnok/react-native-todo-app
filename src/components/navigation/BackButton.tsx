import { Button, ChevronLeftIcon, Icon, Text } from '@gluestack-ui/themed';

export interface BackButtonProps {
  onPress?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onPress }) => {
  return (
    <Button variant='link' onPress={onPress}>
      <Icon as={ChevronLeftIcon} size='lg' color='$primary500' />
      <Text fontSize='$md' color='$primary500' fontWeight='$medium'>
        Back
      </Text>
    </Button>
  );
};

export default BackButton;
