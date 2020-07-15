import React, {useEffect, useState} from 'react';
import './App.css';
import Dancefloor from "./Dancefloor";
import Loader from "./Loader";

const timeout = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const serverMockedResponse = async() => {
    await timeout(3000);
    return ({ rows: 2, columns: 4 });
}
function App() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null)
    const getData = async () => {
        try {
            setLoading(true);
            const response = await serverMockedResponse();
            console.log(response);
            setData(response);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    return (
    <div className="App">
      <header className="App-header">
          {loading ? <Loader /> : <Dancefloor data={data} />}
      </header>
    </div>
  );
}

export default App;
