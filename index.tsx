import classNames from 'classnames/bind';
import style from './CreateBid.module.scss';

import {
  Box,
  Link,
  Grid,
  TextField,
  Select,
  Menu,
  MenuItem,
  InputLabel,
  Button,
  IconButton,
  InputAdornment,
  Checkbox
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import SettingsIcon from '@mui/icons-material/Settings';
import MinimizeIcon from '@mui/icons-material/Minimize';
import React, { useState } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { RadioGroup, FormControlLabel, Radio, FormControl } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const cx = classNames.bind(style);

const CreateBID = () => {
  const [activeTarget, setActiveTarget] = useState('target1'); // Set 'target1' as the initial active target

  const handleTargetClick = target => {
    setActiveTarget(target);
  };

  const [selectedValue, setSelectedValue] = React.useState('');

  const handleCheckboxChange = value => {
    if (value === selectedValue) {
      setSelectedValue('');
    } else {
      setSelectedValue(value);
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setIsExpanded(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsExpanded(false);
  };

  const renderCheckbox = (value, label) => (
    <FormControlLabel
      value={value}
      control={
        <Checkbox
          color='primary'
          checked={value === selectedValue}
          onChange={() => handleCheckboxChange(value)}
        />
      }
      label={label}
      labelPlacement='end'
    />
  );

  return (
    <Box
      width='100%'
      maxWidth='1200px'
      display='flex'
      flexDirection={'column'}
      alignItems='center'
      justifyContent='flex-start' // Added justifyContent property
      mx='auto'
      pb='5px'
      minHeight='100vh' // Added minHeight property to center vertically
    >
      <Box
        display='flex'
        alignItems='center'
        my='20px'
        style={{ borderBottom: '1px solid gray' }} // Added bottom border
      >
        <Link
          href='#'
          underline='none'
          my='2px'
          mr='25px'
          color={'black'}
          style={{
            color: activeTarget === 'target1' ? 'blue' : 'inherit',
            borderBottom: activeTarget === 'target1' ? '3px solid blue' : 'none',
            padding: activeTarget === 'target1' ? '10px' : '0'
          }}
          onClick={() => handleTargetClick('target1')}
        >
          Target 1
        </Link>

        <Link
          href='#'
          underline='none'
          my='2px'
          mr='25px'
          color={'black'}
          style={{
            color: activeTarget === 'target2' ? 'blue' : 'inherit',
            borderBottom: activeTarget === 'target2' ? '3px solid blue' : 'none',
            padding: activeTarget === 'target2' ? '10px' : '0'
          }}
          onClick={() => handleTargetClick('target2')}
        >
          Target 2
        </Link>

        <Link
          href='#'
          underline='none'
          my='2px'
          color={'black'}
          style={{
            color: activeTarget === 'target3' ? 'blue' : 'inherit',
            borderBottom: activeTarget === 'target3' ? '3px solid blue' : 'none',
            padding: activeTarget === 'target3' ? '10px' : '0'
          }}
          onClick={() => handleTargetClick('target3')}
        >
          Target 3
        </Link>
      </Box>
      <Box
        width='100%'
        mx='auto'
      >
        <Grid
          marginTop='30px'
          container
          spacing={10}
        >
          <Grid
            container
            style={{ alignItems: 'center' }}
          >
            <Typography style={{ marginRight: '20px' }}>Target 1</Typography>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Grid>

          <Grid
            item
            xs={3}
            style={{ border: '1px solid gray', padding: '10px', marginRight: '100px' }}
          >
            <div
              className='row'
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '20px',
                height: '40px'
              }}
            >
              <InputLabel htmlFor='expected-ir'>Expected IR (%)</InputLabel>
              <TextField
                id='expected-ir'
                variant='outlined'
                size='small'
                style={{ width: '90px' }}
              />
            </div>
            <div
              className='row'
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '20px',
                height: '40px'
              }}
            >
              <InputLabel htmlFor='expected-ir'>Survey length (min)</InputLabel>
              <TextField
                id='expected-ir'
                variant='outlined'
                size='small'
                style={{ width: '90px' }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <InputLabel htmlFor='sample-size'>Sample size</InputLabel>
              <TextField
                id='sample-size'
                variant='outlined'
                fullWidth
                size='small'
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <InputLabel id='target-type-label'>Target type</InputLabel>
              <Select
                labelId='target-type-label'
                id='target-type'
                variant='outlined'
                fullWidth
                size='small'
                value='target1' // Set the default value to 'target1'
                style={{ backgroundColor: '#f5f4f4' }} // Set color and border color
                inputProps={{ style: { background: 'red' } }} // Set color for selected option text
              >
                <MenuItem value='target1'>Target 1</MenuItem>
                <MenuItem value='target2'>Target 2</MenuItem>
                <MenuItem value='target3'>Target 3</MenuItem>
              </Select>
            </div>

            <InputLabel id='target-type-label'>Vendor selection</InputLabel>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid gray',
                padding: '10px'
              }}
            >
              <div
                style={{
                  marginRight: '10px',
                  backgroundColor: '#33acdd',
                  border: '1px solid black'
                }}
              >
                <Button
                  size='small'
                  style={{ color: 'white' }}
                >
                  Elicit
                </Button>
                <IconButton style={{ border: '1px solid black', borderRadius: '0' }}>
                  <CloseIcon style={{ color: 'white' }} />
                </IconButton>
              </div>
              <div style={{ backgroundColor: '#33acdd', border: '1px solid black' }}>
                <Button
                  size='small'
                  style={{ color: 'white' }}
                >
                  Sago
                </Button>
                <IconButton style={{ border: '1px solid black', borderRadius: '0' }}>
                  <CloseIcon style={{ color: 'white' }} />
                </IconButton>
              </div>
            </div>
            <TextField
              id='sample-size'
              variant='outlined'
              fullWidth
              size='small'
              value='Prodege'
              InputProps={{
                readOnly: true
              }}
              style={{ backgroundColor: '#ADD8E6', color: 'gray', marginBottom: '20px' }}
            />

            <TextField
              variant='outlined'
              fullWidth
              size='small'
              placeholder='Search criteria'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
              style={{ marginBottom: '20px' }}
            />
            <div style={{ border: '1px solid gray', padding: '10px' }}>
              <div style={{ border: '1px solid gray', padding: '10px' }}>
                <div>
                  <List>
                    <ListItem style={{ border: '1px solid gray', padding: '10px' }}>
                      <ListItemIcon>
                        <DragIndicatorIcon />
                      </ListItemIcon>
                      <ListItemText primary='Age' />
                    </ListItem>
                    <ListItem style={{ border: '1px solid gray', padding: '10px' }}>
                      <ListItemIcon>
                        <DragIndicatorIcon />
                      </ListItemIcon>
                      <ListItemText primary='Gender' />
                    </ListItem>
                    <ListItem style={{ border: '1px solid gray', padding: '10px' }}>
                      <ListItemIcon>
                        <DragIndicatorIcon />
                      </ListItemIcon>
                      <ListItemText primary='Marital Status' />
                    </ListItem>
                    <ListItem style={{ border: '1px solid gray', padding: '10px' }}>
                      <ListItemIcon>
                        <DragIndicatorIcon />
                      </ListItemIcon>
                      <ListItemText primary='Sexual Orientation' />
                    </ListItem>
                    <ListItem style={{ border: '1px solid gray', padding: '10px' }}>
                      <ListItemIcon>
                        <DragIndicatorIcon />
                      </ListItemIcon>
                      <ListItemText primary='Languages Spoken' />
                    </ListItem>
                    <ListItem style={{ border: '1px solid gray', padding: '10px' }}>
                      <ListItemIcon>
                        <DragIndicatorIcon />
                      </ListItemIcon>
                      <ListItemText primary='Household Canada' />
                    </ListItem>
                  </List>
                </div>
              </div>
            </div>
          </Grid>

          <Grid
            item
            xs={6}
            style={{ paddingLeft: '0px', paddingTop: '0px' }}
          >
            <div style={{ border: '1px solid gray', marginBottom: '50px' }}>
              <Accordion>
                <AccordionSummary
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <ListItem
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid gray'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <ListItemIcon>
                        <DragIndicatorIcon />
                      </ListItemIcon>
                      <ListItemText primary='Age' />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton>
                        <SettingsIcon />
                      </IconButton>
                      <IconButton>
                        <RemoveCircleOutlineIcon />
                      </IconButton>
                    </div>
                  </ListItem>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <Typography
                      style={{
                        borderBottom: '1px solid gray',
                        paddingTop: '10px',
                        paddingBottom: '10px'
                      }}
                    >
                      What is your age
                    </Typography>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: '60px'
                      }}
                    >
                      <Button>
                        <ArrowDropUpIcon style={{ width: '80px' }} />
                      </Button>
                      <TextField
                        id='sample-size'
                        variant='outlined'
                        style={{ width: '80px', marginLeft: 'auto', marginRight: 'auto' }}
                        size='small'
                      />
                      <Button>
                        <ArrowDropDownIcon style={{ width: '80px' }} />
                      </Button>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <MinimizeIcon />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <Button>
                        <ArrowDropUpIcon style={{ width: '80px' }} />
                      </Button>
                      <TextField
                        id='sample-size'
                        variant='outlined'
                        style={{ width: '80px', marginLeft: 'auto', marginRight: 'auto' }}
                        size='small'
                      />
                      <Button>
                        <ArrowDropDownIcon style={{ width: '80px' }} />
                      </Button>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      variant='outlined'
                      style={{ backgroundColor: '#f5f4f4', width: '95%' }}
                    >
                      Add age range
                    </Button>
                  </div>
                  <TextField
                    id='sample-size'
                    variant='outlined'
                    style={{ width: '100%' }}
                    size='small'
                  />
                </AccordionDetails>
              </Accordion>
            </div>

            <div style={{ border: '1px solid gray' }}>
              <Accordion>
                <AccordionSummary
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <ListItem
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid gray'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around'
                      }}
                    >
                      <ListItemIcon style={{ minWidth: '10px' }}>
                        <DragIndicatorIcon />
                      </ListItemIcon>
                      <Checkbox />
                      <ListItemText primary='Gender' />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton>
                        <SettingsIcon />
                      </IconButton>
                      <IconButton>
                        <RemoveCircleOutlineIcon />
                      </IconButton>
                    </div>
                  </ListItem>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <Typography
                      style={{
                        borderBottom: '1px solid gray',
                        paddingTop: '10px',
                        paddingBottom: '10px'
                      }}
                    >
                      What is your age
                    </Typography>
                  </div>
                  <Typography
                    style={{
                      borderBottom: '1px solid gray',
                      paddingTop: '10px',
                      paddingBottom: '10px'
                    }}
                  >
                    To which of the following gender identities do you most closely
                    identify?
                  </Typography>
                  <div>
                    <FormControl component='fieldset'>
                      {renderCheckbox('male', 'Male')}
                      {renderCheckbox('female', 'Female')}
                      {renderCheckbox(
                        'non-binary',
                        'Non-binary / Gender non-conforming / Another identity not listed'
                      )}
                    </FormControl>
                  </div>

                  <Box style={{ backgroundColor: '#f5f4f4', padding: '15px 5px' }}>
                    <Link
                      href='#'
                      underline='none'
                      my='2px'
                      mr='25px'
                      color={'black'}
                      style={{ padding: '15px 5px' }}
                    >
                      +Create Group
                    </Link>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
          <Grid
            item
            xs={2}
            style={{ paddingLeft: '0px', paddingTop: '0px' }}
          >
            <div style={{marginLeft:'100px'}}>
              <Button
                style={{
                  borderRadius: '999px',
                  padding: '20px 20px',
                  textTransform: 'none',
                  backgroundColor: '#03925e',
                  color: 'white',
                  width: '100%'
                }}
                onClick={handleClick}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                >
                  Save
                </span>
                <ArrowDropDownIcon style={{ position: 'absolute', right: '10px' }} />
              </Button>
              <Button>
                <Menu
                  anchorEl={anchorEl}
                  open={isExpanded}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Save and Send to Vendors</MenuItem>
                </Menu>
              </Button>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CreateBID;
