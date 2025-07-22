// eslint-disable-next-line import/no-cycle
import { sub1 } from "./js-test-sub1"

/**
 * @deprecated test
 */
export const sub2 = () => {
  sub1()
}
