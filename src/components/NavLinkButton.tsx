import { Button } from "@mui/material"
import { NavLink } from "react-router-dom"

type MenuItemMetadata = {
  href: string
  key: string
  icon?: React.ReactNode
  title: string | React.ReactElement
}


const NavLinkButton: React.FC<MenuItemMetadata> = ({ href, icon = undefined, title }) => {
  return (
    <NavLink to={href} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Button color='inherit' startIcon={icon} sx={{ textTransform: 'none' }}>
        {title}
      </Button>
    </NavLink>
  )
}

export default NavLinkButton;