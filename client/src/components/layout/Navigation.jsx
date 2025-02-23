import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Container, Dropdown, Icon } from 'semantic-ui-react'
import './Navigation.scss' // Moved CSS to separate file

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) setMenuOpen(false)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setGradientPosition({ x, y })
  }

  const gradientStyle = {
    background: `radial-gradient(
      circle at ${gradientPosition.x}% ${gradientPosition.y}%,
      rgba(110, 123, 251, 0.1),
      rgba(115, 200, 240, 0.2)
    )`
  }

  return (
    <Menu
      fixed="top"
      stackable
      inverted
      style={{
        ...gradientStyle,
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'background 0.3s ease'
      }}
      onMouseMove={handleMouseMove}
    >
      <Container>
        <Menu.Item as={NavLink} to="/" header>
          <Icon name="user circle" size="big" />
          Frank Cooper
        </Menu.Item>

        {!isMobile ? (
          <>
            <Menu.Item as={NavLink} to="/about" name="About" activeClassName="active" />
            <Menu.Item as={NavLink} to="/sermons" name="Sermons" activeClassName="active" />
            <Menu.Item as={NavLink} to="/events" name="Events" activeClassName="active" />
            <Menu.Item as={NavLink} to="/contact" name="Contact" activeClassName="active" />

            <Menu.Menu position="right">
              <Menu.Item
                as="a"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="facebook f" />
              </Menu.Item>
              <Menu.Item
                as="a"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="twitter" />
              </Menu.Item>
              <Menu.Item
                as="a"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="youtube" />
              </Menu.Item>
            </Menu.Menu>
          </>
        ) : (
          <Menu.Menu position="right">
            <Dropdown
              icon="bars"
              item
              open={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/about" text="About" onClick={() => setMenuOpen(false)} />
                <Dropdown.Item as={NavLink} to="/sermons" text="Sermons" onClick={() => setMenuOpen(false)} />
                <Dropdown.Item as={NavLink} to="/events" text="Events" onClick={() => setMenuOpen(false)} />
                <Dropdown.Item as={NavLink} to="/contact" text="Contact" onClick={() => setMenuOpen(false)} />
                <Dropdown.Divider />
                <Dropdown.Item as="a" href="https://facebook.com" text="Facebook" target="_blank" rel="noopener noreferrer" />
                <Dropdown.Item as="a" href="https://twitter.com" text="Twitter" target="_blank" rel="noopener noreferrer" />
                <Dropdown.Item as="a" href="https://youtube.com" text="YouTube" target="_blank" rel="noopener noreferrer" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        )}
      </Container>
    </Menu>
  )
}

export default Navigation