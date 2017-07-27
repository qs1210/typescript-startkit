import * as React from 'react';
const a = require("./Test");
console.log(a.name);

export interface AppProps {
}

export class App extends React.Component<AppProps, any> {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        it works! try to change something~
      </div>
    );
  }
}

export default App;
