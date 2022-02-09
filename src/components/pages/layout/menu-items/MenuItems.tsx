import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';

export default function MenuItems() {
  const links = [
    {
      path: '/',
      label: 'Dashboard',
      icon: <DashboardIcon />,
      key: 1,
    },
    {
      path: '/bing',
      label: 'Bing Search',
      icon: <AssignmentIcon />,
      key: 2,
    },
  ];

  return (
    <div>
      {
        links.map((item) => (
          <ListItemButton key={item.key}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <Link to={item.path}>
              <ListItemText primary={item.label} />
            </Link>
          </ListItemButton>
        ))
      }
    </div>
  );
}
