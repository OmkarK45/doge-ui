import "./Button.scss"
export function Button() {
  return (
    <div className="flex items-center space-x-4  flex-wrap sm:flex-row">
      <button className="btn btn-sm">Button</button>
      <button className="btn btn-r">Button</button>
      <button className="btn btn-lg">Button</button>
      <button className="btn btn-xl">Button</button>
    </div>
  )
}
export function OutlineButton() {
  return (
    <div className="flex space-x-4 items-center flex-wrap">
      <button className="btn btn-outline btn-sm">Button</button>
      <button className="btn btn-outline btn-r">Button</button>
      <button className="btn btn-outline btn-lg">Button</button>
      <button className="btn btn-outline btn-xl">Button</button>
    </div>
  )
}
