import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { PolarisProvider } from './components'
import { useState, useEffect } from 'react';


export default function App() {
  // Any .tsx or .jsx files in /routes will become a route
  const pages = import.meta.globEager("./routes/**/!(*.test.[jt]sx)*.([jt]sx)");


  return (
    <PolarisProvider>
      <BrowserRouter>
          <Routes pages={pages} />
      </BrowserRouter>
    </PolarisProvider>
  );
}
