/* eslint-disable import/no-deprecated */
// eslint-disable-next-line import/no-cycle
import { sub2 } from "./js-test-sub2"

export const sub1 = () => {
  sub2()
}
