import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import Navbar from "./components/Navbar"
import Feed from "./components/Feed"
import ChannelDetail from './components/ChannelDetail'
import SearchFeed from "./components/SearchFeed"
import VedioDetail from "./components/VedioDetail.jsx"

const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }}>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Feed />} />
                <Route path='/video/:id' element={<VedioDetail />} />
                <Route path='/channel/:id' element={<ChannelDetail />} />
                <Route path='/search/:searchTerm' element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
)

export default App