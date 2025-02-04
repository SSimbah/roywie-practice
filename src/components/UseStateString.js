import React, { useState } from 'react';
import { Button, Text } from '@chakra-ui/react';

function UseStateString(){
    const [button, setButton] = useState("pink");

    return(
        <div>
            <Button
            onClick={()=>{
                button === "pink" ? setButton("blue") : setButton("pink")
            }}
            colorScheme={button} 
            >
                <Text>
                    {
                        button === "pink" ? "Pink" : "Blue"
                    }
                </Text>
            </Button>
        </div>
    );
};


export default UseStateString;