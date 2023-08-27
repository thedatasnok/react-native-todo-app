import type { IconType } from '@/icons';
import {
  Box,
  CircleIcon,
  Icon,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
  Text,
} from '@gluestack-ui/themed';
import { useState } from 'react';

export interface RadioInputOption<T extends string> {
  value: T;
  icon: IconType;
  label: string;
  description?: string;
}

export interface RadioInputProps<T extends string> {
  options: RadioInputOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
}

const RadioInput = <T extends string>({
  options,
  value: defaultValue,
  onChange,
}: RadioInputProps<T>) => {
  const [value, setValue] = useState(defaultValue ?? options[0].value);

  const emitChange = (newValue: any) => {
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <RadioGroup onChange={emitChange} value={value}>
      {options.map((option, idx, arr) => (
        <Radio
          key={option.label + value}
          value={option.value}
          sx={{
            display: 'flex',
            alignItems: 'center',
            py: '$1',
            px: '$2',
            marginTop: -1,
            borderWidth: '$1',
            borderTopLeftRadius: idx === 0 ? '$md' : undefined,
            borderTopRightRadius: idx === 0 ? '$md' : undefined,
            borderBottomLeftRadius: idx === arr.length - 1 ? '$md' : undefined,
            borderBottomRightRadius: idx === arr.length - 1 ? '$md' : undefined,
            _dark: {
              borderColor: value === option.value ? '$primary700' : '$gray700',
              ':checked': {
                backgroundColor: '$primary900',
              },
            },
            _light: {
              borderColor: value === option.value ? '$primary300' : '$gray200',
              ':checked': {
                backgroundColor: '$primary50',
              },
            },
            ':checked': {
              zIndex: 10,
            },
          }}
        >
          <Icon as={option.icon} size='24' color='$primary500' mr='$1' />

          <Box gap={-8} flex={1}>
            <RadioLabel
              fontSize='$sm'
              fontWeight='$medium'
              sx={{
                ':checked': {
                  color: '$primary500',
                },
              }}
            >
              {option.label}
            </RadioLabel>
            {option.description && (
              <Text fontSize='$2xs'>{option.description}</Text>
            )}
          </Box>

          <RadioIndicator h='$4' w='$4' borderWidth='$1'>
            <RadioIcon
              as={CircleIcon}
              h='$2.5'
              w='$2.5'
              color={option.value === value ? '$primary500' : '$gray400'}
            />
          </RadioIndicator>
        </Radio>
      ))}
    </RadioGroup>
  );
};

export default RadioInput;
