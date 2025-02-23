import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Container, Dropdown, Icon } from 'semantic-ui-react';
import './Navigation.scss';

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGradientPosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  const gradientStyle = {
    background: `radial-gradient(
      circle at ${gradientPosition.x}% ${gradientPosition.y}%,
      rgba(110, 123, 251, 0.1),
      rgba(115, 200, 240, 0.2)
    )`
  };

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
        <Menu.Item
          as={NavLink}
          to="/"
          header
          className="nav-brand"
          activeclassname="active"
        >
          <Icon name="user circle" size="big" />
          <span className="brand-text">Frank Cooper Ministries</span>
        </Menu.Item>

        {!isMobile ? (
          <>
            <Menu.Item
              as={NavLink}
              to="/about"
              name="About"
              className="nav-item"
              activeclassname="active"
            />
            <Menu.Item
              as={NavLink}
              to="/sermons"
              name="Sermons"
              className="nav-item"
              activeclassname="active"
            />
            <Menu.Item
              as={NavLink}
              to="/events"
              name="Events"
              className="nav-item"
              activeclassname="active"
            />
            <Menu.Item
              as={NavLink}
              to="/contact"
              name="Contact"
              className="nav-item"
              activeclassname="active"
            />

            <Menu.Menu position="right" className="social-icons">
              {['facebook f', 'twitter', 'youtube'].map((icon) => (
                <Menu.Item
                  key={icon}
                  as="a"
                  href={`https://${icon.split(' ')[0]}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Icon name={icon} />
                </Menu.Item>
              ))}
            </Menu.Menu>
          </>
        ) : (
          <Menu.Menu position="right">
            <Dropdown
              icon="bars"
              item
              open={menuOpen}
              onOpen={() => setMenuOpen(true)}
              onClose={() => setMenuOpen(false)}
            >
              <Dropdown.Menu>
                {['about', 'sermons', 'events', 'contact'].map((route) => (
                  <Dropdown.Item
                    key={route}
                    as={NavLink}
                    to={`/${route}`}
                    text={route.charAt(0).toUpperCase() + route.slice(1)}
                    onClick={() => setMenuOpen(false)}
                    activeclassname="active"
                  />
                ))}
                <Dropdown.Divider />
                {['facebook', 'twitter', 'youtube'].map((social) => (
                  <Dropdown.Item
                    key={social}
                    as="a"
                    href={`https://${social}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={social}
                    text={social.charAt(0).toUpperCase() + social.slice(1)}
                  />
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        )}
      </Container>
    </Menu>
  );
};

export default Navigation;