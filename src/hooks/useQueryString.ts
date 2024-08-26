interface QueryString {
  [key: string]: string | number | boolean | null | undefined;
}

const createQueryString = (values: QueryString) => {
  const params = new URLSearchParams();
  Object.entries(values).forEach(([key, value]) => {
    if (value === null || value === undefined) {
      params.delete(key);
    } else {
      params.set(key, String(value));
    }
  });

  return params.toString();
};

const createUrlQueryString = (values: QueryString, path?: string) => {
  const query = createQueryString(values);

  return [path, '?', query].join('');
};

const getQueryString = <T>(): T => {
  if ('undefined' === typeof window) return {} as T;

  const url = new URL(window?.location?.href || '');
  const searchParams = new URLSearchParams(url.search);
  const result: T = {} as T;
  for (const [key, value] of searchParams.entries()) {
    result[key as keyof T] = value as T[keyof T];
  }

  return result;
};

export const queryString = {
  createQueryString,
  createUrlQueryString,
  getQueryString,
};
