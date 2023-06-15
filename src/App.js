import React, { useState } from 'react'
import { config } from './js/config'
import Maintenance from './components/Maintenance_Section'
import Website from './components/Website'

/*
- If isMaintenanceMode mode is true in config.js, then it returns Maintenance.jsx
- Othervise, it returns the Website.jsx
*/

export default function App() {
  return (
    <>
      {config.isMaintenanceMode && <Maintenance />}
      {!config.isMaintenanceMode && <Website />}
    </>
  )
}

