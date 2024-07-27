import isPropValid from '@emotion/is-prop-valid'

/**
 * Returns a function that can be used as the `shouldForwardProp` prop of `styled`.
 * Allows for explicit whitelisting and/or blacklisting of custom props.
 */
export const shouldForwardProp =
  ({
    allowedProps = [],
    forbiddenProps = [],
  }: Partial<Record<'allowedProps' | 'forbiddenProps', PropertyKey[]>> = {}) =>
    (prop: PropertyKey) => {
      if (allowedProps.includes(prop)) {
        return true;
      }
      if (forbiddenProps.includes(prop)) {
        return false;
      }
      return isPropValid(String(prop))
    }