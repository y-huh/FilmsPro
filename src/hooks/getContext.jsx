import { useContext } from "react"
import { Context } from "../context/context"

const getContext = () => {
  const { openDrawer, setOpenDrawer } = useContext(Context)

  return { openDrawer, setOpenDrawer }
}

export default getContext

