/**
 * Describes a value as either "truey" or "falsey".
 *
 * @param {any} toDescribe - A value to describe as "truey" or "falsey".
 * @returns {string} "truey" if it's truthy, "falsey" otherwise.
 */
export const describeValue = toDescribe => {
  const castToBoolean = Boolean(toDescribe);
  const description = castToBoolean + 'y';
  return description;
};
