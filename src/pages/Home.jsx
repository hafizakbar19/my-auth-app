import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/cards/Card';
import { useState } from 'react';

function Home() {

  return (
    <div>
        <Navbar/>
        <Card />
    </div>
  )
}

export default Home