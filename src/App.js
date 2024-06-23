import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage.js';
import { useProcessedData } from './contexts/ProcessedDataContext.js'
import aggregateCropData from './utils/aggregateCropData.js';
import aggregateCropAverages from './utils/aggregateCropAverages.js';
import Layout from './components/layout/Layout.js';
function App() {
  const { processedData } = useProcessedData();
  console.log(aggregateCropData(processedData))
  console.log(aggregateCropAverages(processedData))
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
