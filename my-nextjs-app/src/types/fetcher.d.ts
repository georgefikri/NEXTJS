export interface FetcherOptions<TBody = unknown> {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: { [key: string]: string };
  body?: TBody;
}

export interface FetcherResponse<TData = unknown> {
  data: TData | null;
  error: {
    message: string;
    status?: number;
    details?: unknown;
  } | null;
}
