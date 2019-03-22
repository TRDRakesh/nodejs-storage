/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export function normalize<T = {}, U = Function>(
    optionsOrCallback?: T|U, cb?: U) {
  const options =
      (typeof optionsOrCallback === 'object' ? optionsOrCallback : {}) as T;
  const callback =
      (typeof optionsOrCallback === 'function' ? optionsOrCallback : cb)! as U;
  return {options, callback};
}

/**
 * Return a Date object as a String, using the ISO8601 format:
 * 20190308T220000Z
 * @param date the Date object to convert.
 * @internal
 */
export function dateToISOString(date: Date): string {
  return date.toJSON()
             .replace(/[:-]/g, '')  // strip :'s and -'s
             .split('.')[0] +
      'Z';  // remove milliseconds part
}

/**
 * Flatten an object into an Array of arrays, [[key, value], ..].
 * @internal
 */
export function flattenObject<T>(obj: {[key: string]: T}): [string, T][] {
  return Object.keys(obj)
    .map((key) => [key, obj[key]] as [string, T]);
}