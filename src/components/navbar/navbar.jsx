import { useState } from 'react';
import { createStyles, Header, Title } from '@mantine/core';
import { getVersion } from '@remla23-team2/lib/version-util';
import './navbar.scss'

export function Navbar() {
    return (
        <Header height={60} mb={120} bg='transparent' >
            <span>Current lib version: {getVersion()} </span>
            {/* <Title c={'brand'} td={'underline'}>Gourmet Groove </Title> */}


        </Header>
    );
}