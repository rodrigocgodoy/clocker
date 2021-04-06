import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps, FormErrorMessage, InputGroup, InputLeftAddon, InputRightAddon } from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
  isLeft?: string;
  isRight?: string;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, isLeft = '', isRight = '', error = null, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name} color="blue.50">{label}</FormLabel>}

      <InputGroup size="lg">
        {isLeft && <InputLeftAddon children={isLeft} />}
        <ChakraInput
          name={name}
          id={name}
          focusBorderColor="blue.800"
          bgColor="white"
          borderColor="blue.50"
          variant="filled"
          _hover={{
            borderColor: 'blue.800'
          }}
          size="lg"
          ref={ref}
          {...rest}
        />
        {isRight && <InputRightAddon children={isRight} />}
      </InputGroup>
      {!!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
}

export const Input = forwardRef(InputBase);