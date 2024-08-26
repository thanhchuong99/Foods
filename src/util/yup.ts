import * as yup from 'yup';
import { capitalizeFirstLetter } from '@/util/capitalize-first-letter';
import { regexPassword } from '@/const/regex';
import {
  invalidEmail,
  maxStringLength,
  passwordInvalid,
  passwordMustMatch,
  rePasswordIsRequired,
} from '@/const/messages';

//* Email
export const buildEmailRequired = () => {
  return buildStringRequired('email')
    .trim()
    .email(invalidEmail)
    .test('containsDot', invalidEmail, value => {
      if (!value) return true;

      return /\./.test(value.split('@')[1]);
    })
    .test('startWithDot', invalidEmail, value => {
      if (!value) return true;

      return !/^\./.test(value);
    });
};

// *String
export const buildStringRequired = (object: string) => {
  return yup
    .string()
    .trim()
    .required(`${capitalizeFirstLetter(object)} is required.`);
};

export const buildStringOptional = () => {
  return yup.string().trim().optional();
};

export const buildStringMinMaxRequired = (object: string, min = 2, max = 255) => {
  return yup
    .string()
    .trim()
    .min(min, `Full Name must be at least ${min} characters.`)
    .max(max, `Full Name must be at most ${max} characters.`)
    .required(`${capitalizeFirstLetter(object)} is required.`);
};

// *Password
export const buildPasswordRequired = (object: string) => {
  return buildStringRequired(object).matches(regexPassword, passwordInvalid);
};

export const buildConfirmPassword = () => {
  return yup
    .string()
    .required(rePasswordIsRequired)
    .test('passwordMustMatch', passwordMustMatch, (value, context) => {
      return value === context.parent.password;
    });
};

export const buildMaxStringText = (object: string, max: number) => {
  return maxStringLength.replace('<object>', object).replace('<number>', max.toString());
};
