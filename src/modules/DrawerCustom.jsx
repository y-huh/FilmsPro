import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import getContext from "../hooks/getContext"
import { navbarMenuList } from "../hooks/routes"
import { Link } from "react-router-dom"
import React from "react"

export default function DrawerCustom() {
  const { openDrawer, setOpenDrawer } = getContext()

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpenDrawer(false)}>
      <List>
        {navbarMenuList.map((text) => (
          <ListItem className="cursor-pointer" key={text.id} disablePadding>
            <ListItemButton>
              <Link to={text.path}>
                <ListItemText primary={text.value} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  )
}

