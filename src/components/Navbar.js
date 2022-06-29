import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';

import Logo from '../assets/images/Logo.png';

function Navbar() {
  return (
    <Stack>
<Link>
<img src={Logo} alt="logo" />
</Link>
</Stack>
  )
}

export default Navbar