import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiUser, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import { Container, Content, AnimatedContent, Background } from './styles';
import { useAuth } from '../../hooks/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignInFormData {
  username: string;
  password: string;
}

toast.configure();

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      if (loading) {
        return;
      }

      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required('Foydalanuvchi nomi talab qilinadi'),
          password: Yup.string().required('Parol talab qilinadi'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          username: data.username,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        toast.error("Hisob ma'lumotlari noto'g'ri!");
      } finally {
        setLoading(false);
      }
    },
    [signIn, loading],
  );

  return (
    <Container>
      <Content>
        <AnimatedContent>
          <h1>Tizimga kirish</h1>

          <Form ref={formRef} onSubmit={handleSignIn}>
            <Input
              icon={FiUser}
              name="username"
              placeholder="Foydalanuvchi"
              autoComplete="off"
            />

            <Input
              icon={FiLock}
              name="password"
              placeholder="Parol"
              type="password"
            />

            <Button loading={loading} type="submit">
              Kirish
            </Button>
          </Form>
        </AnimatedContent>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
