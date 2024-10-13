import React, { useState } from 'react'

const header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (evant: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type ==='keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
         (event as React.KeyboardEvent).key ==='shift')
  ) {
    return()
  }

  setDrawerOpen(open);
  };
  return (
    <div>
      
    </div>
  )
}

export default header
