'use client';
import { Checkbox, FormControlLabel, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import Form from '@/components/Form';
import React from 'react';
import StyledWrapper from '../../components/Form/authenticate/FormWrapper';
import FormText from '@/components/Form/authenticate/FormText';
import EmailInput from '@/components/Form/authenticate/EmailInput';
import PasswordInput from '@/components/Form/authenticate/PasswordInput';
import { dark } from '@/theme/colors';
import * as yup from 'yup';
import { buildConfirmPassword, buildEmailRequired, buildPasswordRequired, buildStringMinMaxRequired } from '@/util/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import StyledLink from '@/components/Form/authenticate/StyledLink';
import FullNameInput from '@/components/Form/authenticate/FullNameInput';
import { useVerifyEmail } from '@/queries/authenticate/useVerifyEmail';
import { useHandleErrorQueries } from '@/hooks/useQueryWrapper';
import { accountCreatedSuccess, emailExist } from '@/const/messages';
import { useToast } from '@/hooks/useToast';
import { useRegisterWithEmail } from '@/queries/authenticate/useRegisterWithEmail';
import { parseFullName } from '@/util/parseFullName';
import { useRouter } from 'next/navigation';
import { Router } from '@/util/Router';
import { queryString } from '@/hooks/useQueryString';
import CheckBoxSvg from 'public/assets/svg/checkbox.svg';
import CheckedCheckBoxSvg from 'public/assets/svg/checked-checkbox.svg';

const schema = yup.object().shape({
  fullName: buildStringMinMaxRequired('full name'),
  email: buildEmailRequired(),
  password: buildPasswordRequired('password'),
  confirmPassword: buildConfirmPassword(),
});

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterPage = () => {
  const router = useRouter();
  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onBlur',
  });
  const { error, success } = useToast();

  const isValid = formState.isValid;
  const [isAgree, setIsAgree] = React.useState(false);
  const [isNewsletter, setIsNewsletter] = React.useState(false);

  const { mutateAsync: verifyEmail } = useHandleErrorQueries(useVerifyEmail());
  const { mutateAsync: registerEmail } = useHandleErrorQueries(useRegisterWithEmail());

  const onSubmit = async (data: FormData) => {
    const isExist = await verifyEmail(data.email);
    const { lastName, firstName } = parseFullName(data.fullName);

    const params: UserRegisterParams = {
      email: data.email,
      first_name: firstName,
      last_name: lastName,
      fullname: data.fullName,
      password1: data.password,
      password2: data.password,
      role: UserRole.CUSTOMER,
      agreed_terms: isAgree,
      is_newsletter: isNewsletter,
    };

    if (isExist) {
      return error(emailExist);
    }

    await registerEmail(params);
    router.push(queryString.createUrlQueryString({ email: data.email }, Router.CheckYourEmail));
    success(accountCreatedSuccess);
  };

  return (
    <StyledWrapper>
      <FormText.FormTitle>GET STARTED</FormText.FormTitle>
      <FormText.FormDescription>Sign up to continue in Wonderfoods</FormText.FormDescription>
      <Form onSubmit={handleSubmit(onSubmit)} id="form-login">
        <Stack flexDirection="column" gap="16px">
          <FullNameInput name="fullName" control={control} />
          <EmailInput control={control} name="email" />
          <PasswordInput control={control} name="password" />
          <PasswordInput control={control} name="confirmPassword" placeholder="Re-enter password" />
          <Stack flexDirection="column" gap="0" sx={{ ml: '-8px' }}>
            <FormControlLabel
              sx={{
                marginLeft: '0',

                '.MuiFormControlLabel-label': {
                  color: dark[40],
                },

                '.MuiCheckbox-root': {
                  padding: 1,
                },
              }}
              control={
                <Checkbox
                  icon={<CheckBoxSvg />}
                  checkedIcon={<CheckedCheckBoxSvg />}
                  value={isAgree}
                  onChange={() => setIsAgree(!isAgree)}
                />
              }
              label={
                <Typography sx={{ color: dark[40], ml: 1, fontWeight: 500 }}>
                  I accept{' '}
                  <StyledLink target="_blank" href="/terms-and-conditions">
                    terms and conditions
                  </StyledLink>
                </Typography>
              }
            />
            <FormControlLabel
              sx={{
                marginLeft: '0',
                alignItems: 'flex-start',
                '.MuiFormControlLabel-label': {
                  color: dark[40],
                },

                '.MuiCheckbox-root': {
                  padding: 1,
                },
              }}
              control={
                <Checkbox
                  icon={<CheckBoxSvg />}
                  checkedIcon={<CheckedCheckBoxSvg />}
                  value={isNewsletter}
                  onChange={() => setIsNewsletter(!isNewsletter)}
                />
              }
              label={
                <Typography sx={{ color: dark[40], ml: 1, pt: 1, fontWeight: 500 }}>
                  Join our mailing list for the latest updates and exclusive offers.
                </Typography>
              }
            />
          </Stack>
        </Stack>
      </Form>
      <Form.SubmitButton
        type="submit"
        form="form-login"
        sx={{ padding: '16px', lineHeight: '33px', fontSize: '1.5rem' }}
        variant="contained"
        color="primary"
        disabled={!isAgree || !isValid}
        control={control}
      >
        Continue
      </Form.SubmitButton>
      <FormText.FormHaveAccount />
    </StyledWrapper>
  );
};

export default RegisterPage;
