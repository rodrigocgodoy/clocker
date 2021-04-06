import { Button, Text, Flex, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/Form/Input';
import Header from '../components/Header/index';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
  work: yup.string().required('Work nickname obrigatório')
});

export default function Home() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <>
      <Header />
      <Flex 
        w="100%"
        maxWidth={1480}
        mx="auto"
        mt="4"
        px="6"
        align="center"
        justify="center"
        flexDir="column"
      >
        <Text>Crie sua agenda compartilhada</Text>

        <Flex
          as="form"
          width="100%"
          maxWidth={620}
          p="8"
          borderRadius={8}
          flexDir="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
            <Input type="email" name="email" error={errors?.email} label="E-mail" {...register('email')} />
            <Input type="password" name="password" error={errors?.password} label="Senha" {...register('password')} />
            <Input type="work" error={errors?.work} {...register('work')} isLeft="https://rodrigogodoy.dev/" />
          </Stack>
          
          <Button type="submit" mt="6" colorScheme="blue" size="lg" isLoading={isSubmitting}>Entrar</Button>
        </Flex>
      </Flex>
    </>
  );
}
