'use client';
import Form from '@/components/Form';
import CheckboxInput from '@/components/Form/CheckboxInput';
import EmailInput from '@/components/Form/authenticate/EmailInput';
import FullNameInput from '@/components/Form/authenticate/FullNameInput';
import { dark } from '@/theme/colors';
import { Router } from '@/util/Router';
import { buildEmailRequired, buildMaxStringText, buildStringOptional, buildStringRequired } from '@/util/yup';
import { IAppInformation } from '@hdwebsoft/wonderfoods-api-customer-sdk/libs/api/system/models';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Typography, styled } from '@mui/material';
import StyledLink from '@/components/Form/authenticate/StyledLink';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useSubmitDeletionRequest } from '@/queries/user/useSubmitDeletionRequest';
import { useQueryWrapper } from '@/hooks/useQueryWrapper';
import { agreeToTerms } from '@/const/messages';

const Paragraph = styled(Typography)(() => ({
  fontSize: '1.25rem',
  marginTop: 20,
  marginBottom: 20,
  color: dark[40],
  fontWeight: 500,

  a: {
    fontWeight: 500,
    fontSize: '1.25rem',
  },
}));

const StyledForm = styled(Form)(() => ({
  display: 'grid',
  rowGap: 16,
}));

const Highlight = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  fontSize: '1.25rem',
  display: 'inline-block',
  fontWeight: 'bold',
}));

const HintText = styled(Typography)(() => ({
  fontSize: '0.875rem',
  color: dark[40],
}));

interface FormContainerProps {
  appInformation: IAppInformation;
}

interface FormValues {
  fullName: string;
  email: string;
  requestDetails?: string;
  agree: boolean;
}

const MAX_FULL_NAME_LENGTH = 100;
const MAX_DETAILS_LENGTH = 1000;

const schema: yup.AnyObjectSchema = yup.object().shape({
  fullName: buildStringRequired('Full name').max(
    MAX_FULL_NAME_LENGTH,
    buildMaxStringText('Full name', MAX_FULL_NAME_LENGTH),
  ),
  email: buildEmailRequired(),
  agree: yup.boolean().oneOf([true], agreeToTerms),
  requestDetails: buildStringOptional().max(
    MAX_DETAILS_LENGTH,
    buildMaxStringText('Request details', MAX_DETAILS_LENGTH),
  ),
});

const FormContainer = (props: FormContainerProps) => {
  const defaultValues: FormValues = {
    fullName: '',
    email: '',
    requestDetails: '',
    agree: false,
  };

  const form = useForm({
    mode: 'onBlur',
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  const { mutateAsync } = useQueryWrapper(useSubmitDeletionRequest({}));

  const onSubmit = async (values: FormValues) => {
    await mutateAsync({
      details: values.requestDetails ?? '',
      email: values.email,
      full_name: values.fullName,
    });
    form.reset(defaultValues);
  };

  return (
    <Container
      sx={theme => ({
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),

        [theme.breakpoints.up('md')]: {
          maxWidth: theme.breakpoints.values.md,
        },
      })}
    >
      <Paragraph>
        With this form you can request the deletion of all the data that we maintain on the server, if you have
        previously signed up on the <Highlight as="span">{props.appInformation.app_title}</Highlight> app.
      </Paragraph>
      <Paragraph>
        If you have the app installed, you can also delete your account and the associated data. To do so, please go to{' '}
        <Highlight as="span">Settings &gt; Basic Information </Highlight> and select{' '}
        <Highlight as="span">Delete Account</Highlight>.
      </Paragraph>
      <Paragraph>
        If you delete your account, <Highlight as="span">ALL</Highlight> of your data will be permanently deleted. This
        action cannot be undone.
      </Paragraph>
      <Paragraph>
        To verify your identity, we will send an email to the email address you provided that matches our records for
        your to confirm. In some instances, we may also ask for additional information to ensure we verify your identity
        before complying.
      </Paragraph>
      <Paragraph>
        To learn more about how we handle your data, please read our{' '}
        <StyledLink href={Router.Privacy}>privacy policy.</StyledLink>
      </Paragraph>

      <StyledForm onSubmit={form.handleSubmit(onSubmit)}>
        <FullNameInput name="fullName" control={form.control} />
        <EmailInput name="email" control={form.control} />
        <Form.TextField
          placeholder="Request Details"
          variant="outlined"
          multiline
          rows={4}
          name="requestDetails"
          control={form.control}
        />
        <CheckboxInput
          shouldShowError={false}
          name="agree"
          formControl={form.control}
          label={
            <Typography sx={{ color: dark[40] }}>
              I accept{' '}
              <StyledLink target="_blank" href="/terms-and-conditions">
                terms and conditions
              </StyledLink>
            </Typography>
          }
        />

        <HintText>
          By sending this request I confirm the following: I am entitled to make this request because it relates to the
          processing of my personal data or because I have been authorized by the data subject to whose data the request
          relates. The data contained in my request are accurate and correct. I am aware that the request, including the
          data contained therein, will be processed in order to respond to my request.
        </HintText>

        <Form.SubmitButton
          disabled={!form.formState.isValid}
          sx={{ padding: '16px', lineHeight: '33px', fontSize: '1.5rem' }}
          control={form.control}
        >
          Submit
        </Form.SubmitButton>
      </StyledForm>
    </Container>
  );
};

export default FormContainer;
