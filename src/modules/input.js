// type KeyTypesNames = "boolean" | "number"
// type KeyTypes = boolean | number
// interface KeyMap {
//   // Name of key (e.g. Jump or Move)
//   name: string
//   // Defaults to boolean
//   type?: KeyTypes
// }

// type KeyState = Record<string, KeyTypes>
// type KeyCallbacks = (e: KeyState) => void

class Input {
  // public keys: KeyState = {}
  // private observers: KeyCallbacks[] = []

  setKeys(keys) {
    // this.keys = keys.reduce((allKeys, key) => {
    //   const value = key.type === 'number' ? 1 : false
    //   return allKeys[key.name] = value
    // }, {})
    this.keys = keys
  }

  setKey(keyName, value) {
    this.keys[keyName] = value
    // Loop through all observers and send key data thru callback function
    this.observers.forEach((observer) => observer(this.keys))
  }

  getKey(keyName) {
    return this.keys[keyName]
  }

  addObserver(observer) {
    this.observers.push(observer)
  }

  removeObserver(observer) {
    this.observers.filter((originalObserver) => originalObserver !== observer)
  }
}

const input = new Input()

input.setKeys({
  Jump: false,
  MoveUp: false,
  MoveDown: false
})

export default input
