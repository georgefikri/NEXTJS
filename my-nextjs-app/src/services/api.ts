import { fetcher } from './fetcher';
import { FetcherResponse } from '@/types/fetcher';

export const get = async <TData>(
  url: string,
  headers?: { [key: string]: string }
): Promise<FetcherResponse<TData>> => fetcher<TData>(url, { method: 'GET', headers });

export const post = async <TData, TBody>(
  url: string,
  body: TBody,
  headers?: { [key: string]: string }
): Promise<FetcherResponse<TData>> =>
  fetcher<TData, TBody>(url, { method: 'POST', body, headers });

export const put = async <TData, TBody>(
  url: string,
  body: TBody,
  headers?: { [key: string]: string }
): Promise<FetcherResponse<TData>> =>
  fetcher<TData, TBody>(url, { method: 'PUT', body, headers });

export const del = async <TData>(
  url: string,
  headers?: { [key: string]: string }
): Promise<FetcherResponse<TData>> => fetcher<TData>(url, { method: 'DELETE', headers });
