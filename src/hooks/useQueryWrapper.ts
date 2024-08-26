import { useLoading } from '@/queries/useLoading';
import { useEffect } from 'react';
import { useToast } from './useToast';
import { isArray } from 'lodash';

interface HandleError {
  error?: Error | null;
}

interface HandleLoading {
  isFetching?: boolean;
}

type HandleErrorAndLoadingQueries = HandleError & HandleLoading;

export const useHandleErrorQueries = <T extends HandleError>(args: T) => {
  const { error } = args;
  const { error: errorToast } = useToast();

  useEffect(() => {
    if (!error) return;

    if (isArray(error.message)) {
      return errorToast(error.message[0]);
    }

    if (error.message) {
      return errorToast(error);
    }
  }, [error]);

  return args;
};

export const useHandelLoadingQueries = <T extends HandleLoading>(args: T) => {
  const { isFetching } = args;

  const { showLoading, hideLoading } = useLoading();
  useEffect(() => {
    if (isFetching) {
      showLoading();
    } else {
      hideLoading();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  return args;
};

export const useQueryWrapper = <T extends HandleErrorAndLoadingQueries>(args: T) => {
  const { isFetching, error } = args;
  useHandleErrorQueries({
    error,
  });
  useHandelLoadingQueries({
    isFetching,
  });

  return args;
};
