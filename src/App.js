import React from 'react'
import { config } from './js/config'
import Maintenance from './components/Maintenance_Section'
import Website from './components/Website'

/*
- If isMaintenanceMode mode is true in config.js, then it returns Maintenance.jsx, which is a "maintenance in progress" message.
- Othervise, it returns the Website.jsx, which is a single page portfolio with multiple sections.
*/

export default function App() {
  return (
    <>
      {config.isMaintenanceMode && <Maintenance />}
      {!config.isMaintenanceMode && <Website />}
    </>
  )
}

