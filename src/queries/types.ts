import { UseInfiniteQueryOptions, UseQueryOptions } from '@tanstack/react-query';

export type PromiseType<T extends (...args: any) => any> = Awaited<ReturnType<T>>;

export type QueryOptions<T extends (...args: any) => any> = {
  params: Parameters<T>;
  returnType: PromiseType<T>;
  config: Omit<UseQueryOptions<PromiseType<T>, Error, PromiseType<T>, [any]>, 'queryKey'>;
};

export type InfiniteQueryOptions<T extends (...args: any) => any> = {
  params: Parameters<T>;
  config: UseInfiniteQueryOptions<PromiseType<T>, any, PromiseType<T>, PromiseType<T>, [any]>;
  returnType: PromiseType<T>;
};

export interface BaseResponseError extends Error {
  code: number;
  message: string;
}
