import { HttpParams } from '@angular/common/http';

export function objectToQueryParams(obj: object): string {
  return objectToHttpParams(obj).toString();
}

export function objectToHttpParams(obj: object): HttpParams {
  let params = new HttpParams();

  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      value.forEach(item => {
        params = params.append(key, String(item));
      });
    } else if (typeof value === 'object' && value) {
      params = params.append(`${key}`, JSON.stringify(value));
      // for (const [subKey, subValue] of Object.entries(value)) {
      //   params = params.append(`${key}.${subKey}`, String(subValue));
      // }
    } else {
      params = params.append(key, String(value));
    }
  }

  return params;
}
