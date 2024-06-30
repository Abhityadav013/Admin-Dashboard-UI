import * as React from 'react';
import SideNavBar from './components/SideNavBar';
import StatBox, { StateBoxProps } from './components/StateBox';
import { Email } from '@mui/icons-material';

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    {/* SVG path for email icon */}
  </svg>
);

const model: StateBoxProps = {
  title: 'Box Container',
  value: 'Mail Box',
  increase: 15,
  icon: <EmailIcon />, // Example with React.ReactNode type
  description: 'This is an Email Box Container',
};

export default function Dashboard() {
  return <div></div>;
}
