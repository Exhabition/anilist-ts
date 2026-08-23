import { AniListConfigurationError, AniListGraphQLError } from '../errors.js';

export function pagination(options: { readonly page?: number; readonly perPage?: number }): {
  readonly page: number;
  readonly perPage: number;
} {
  const page = options.page ?? 1;
  const perPage = options.perPage ?? 25;
  if (!Number.isInteger(page) || page < 1) throw new AniListConfigurationError('page must be a positive integer.');
  if (!Number.isInteger(perPage) || perPage < 1 || perPage > 50) {
    throw new AniListConfigurationError('perPage must be an integer from 1 through 50.');
  }
  return { page, perPage };
}

export function pageResponse(response: Record<string, unknown>): {
  readonly pageInfo: Record<string, unknown>;
  readonly page: Record<string, unknown>;
} {
  const page = response.Page;
  if (!page || typeof page !== 'object' || Array.isArray(page)) {
    throw new AniListGraphQLError([{ message: 'AniList returned no Page object.' }], response);
  }
  const pageInfo = (page as Record<string, unknown>).pageInfo;
  if (!pageInfo || typeof pageInfo !== 'object' || Array.isArray(pageInfo)) {
    throw new AniListGraphQLError([{ message: 'AniList returned no Page.pageInfo object.' }], response);
  }
  return { page: page as Record<string, unknown>, pageInfo: pageInfo as Record<string, unknown> };
}
