import React from 'react';
import './file2.css'

export default function Style1() {

    const a = {
        color:"green",
        fontSize:"40px"
    }

    return (
        <>
            <p style={a}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>


            <p className='summa'>Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation.</p>

            <p className='summma1' style={a}>Facebook is an online social media and social networking service owned by American technology giant Meta Platforms.</p>
        
        </>
    )
}