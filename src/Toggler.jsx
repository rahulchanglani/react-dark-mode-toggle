import React from 'react'
import styled from 'styled-components'
import { MoonIcon } from '@heroicons/react/sloid';
import { useContext } from 'react';
import ThemeContext from './ThemeContext';


const StyledLabel = styled.label`
    input{
        position: fixed;
        left: -99999999px;
    }
    input ~ div {
        width: 30px;
        height: 16px;
        background: #eee;
        border-radius: 8px;
        position: relative;
    }
    svg {
        height: 14px;
        color: #fff;
        background-color: #ccc;
        border-radius: 7px;
        position: absolute;
        top: 1px;
        left: 1px;
        transition: all .4s ease;
    }
    input:checked ~ div {
        background: #668;
        svg {
            background-color: #224;
            left: 15px;
        }
    }
`;

const Toggler = () => {
    const theme = useContext(ThemeContext)
    return (
        <StyledLabel>
            <input type='checkbox' value={theme.darkMode}
                onChange={() => theme.setDarkMode(oldVal => !oldVal)} />
            <div>
                <MoonIcon />
            </div>
        </StyledLabel>
    )
}

export default Toggler