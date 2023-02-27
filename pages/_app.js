import '@/styles/globals.css'
import React, { useState, useEffect, useRef } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Button, Grid, Toolbar, Typography, Box, Card } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LanguageIcon from '@mui/icons-material/Language';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router'
import Link from 'next/link';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#FF0000',
      dark: '#ba000d',
      contrastText: '#000',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#FFFF00',
    },
  },
});
export default function App({ Component, pageProps }) {


  const btnRef = useRef();

  const [active, setActive] = useState(false);
  const router = useRouter();
  const [newRouter, setNewRouter] = useState()
  const [activeColor, setActiveColor] = useState()

  // const currentRoute = window.location.href.toLowerCase();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElProducts, setAnchorElProducts] = useState(null);
  const [anchorElEnglish, setAnchorElEnglish] = useState(null);
  const open = Boolean(anchorEl);
  const openProducts = Boolean(anchorElProducts);
  const openEnglish = Boolean(anchorElEnglish);

  const handleClickVpn = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }
  const handleClickProducts = (event) => {
    setAnchorElProducts(event.currentTarget);
  };
  const handleCloseProducts = () => {
    setAnchorElProducts(null);
  };
  const handleClickEnglish = (event) => {
    setAnchorElEnglish(event.currentTarget);
    console.log("router....", router.query);
  };
  const handleCloseEnglish = () => {
    setAnchorElEnglish(null);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar color='secondary'>
          <Toolbar id="toolbar">
            <Link href="/">
              <Typography flexGrow={1}>
                <Card sx={{ height: 40 }} component="img" src="data:image/png;base64,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" />
              </Typography>
            </Link>
            <Button onMouseOver={handleClickVpn} variant='text' color={router.pathname.split('/').join('') === "whatisavpnvpn" || router.pathname.split('/').join('') === "whatisavpnvpn1" || router.pathname.split('/').join('') === "whatisavpnvpn2" ? "neutral" : 'inherit'}>What is a vpn{<ArrowDropDownIcon />}</Button>
            <Button onMouseOver={handleClickProducts} variant='text' color={router.pathname.split('/').join('') === "productsnokia" || router.pathname.split('/').join('') === "productssamsung" || router.pathname.split('/').join('') === "productshuawei" ? "neutral" : 'inherit'}>Products {<ArrowDropDownIcon />}</Button>
            <Link href="/components/support"> <Button className='navbar-item supp' variant='text' color={router.pathname.split('/').join('') === "componentssupport" ? "neutral" : 'inherit'}>Support</Button></Link>
            <Link href="/components/blog"><Button className='navbar-item' variant='text' color={router.pathname.split('/').join('') === "componentsblog" ? "neutral" : 'inherit'}>Blog</Button></Link>
            <Link href="/components/myaccount"><Button className='navbar-item' variant='text' color={router.pathname.split('/').join('') === "componentsmyaccount" ? "neutral" : 'inherit'}>My Account</Button></Link>
            <Button onMouseOver={handleClickEnglish} variant='text' color='inherit'>{<LanguageIcon />} English {<ArrowDropDownIcon />}</Button>
            <Link href="/getstarted"><Button sx={{ border: 2, borderRadius: 5, ':hover': { bgcolor: 'white' }, }} variant='text' color={router.pathname.split('/').join('') === "getstarted" ? "neutral" : 'inherit'}>Get Started</Button></Link>
            {/* ................... what is a vpn ........................... */}
            <Menu
              id="demo-positioned-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={{ marginTop: 1 }}
            >
              <Link href="/whatisavpn/vpn"><MenuItem sx={{ color: `${router.pathname.split('/').join('') === "whatisavpnvpn" ? "#64748B" : 'inherit'}` }} onClick={handleClose}>vpn</MenuItem></Link>
              <Link href="/whatisavpn/vpn1"><MenuItem sx={{ color: `${router.pathname.split('/').join('') === "whatisavpnvpn1" ? "#64748B" : 'inherit'}` }} onClick={handleClose}>vpn1</MenuItem></Link>
              <Link href="/whatisavpn/vpn2"><MenuItem sx={{ color: `${router.pathname.split('/').join('') === "whatisavpnvpn2" ? "#64748B" : 'inherit'}` }} onClick={handleClose}>vpn2</MenuItem></Link>
            </Menu>
            {/* ................... what is a vpn ........................... */}
            {/* ................... products ........................... */}
            <Menu
              id="products-positioned-menu"
              anchorEl={anchorElProducts}
              open={openProducts}
              onClose={handleCloseProducts}
              sx={{ marginTop: 1 }}
            >
              <Link href="/products/nokia"><MenuItem sx={{ color: `${router.pathname.split('/').join('') === "productsnokia" ? "#64748B" : 'inherit'}` }} onClick={handleClose}>Nokia</MenuItem></Link>
              <Link href="/products/samsung"><MenuItem sx={{ color: `${router.pathname.split('/').join('') === "productssamsung" ? "#64748B" : 'inherit'}` }} onClick={handleClose}>Samsung</MenuItem></Link>
              <Link href="/products/huawei"><MenuItem sx={{ color: `${router.pathname.split('/').join('') === "productshuawei" ? "#64748B" : 'inherit'}` }} onClick={handleClose}>Huawei</MenuItem></Link>
            </Menu>
            {/* ................... products ........................... */}
            {/* ................... english ........................... */}
            <Menu
              id="english-positioned-menu"
              anchorEl={anchorElEnglish}
              open={openEnglish}
              onClose={handleCloseEnglish}
              sx={{ marginTop: 1 }}
            >
              <Link href="#"><MenuItem onClick={handleClose}>Urdu</MenuItem></Link>
              <Link href="#"><MenuItem onClick={handleClose}>Japnese</MenuItem></Link>
            </Menu>
            {/* ................... english ........................... */}
          </Toolbar>
        </AppBar>
      </ThemeProvider>



      <Component {...pageProps} />
    </>
  )
}
