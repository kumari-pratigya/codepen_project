import React,{useState} from 'react'
import { Box,styled } from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

const Heading=styled(Box)`
background-color: "1d1e22";
display:flex;
padding:9px 12px;
`;
const Header=styled(Box)`
display:flex;
color:#AAAEBC;
background-color:#060606;
justify-content: space-between;
font-weight:700;
`;
const Container=styled(Box)`
flex-grow:1;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
`;

const Editor = ({ heading, language, value, onChange, icon, color}) => {
  const[open,setOpen]=useState(true)
  const handleChange = (editor, data, value) => {
    onChange(value);
}

  return (
    <Container style={open?null:{flexGrow:0}}>
      <Header>
        <Heading>
        <Box 
                        component="span"
                        style={{
                            background: color,
                            borderRadius: 5,
                            marginRight: 5,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            placeContent: 'center',
                            color: '#000',
                            paddingBottom: 2
                        }}
                    >{icon}
                    </Box>
                    {heading}
        </Heading>
        <CloseFullscreenIcon  fontSize="small"
                    style={{ alignSelf: 'center'}}
                    onClick={() => setOpen(prevState => !prevState)}/>
      </Header>
      <CodeMirror
       className="controlled-editor"
        value={value}
        onBeforeChange={handleChange}
       options={{
    theme: 'material',
    lineWrapping: true,
                    lint: true,
                    mode: language,
    lineNumbers: true
  }}
       />
    </Container>
  )
}

export default Editor
