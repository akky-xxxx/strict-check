/* eslint-disable no-console, react/prop-types */
// eslint-disable-next-line import/no-extraneous-dependencies
import React, { Fragment } from "react"

/**
 * @remarks
 * for checking apply if eslint-plugin-react
 */

export const ReactTest1 = (props) => {
  const { bool, count, empty, title } = props
  const state = React.useState("")

  console.log(state)

  const onClick = () => {
    const handleClick = () => {
      //
    }
    console.log("onClick", handleClick)
  }

  return (
    // eslint-disable-next-line react/jsx-fragments
    <>
      <div>1</div>
      <div>2</div>
      <button type="button" onClick={onClick}>click</button>
      {/* eslint-disable-next-line react/iframe-missing-sandbox */}
      <iframe
        src="https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md"
        title="title"
      />
      {/* eslint-disable-next-line react/jsx-no-leaked-render */}
      <div>{count && title}</div>
      <div>{Boolean(count) && title}</div>
      <div>{count ? title : null}</div>
      <div>{count ? title : empty}</div>
      {Boolean(bool) && "1"}
    </>
  )
}

const JsxSortProps = () => (
  <div>jsx-sort-props</div>
)

// eslint-disable-next-line react/function-component-definition
export function ReactTest2() {
  return (
    <Fragment>
      <div>1</div>
      <div>2</div>
      <JsxSortProps
        // eslint-disable-next-line react/jsx-sort-props
        multiline={() => {
          console.log("multiline")
        }}
        callback={() => "callback"}
        // eslint-disable-next-line react/jsx-sort-props
        isShorthand
        age={10}
      />
    </Fragment>
  )
}

export const ReactTest3 = (props) => {
  const { isStart, hasData, existData, enableSubmit } = props
  console.log(isStart, hasData, existData, enableSubmit)

  return null
}

const reactTest3Props = {
  isStart: true,
  hasData: true,
  existData: true,
  enableSubmit: true,
}

export const ReactTest4 = () => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ReactTest3 {...reactTest3Props} />
)
