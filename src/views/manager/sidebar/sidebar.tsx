// Sidebar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CategoryIcon from '@mui/icons-material/Category';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import styles from './index.module.sass';

interface SidebarProps {
  showSidebar: boolean;
}

interface MenuItem {
  label: string;
  icon: React.ReactElement;
  path: string;
  subItems?: MenuItem[];
}

const sections: MenuItem[] = [
  {
    label: 'Usuarios',
    icon: <PeopleAltIcon />,
    path: '/manager/users',
    subItems: [
      {
        label: 'Consulta',
        icon: <SearchIcon />,
        path: '/manager/users',
      },
      {
        label: 'Agregar',
        icon: <AddCircleOutlineIcon />,
        path: '/manager/addUser',
      }
    ],
  },
  {
    label: 'Categorías',
    icon: <CategoryIcon />,
    path: '/manager/categories',
    subItems: [
      {
        label: 'Consulta',
        icon: <SearchIcon />,
        path: '/manager/categories',
      },
      {
        label: 'Agregar',
        icon: <AddCircleOutlineIcon />,
        path: '/manager/addCategory',
      },
    ],
  },
  {
    label: 'Productos',
    icon: <Inventory2OutlinedIcon />,
    path: '/manager/products',
    subItems: [
      {
        label: 'Consulta',
        icon: <SearchIcon />,
        path: '/manager/products',
      },
      {
        label: 'Agregar',
        icon: <AddCircleOutlineIcon />,
        path: '/manager/addProduct',
      }
    ],
  }
];

const Sidebar: React.FC<SidebarProps> = ({ showSidebar }) => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const handleSectionClick = (sectionPath: string) => {
    if (openSections.includes(sectionPath)) {
      setOpenSections(openSections.filter((path) => path !== sectionPath));
    } else {
      setOpenSections([...openSections, sectionPath]);
    }
  };

  return (
    <nav className={styles.sidebar} style={{
      width: showSidebar ? '14rem' : '0'
    }}>
      <List>
        {sections.map((section) => (
          <div key={section.label}>
            <ListItem button onClick={() => handleSectionClick(section.path)}>
              <ListItemIcon>
                {section.icon}
              </ListItemIcon>
              <ListItemText primary={section.label} />
              {section.subItems && openSections.includes(section.path) ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </ListItem>
            <Collapse in={openSections.includes(section.path)} unmountOnExit>
              <List style={{ paddingLeft: '20px' }}>
                {section.subItems?.map((subItem) => (
                  <ListItem button key={subItem.label} component={Link} to={subItem.path}>
                    <ListItemIcon>
                      {subItem.icon}
                    </ListItemIcon>
                    <ListItemText primary={subItem.label} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </nav>
  );
};

export default Sidebar;
