import { FetcherOptions, FetcherResponse } from '@/types/fetcher';

export const fetcher = async <TData, TBody = unknown>(
  url: string,
  options: FetcherOptions<TBody> = {}
): Promise<FetcherResponse<TData>> => {
  const { method = 'GET', headers = {}, body } = options;

  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    const isJson = response.headers.get('content-type')?.includes('application/json');
    const responseData: TData = isJson
      ? await response.json()
      : ((await response.text()) as unknown as TData);

    if (!response.ok) {
      return {
        data: null,
        error: {
          message: response.statusText,
          status: response.status,
          details: responseData,
        },
      };
    }

    return { data: responseData, error: null };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      data: null,
      error: { message: error.message || 'An unexpected error occurred' },
    };
  }
};
