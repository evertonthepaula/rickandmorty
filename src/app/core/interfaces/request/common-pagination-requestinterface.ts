export interface CommonPaginationRequest {
  // int	The length of the response
  count: number;

  // int	The amount of pages
  pages: number;

  // string(url)	Link to the next page(if it exists)
  next?: string;

  // string(url)	Link to the previous page(if it exists)
  prev?: string;
}
