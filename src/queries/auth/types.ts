export interface LoginParams {
  email: string;
  password: string;
}

export interface ResetPasswordParams {
  newPassword: string;
  otp: string;
  email?: string;
  phone?: string;
}

export interface ResetPasswordMutation {
  onSuccess?: () => void;
  onError?: () => void;
}

export interface VerifyEmailMutation {
  onSuccess?: (data: unknown) => void;
  onError?: (error: Error & { code: number }) => void;
}

export interface ResendEmailMutation {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export interface LoginMutation {
  onSuccess?: () => void;
  onError?: (error: Error & { code: number }, variables: LoginParams, context: unknown) => void;
}
